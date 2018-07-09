export interface IProduct{
    Id:number;
   Name:string;
   Category:string;
   Price:number;
}
export class Product implements IProduct{
   Id:number;
   Name:string;
   Category:string;
   Price:number;
}