import { Component, OnInit } from '@angular/core';
import {ISearch} from '../models/search.model';
import {ScrapeSiteService} from '../services/scrapesite.service';

@Component({
  selector: 'app-crawler-search',
  templateUrl: './crawler-search.component.html',
  styleUrls: ['./crawler-search.component.css']
})
export class CrawlerSearchComponent implements OnInit {

  searchResults:ISearch[];
  searchWord:string;
  constructor(private scrapeSvc: ScrapeSiteService) { 
    this.searchResults = new Array<ISearch>();
    this.searchWord = '';
  }

  ngOnInit() {
  }
  launchSearch():void{
    if(this.searchWord === '')
       return;

    this.scrapeSvc.searchByWord(encodeURI(this.searchWord)).subscribe((resp:ISearch[])=>{
      
       this.searchResults = resp;
    });
  }
  
}
