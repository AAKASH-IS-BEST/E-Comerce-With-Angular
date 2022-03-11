import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
	selector: 'app-edit-product',
	templateUrl: './edit-product.component.html',
	styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

	productId!: string;
	product!: any;
	updateProductForm!: FormGroup;
	submitted: boolean = false;

	constructor( private formBuilder: FormBuilder, private activeRoute: ActivatedRoute, private productService: ProductService ) { }

	ngOnInit(): void {

		this.updateProductForm = new FormGroup({
			productName: new FormControl(),
			productDescription: new FormControl(),
			productStatus: new FormControl(),
			productCreatedAt: new FormControl()
		});

		this.activeRoute.queryParams.subscribe( params => {
			console.log( params );
			console.log( params["productId"] );
			this.productId = params["productId"];
			
			this.productService.getProductById( this.productId ).subscribe(( data: any )=>{
				console.log( data );
				console.log( data.product.productId );
				this.product = data.product;
				console.log("Product: ", this.product );
				
				this.setDefault();	
			});
		});

		// this.updateProductForm = this.formBuilder.group({
		// 	productName: [ "", Validators.required, Validators.minLength(3) ],
		// 	productDescription: [ "", Validators.required, Validators.minLength(5) ],
		// 	productStatus: [ "", ],
		// 	productCreatedAt: [ "", ],
		// });

		// this.updateProductForm = new FormGroup({
		// 	productName: new FormControl(),
		// 	productDescription: new FormControl(),
		// 	productStatus: new FormControl(),
		// 	productCreatedAt: new FormControl()
		// });

		// try {
		// 	console.log( this.product );

		// 	this.updateProductForm.setValue({
		// 		productId: this.product.productId,
		// 		productName: this.product.productName,
		// 		productDescription: this.product.productDescription,
		// 		productStatus: this.product.productStatus,
		// 		productCreatedAt: this.product.productCreatedAt,
		// 	});	
		// } catch (error) {
			
		// }
	}

	setDefault(){

		// const formatedDate = this.datePipe.transform( this.product.productCreatedAt, "dd/mm/yy" );

		const product = {
			// productId: this.product.productId,
			productName: this.product.productName,
			productDescription: this.product.productDescription,
			productStatus: this.product.productStatus,
			productCreatedAt: this.product.productCreatedAt,
		};
		console.log( product.productCreatedAt );
		

		this.updateProductForm.setValue( product );
	}

	get reference(){
		return this.updateProductForm.controls;
	}

	onSubmit(){
		this.submitted = true;

		if( this.updateProductForm.invalid ){
			// Do Something.....
			return;
		}

		const product =  { 
			productName: this.updateProductForm.value.productName, 
			productDescription: this.updateProductForm.value.productDescription, 
			productStatus: this.updateProductForm.value.productStatus, 
			productCreatedAt: this.updateProductForm.value.productCreatedAt 
		};

		this.updateProduct( product );

		console.table( this.updateProductForm.value );
		console.table( this.updateProductForm );
	}

	updateProduct( product: any ){
		this.productService.updateProduct( product, this.productId );
	}

}
