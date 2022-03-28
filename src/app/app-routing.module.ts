import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './CustomComponents/aboutus/aboutus.component';
import { AddProductComponent } from './CustomComponents/add-product/add-product.component';
import { CategoryDetailsComponent } from './CustomComponents/category-details/category-details.component';
import { CategoryComponent } from './CustomComponents/category/category.component';
import { ContactusComponent } from './CustomComponents/contactus/contactus.component';
import { EditProductComponent } from './CustomComponents/edit-product/edit-product.component';
import { MainContentComponent } from './CustomComponents/main-content/main-content.component';
import { ProductDetailsComponent } from './CustomComponents/product-details/product-details.component';
import { ProductComponent } from './CustomComponents/product/product.component';
import { SubCategoryComponent } from './CustomComponents/sub-category/sub-category.component';

const routes: Routes = [
	{ path: "", component: MainContentComponent },
	{ path: "add-product", component: AddProductComponent },
	{ path: "edit-product", component: EditProductComponent },
	{ path: "products", component: ProductComponent },
	{ path: "categories", component: CategoryComponent },
	{ path: "subcategory", component: SubCategoryComponent },
	{ path: "aboutus", component: AboutusComponent },
	{ path: "contactus", component: ContactusComponent },
	{ path: "category-details", component: CategoryDetailsComponent },
	{ path: "product-details", component: ProductDetailsComponent },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})

export class AppRoutingModule { }
