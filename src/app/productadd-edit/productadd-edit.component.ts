import { Component ,OnInit} from '@angular/core';
import { ProductService } from '../services/product.service';
import { FormControl,FormGroup,Validators ,FormBuilder} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { Product } from '../services/product';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-productadd-edit',
  templateUrl: './productadd-edit.component.html',
  styleUrls: ['./productadd-edit.component.css']
})
export class ProductaddEditComponent implements OnInit{

  productForm!: FormGroup;
  
  rating!: number;
  addmode:boolean=true;
  btn_click='Add'
  id=""

 

  

  constructor(private service:ProductService,private formBuilder: FormBuilder,private http:HttpClient,private route:ActivatedRoute){}
  onUpload(event: any) {
    const uploadedFiles = event.files; // Get the uploaded files from the event

    for (const file of uploadedFiles) {
      const formData = new FormData();
      formData.append('image', file); // Append the file to the form data

      // Send the HTTP POST request to the server
      this.http.post<any>('YOUR_UPLOAD_ENDPOINT', formData).subscribe(
        response => {
          // Handle the response from the server, such as displaying success message or updating the UI
          console.log('Upload successful:', response);
        },
        error => {
          // Handle the error, such as displaying an error message or performing appropriate error handling
          console.error('Upload error:', error);
        }
      );
    }
  }
  
    ngOnInit(): void {

      this.productForm = this.formBuilder.group({
        title: [null, [Validators.required]],
        price: [null, [Validators.required]],
        description: [null, [Validators.required]],
        category: [null, [Validators.required]],
        image: [null, [Validators.required]],
        rating: [null, [Validators.required]],
    });

this.id=this.route.snapshot.params["id"]
this.addmode=!this.id
if(!this.addmode){
  this.btn_click='updated'
  this.service.getproducts(this.id).subscribe(
    (response:any)=>{
      // console.log(response);
      this.productForm.patchValue({
        
        title:response.title,
        category:response.category,
        description:response.description,
        price:response.price,
        image:response.image,
        rating:response.rating.rate,
      })
      
    }
    
  )

}
else{
  this.btn_click='Add'
}
    }

addingproducts() {
    if(this.id!=null){
      this.service.editproducts(this.productForm.value,this.id).subscribe(
        (response:any)=>{
          console.log(response);
          
        }
      )

    }
    else{
      this.service.creatingproducts(this.productForm.value).subscribe(
        (response:any)=>{
          console.log(response);
          
        }
      )
    }

  }

  }



