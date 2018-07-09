import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../environments/environment';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { catchError, map } from 'rxjs/operators';
import {ISearch} from '../models/search.model';
import {IScrapeModel, ScrapeModel} from '../models/scrapemodel.model';

@Injectable()
export class ScrapeSiteService {
    constructor(private _httpService: HttpClient) {
        
    
      }
      getCrawlingLinks(parseUrl:string): Observable<IScrapeModel>{
          return this._httpService.get<IScrapeModel>(environment.serviceEndPt + "?webUrl=" + parseUrl);
      }
      getAllProcessedLinks(): Observable<IScrapeModel[]>{
        return this._httpService.get<IScrapeModel[]>(environment.serviceEndPt);
    }
    searchByWord(word:string):Observable<ISearch[]>{
        return this._httpService.get<ISearch[]>(  environment.serviceEndPt + "?d=0&word=" + word);
    }

}