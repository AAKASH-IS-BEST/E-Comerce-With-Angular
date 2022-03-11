import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ProductService implements OnInit {

	private URL: string = "http://localhost:4000/api/v1";

	products: any;

	constructor( private httpClient: HttpClient, private toastrService: ToastrService, private router: Router ) { }

	ngOnInit(): void {
		this.getProducts();
	}

	getProducts(){
		return this.httpClient.get( this.URL + "/products");
	}

	getProductById( productId: string ){
		return this.httpClient.get( this.URL + "/product/" + productId );
	}

	addProduct( product: any ){
		console.log("Service: "+product );
		
		this.httpClient.post( this.URL + "/product", product )
			.subscribe({ next: data => {
				console.log("Data saved succesfuly !!");
				this.toastrService.success("Data saved succesfuly !!");
				this.router.navigate(["/"]);
			},
			error: error => {
				this.toastrService.error( error.status, "Oops, Error while posting the data !!");
				console.log("Error while positng data !!!");
			}
		});
	}

	updateProduct( product: any, productId: string ){
		console.log("Service: ", product );
		
		this.httpClient.put( this.URL + "/product/" + productId, product )
			.subscribe({ next: data => {
				console.log("Data Updated succesfuly !!");
				this.toastrService.success("Data Updated succesfuly !!");
				this.router.navigate(["/"]);
			},
			error: error => {
				this.toastrService.error( error.status, "Oops, Error while Updating the data !!");
				console.log("Error while Updating data !!!");
			}
		});
	}

	deleteProduct( productId: string ){
		this.httpClient.delete( this.URL + "/product/" + productId )
			.subscribe({ next: data => {
				console.log("Data Deleted succesfuly !!");
				this.toastrService.success("Data Deleted succesfuly !!");
				this.router.onSameUrlNavigation = "reload";
				window.location.reload();
				// this.router.navigate(["/"]);
			},
			error: error => {
				this.toastrService.error( error.status, "Oops, Error while Deleting the data !!");
				console.log("Error while Deleting data !!!");
			}
		});
	}
}
