import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ProductService } from 'src/app/services/product.service';

@Component({
	selector: 'app-product-details',
	templateUrl: './product-details.component.html',
	styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

	productId!: string;

	constructor( private productService: ProductService, private toastrService: ToastrService, private activatedRoute: ActivatedRoute ) { 
		console.log("Constructor");

		this.activatedRoute.queryParams.subscribe(( params: any )=>{
			console.log( params );
			console.log( params["id"] );
			this.productId = params["id"];
		});
	}

	ngOnInit(): void {
		console.log("ngOnInit");
	}

	getProductById( productId: string ){
		
	}

}
