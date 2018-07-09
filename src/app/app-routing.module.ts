import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';
import{CrawlerHomeComponent} from './crawler-home/crawler-home.component';
import {CrawlerSearchComponent} from './crawler-search/crawler-search.component';

const routes: Routes = [
   {path:'crawlerhome', component: CrawlerHomeComponent },
   {path:'crawlersearch', component: CrawlerSearchComponent },
    { path: '', redirectTo: 'crawlerhome', pathMatch: 'full' }
  ];

  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }