import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CategoryService } from 'src/app/services/category.service';
CategoryService
Validators
FormGroup
FormBuilder

@Component({
    selector: 'app-add-category',
    templateUrl: './add-category.component.html',
    styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {

	addCategoryForm!: FormGroup;
	submitted: boolean = false;

    constructor( private categoryService: CategoryService, private formBuilder: FormBuilder ) { }

    ngOnInit(): void {
		this.addCategoryForm = this.formBuilder.group({
			categoryName: [ "", Validators.required, Validators.minLength(3) ],
			categoryDescription: [ "", Validators.required, Validators.minLength(3) ],
			
		});
    }

}
