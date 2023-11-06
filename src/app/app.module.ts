import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HompePageComponent } from './components/hompe-page/hompe-page.component';
import { ProductsComponent } from './components/products/products.component';
import { BlogComponent } from './components/blog/blog.component';
import { ContactComponent } from './components/contact/contact.component';
import {AppRoutingModule} from "./app-routing.module";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import { NavBarComponent } from './common/nav-bar/nav-bar.component';
import { FoooterComponent } from './common/foooter/foooter.component';
import { CarouselComponent } from './common/carousel/carousel.component';


@NgModule({
  declarations: [
    AppComponent,
    HompePageComponent,
    ProductsComponent,
    BlogComponent,
    ContactComponent,
    NavBarComponent,
    FoooterComponent,
    CarouselComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
