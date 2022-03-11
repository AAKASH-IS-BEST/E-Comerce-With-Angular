import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ProductService } from 'src/app/services/product.service';

@Component({
	selector: 'app-product',
	templateUrl: './product.component.html',
	styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
	products: any;

	constructor( private productService: ProductService, private toastrService: ToastrService ) { }

	ngOnInit(): void {
		this.productService.getProducts().subscribe(( data: any )=>{
			console.log( data.products );
			this.products = data.products;
		}, ( error )=>{
			this.toastrService.error( error.status, "Oops !! Failed to load the data from API !!")
		});
	}

}
