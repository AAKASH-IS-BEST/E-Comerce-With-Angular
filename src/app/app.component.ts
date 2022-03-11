import { Component, OnInit } from '@angular/core';

import { ToastrService } from 'ngx-toastr';
import { ProductService } from './services/product.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
	title = 'basic-ecomm';

	products: any;

	constructor( private productService: ProductService, private toastrService: ToastrService ){}

	ngOnInit(): void {
		// this.productService.getProducts();
	}
}
