import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Injectable({
	providedIn: 'root'
})
export class CategoryService implements OnInit {

	private URL = "http://localhost:4000/api/v1";

	constructor( private httpClient: HttpClient, private toasterService: ToastrService, private router: Router ) { }

	ngOnInit(): void {
		this.getCategories();
	}

	getCategories(){
		return this.httpClient.get( this.URL + "/categories");
	}

	getCategoryById( categoryId: string ){
		return this.httpClient.get( this.URL + "/category/" + categoryId );
	}
}
