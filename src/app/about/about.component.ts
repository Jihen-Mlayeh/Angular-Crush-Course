import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/api/products/product.service';
import { ProductRepresentation } from '../services/api/models/product-representation';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  constructor(private service : ProductService){}
  ngOnInit(): void {
    // this.service.getAllProductsWithLimit().subscribe({next:(data)=>{
    //   console.log(data);
      
    // }});
    const product:ProductRepresentation={
      title:'My product',
      description:'Product Description',
      price:12,
      category:'Any category',
      image:'https://i.pravatar.cc',
        }
        this.service.addProduct(product).subscribe({next:(data)=>{
           console.log(data);
            
          },
          error:(error: HttpErrorResponse | ErrorEvent)=>{
            if(error instanceof ErrorEvent){
            console.log('An error occurred:',error.message);}
            else{
              //server side
              console.error(`Server returned status code:${error.status},,error message:${error.message}`);
            }
            

          }
        });
  }
//   constructor(private activatedRoute:ActivatedRoute
//   ){}
//   ngOnInit(): void {
//     console.log(this.activatedRoute);
//     this.param=this.activatedRoute.snapshot.params['username'];
//     //this.age=this.activatedRoute.snapshot.params['age'];
//     this.queryparams=this.activatedRoute.snapshot.queryParams['lastname'];
    
//   }
//   param:any;
//  // age:any;
//  queryparams:any;

}
