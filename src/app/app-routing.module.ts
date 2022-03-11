import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './CustomComponents/aboutus/aboutus.component';
import { AddProductComponent } from './CustomComponents/add-product/add-product.component';
import { CategoryComponent } from './CustomComponents/category/category.component';
import { ContactusComponent } from './CustomComponents/contactus/contactus.component';
import { EditProductComponent } from './CustomComponents/edit-product/edit-product.component';
import { MainContentComponent } from './CustomComponents/main-content/main-content.component';
import { ProductComponent } from './CustomComponents/product/product.component';
import { SubCategoryComponent } from './CustomComponents/sub-category/sub-category.component';

const routes: Routes = [
	{ path: "", component: MainContentComponent },
	{ path: "add-product", component: AddProductComponent },
	{ path: "edit-product", component: EditProductComponent },
	{ path: "product", component: ProductComponent },
	{ path: "category", component: CategoryComponent },
	{ path: "subcategory", component: SubCategoryComponent },
	{ path: "aboutus", component: AboutusComponent },
	{ path: "contactus", component: ContactusComponent },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})

export class AppRoutingModule { }
