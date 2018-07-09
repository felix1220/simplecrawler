import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {ScrapeSiteService} from './services/scrapesite.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CrawlerHomeComponent } from './crawler-home/crawler-home.component';
import { CrawlerSearchComponent } from './crawler-search/crawler-search.component';


@NgModule({
  declarations: [
    AppComponent,
    CrawlerHomeComponent,
    CrawlerSearchComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [ScrapeSiteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
