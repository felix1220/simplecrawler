import { Component, OnInit } from '@angular/core';
import {ScrapeSiteService} from '../services/scrapesite.service';
import {IScrapeModel, ScrapeModel} from '../models/scrapemodel.model';
import{ BehaviorSubject} from 'rxjs';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/interval';
import { IntervalObservable } from "rxjs/observable/IntervalObservable"

@Component({
  selector: 'app-crawler-home',
  templateUrl: './crawler-home.component.html',
  styleUrls: ['./crawler-home.component.css']
})
export class CrawlerHomeComponent implements OnInit {

  
  crawlUrl:string;
  streamOfUrls:BehaviorSubject<string>; 
  crawler:IScrapeModel[];

  constructor(private scrapeSvc: ScrapeSiteService) { 

    this.crawlUrl="";
    this.streamOfUrls = new BehaviorSubject("seed");
    this.crawler = new Array<IScrapeModel>();
  }

  ngOnInit() {
    this.streamOfUrls.subscribe(newUrl =>{
     
      if(newUrl === "seed")
         return;

         console.log("In the stream:" + newUrl);
         let checkLevel = this.crawler.filter(x => {return x.Url === newUrl});
         //console.log(checkLevel);
         let parentLevel = 0;
         if(checkLevel.length === 0){
             let c = new ScrapeModel();
             c.Url = newUrl;
             c.Level=1;
             this.crawler.push(c);
             parentLevel=1;

         }
         else{
           parentLevel = checkLevel[0].Level;
         }
          

          if(parentLevel+1 <= environment.crawlingDepth)
          {
              
             
              this.scrapeSvc.getCrawlingLinks(encodeURI(newUrl)).subscribe((resp:IScrapeModel)=>{
              // debugger;
              
                if(resp.ErrorMsg ===  '' && !resp.isProcessed )
                  resp.Links.forEach(s =>{
                    let alreadyDone = this.crawler.filter(x => {return x.Url === s.toLocaleLowerCase()})
                    if(alreadyDone.length === 0){
                          let c= new ScrapeModel();
                          c.Level = parentLevel + 1;
                          c.Url = s.toLocaleLowerCase();
                          this.crawler.push(c);
                          this.streamOfUrls.next(s.toLocaleLowerCase());
                    }
                  })
                  let finish = this.crawler.filter(x => {return x.Url === newUrl})[0];
                  finish.isProcessed = true;
              });
              
               console.log('lets process')
          }
        
    });
  }
  startCrawling():void{
    
    if(this.crawlUrl.indexOf('http') < 0)
        this.crawlUrl= 'http://' + this.crawlUrl;

    this.crawlUrl = this.crawlUrl.replace(/\/$/, "");
   this.streamOfUrls.next(this.crawlUrl.toLocaleLowerCase());
  
 }
 clearBox():void{
   this.crawlUrl = "";
 }

}
