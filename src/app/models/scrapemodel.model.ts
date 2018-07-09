export interface IScrapeModel{
    Links:string[];
    Url:string;
    Title:string;
    ErrorMsg:string;
    InsertedDate:string;
    isProcessed:boolean;
    Level:number;
}
export class ScrapeModel implements IScrapeModel{
   Links:string[];
   Url:string;
   Title:string;
   ErrorMsg:string;
   InsertedDate:string;
   isProcessed:boolean;
   Level:number;
}