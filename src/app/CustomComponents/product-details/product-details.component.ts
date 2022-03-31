import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ProductService } from 'src/app/services/product.service';
import {CategoryService} from "../../services/category.service";

@Component({
	selector: 'app-product-details',
	templateUrl: './product-details.component.html',
	styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

	productId!: string;
	categoryId!: string;
	product: any;
	category: any;

	constructor( private productService: ProductService, private categoryService: CategoryService, private toastrService: ToastrService, private activatedRoute: ActivatedRoute ) {
		console.log("Constructor");

		this.activatedRoute.queryParams.subscribe(( params: any )=>{
			console.log( params );
			console.log( params["productId"] );
			this.productId = params["productId"];
			this.categoryId = params["categoryId"];
		});
	}

	ngOnInit(): void {
		console.log("ngOnInit");
		this.getProductById();
	}

	getProductById(){
		this.productService.getProductById( this.productId, this.categoryId ).subscribe(( data: any )=>{
			console.log( data );
			this.product = data.product;
		}, ( error )=>{
			console.log( error );
		});

		this.getCategoryById();
	}

	getCategoryById(){
		this.categoryService.getCategoryById( this.categoryId ).subscribe(( data: any )=>{
			console.log( data );
			this.category = data.category;
		}, ( error: any )=>{
			console.log( error );
		});
	}

}
