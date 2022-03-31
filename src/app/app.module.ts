import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Toaster
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ToastrModule } from 'ngx-toastr';

// Font-Awesome
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { HeaderComponent } from './Layouts/header/header.component';
import { FooterComponent } from './Layouts/footer/footer.component';
import { MainContentComponent } from './CustomComponents/main-content/main-content.component';
import { NavigationComponent } from './CustomComponents/navigation/navigation.component';
import { AddProductComponent } from './CustomComponents/add-product/add-product.component';
import { EditProductComponent } from './CustomComponents/edit-product/edit-product.component';
import { ProductComponent } from './CustomComponents/product/product.component';
import { SubCategoryComponent } from './CustomComponents/sub-category/sub-category.component';
import { CategoryComponent } from './CustomComponents/category/category.component';
import { AboutusComponent } from './CustomComponents/aboutus/aboutus.component';
import { ContactusComponent } from './CustomComponents/contactus/contactus.component';
import { ProductDetailsComponent } from './CustomComponents/product-details/product-details.component';
import { CategoryDetailsComponent } from './CustomComponents/category-details/category-details.component';
import { AddCategoryComponent } from './CustomComponents/add-category/add-category.component';
// import { MatTreeFlatDataSource, MatTreeFlattener, MatTreeModule } from '@angular/material/tree';
// import { MatButtonModule } from "@angular/material/button";
// import { MatIconModule } from "@angular/material/icon";
// import { FlatTreeControl } from "@angular/cdk/tree";
// import { SelectionModel } from "@angular/cdk/collections"; 
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainContentComponent,
    NavigationComponent,
    AddProductComponent,
    EditProductComponent,
    ProductComponent,
    SubCategoryComponent,
    CategoryComponent,
    AboutusComponent,
    ContactusComponent,
    ProductDetailsComponent,
    CategoryDetailsComponent,
    AddCategoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    FontAwesomeModule,
    ReactiveFormsModule,
    // MatTreeModule,
    // MatIconModule,
    // MatButtonModule,
    // MatTreeFlattener,
    // MatTreeFlatDataSource,
    // FlatTreeControl,
    // SelectionModel,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
