import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './product';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
 
  constructor(private http:HttpClient) { }
  getallproducts():Observable<Product[]>{
    return this.http.get<Product[]>(`https://fakestoreapi.com/products?sort=asc`)
  }
  creatingproducts(postdata:any){
    return this.http.post<Product[]>(`https://fakestoreapi.com/products`,postdata)

  }
  getproducts(id:any){
    const url='https://fakestoreapi.com/products/'+id
    return this.http.get<Product[]>(url)
  }
  editproducts(data:any,id:any){
    const url='https://fakestoreapi.com/products/'+id
    return this.http.put<Product[]>(url,data)
  }
  deletebooks(id:any){
    const url='https://fakestoreapi.com/products/'+id
    return this.http.delete<Product[]>(url)
  }
}
