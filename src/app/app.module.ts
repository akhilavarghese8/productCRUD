import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TableModule } from 'primeng/table';

import { ButtonModule } from 'primeng/button';
import { ProductaddEditComponent } from './productadd-edit/productadd-edit.component';
import { FileUploadModule } from 'primeng/fileupload';
import { RatingModule } from 'primeng/rating';
// import { MatButtonModule } from '@angular/material/button';
// import {MatTableModule} from '@angular/material/table';



@NgModule({
  declarations: [
    AppComponent,
    ProductlistComponent,
    ProductaddEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    TableModule,
    ButtonModule,
    FileUploadModule,
    RatingModule,
    // MatButtonModule,
    // MatTableModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
