import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductlistComponent } from './productlist/productlist.component';
import { ProductaddEditComponent } from './productadd-edit/productadd-edit.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
  
    path: "",

    component: AppComponent,

    children: [

      { path: "", redirectTo: "productlist", pathMatch: "full" },

      {

        path:"productlist",
        component:ProductlistComponent
      },
      {
        path:"productadd",
        component:ProductaddEditComponent
      },
      {
        path:"edit/:id",
        component:ProductaddEditComponent,
      },
      {
        path:"delete/:id",
        component:ProductlistComponent
      }


    ]

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
