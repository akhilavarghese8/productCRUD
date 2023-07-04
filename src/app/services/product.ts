export interface Product {
    id:number;
    title:string;
    price:number;
    description:string;
    category:string;
    image:File;
    rating:Ratingprops;
}
interface Ratingprops{
    rate:number;
    count:number;
}
