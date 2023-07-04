import { Component,OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../services/product'
import { Router } from '@angular/router';
// import {LiveAnnouncer} from '@angular/cdk/a11y';
import {AfterViewInit,  ViewChild} from '@angular/core';
// import {MatSort, Sort, MatSortModule} from '@angular/material/sort';
// import {MatTableDataSource, MatTableModule} from '@angular/material/table';


@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit{
  // products:Product[] = [];
  // constructor(private service:ProductService,private route:Router){}
  ngOnInit(): void {
  //   this.service.getallproducts().subscribe(
  //     response=>{
  //       this.products=response;
        
      }
  //   )
    
  // }
  // createproducts(){
  //   this.route.navigate(['productadd'])
    
  // }
  // editproducts(id:any){
  //   this.route.navigate(['edit/'+id])
  // }
  // deleteproducts(id:any){
  //   this.route.navigate(['delete/'+id])
  //   this.service.deletebooks(id).subscribe(
  //     (response:any)=>{
  //       console.log(response);
        
  //     })
  //   }
    
  
  


}
