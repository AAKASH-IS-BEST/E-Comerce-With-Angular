import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CategoryService } from 'src/app/services/category.service';
@Component({
	selector: 'app-category',
	templateUrl: './category.component.html',
	styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

	categories: any;

	constructor( private categoryService: CategoryService, private toasterService: ToastrService ) { }

	ngOnInit(): void {
		this.categoryService.getCategories().subscribe(( data: any )=>{
			console.log( data );
			console.log( data.categories );
			
			this.categories = data.categories;

		}, ( error )=>{
			this.toasterService.error( error.status + "Failed to load the data !!");
		});
	}

}
