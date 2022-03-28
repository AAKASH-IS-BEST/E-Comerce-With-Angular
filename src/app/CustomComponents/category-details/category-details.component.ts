import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CategoryService } from 'src/app/services/category.service';

@Component({
    selector: 'app-category-details',
    templateUrl: './category-details.component.html',
    styleUrls: ['./category-details.component.css']
})
export class CategoryDetailsComponent implements OnInit {

	categoryId!: string;
	category: any;

    constructor( private activatedRoute: ActivatedRoute, private CategoryService: CategoryService, private toasterService: ToastrService ) {
		this.activatedRoute.queryParams.subscribe(( params )=>{
			console.log( params );
			console.log( params["id"] );
			this.categoryId = params["id"];
		});
	}

    ngOnInit(): void {
		this.getCategoryById( this.categoryId );
    }

	getCategoryById( categoryId: string ){
		console.log("Coming........");
		this.CategoryService.getCategoryById( this.categoryId ).subscribe(( data: any )=>{
			console.log( data );
			console.log( data.category );
			
			this.category = data.category;
		}, ( error )=>{
			console.log( error.error.message );
			
			this.toasterService.error( error.error.message );
		});
	}
}
