import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductService } from 'src/app/services/product.service';

@Component({
	selector: 'add-product',
	templateUrl: './add-product.component.html',
	styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

	addProductForm!: FormGroup;
	submitted: boolean = false;

  	constructor( private formBuilder: FormBuilder, private productService: ProductService ) { }

	ngOnInit(): void {
		this.addProductForm = this.formBuilder.group({
			productName: [ "", Validators.required, Validators.minLength(3) ],
			productDescription: [ "", Validators.required, Validators.minLength(5) ],
			productStatus: [ "", ],
			productCreatedAt: [ "", ],
		});
	}

	get reference(){
		return this.addProductForm.controls;
	}

	onSubmit(){
		this.submitted = true;

		if( this.addProductForm.invalid ){
			// Do Something....
			return;
		}

		// console.table( this.addProductForm.value );
		// console.table( this.addProductForm );
		console.log( this.addProductForm.value );
		console.log( this.addProductForm.value.productName );
		console.log( this.addProductForm.value.productDescription );
		console.log( this.addProductForm.value );

		const product =  { 
			productName: this.addProductForm.value.productName, 
			productDescription: this.addProductForm.value.productDescription, 
			productStatus: this.addProductForm.value.productStatus, 
			productCreatedAt: this.addProductForm.value.productCreatedAt 
		};

		this.addProduct( product );
	}

	addProduct( product: any ){
		this.productService.addProduct( product );
	}
}
