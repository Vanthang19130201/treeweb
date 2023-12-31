import {CommonModule} from "@angular/common"
import {NgModule} from "@angular/core";
import {HompePageComponent} from "./components/hompe-page/hompe-page.component";
import {ProductsComponent} from "./components/products/products.component";
import {RouterModule, Routes} from "@angular/router";
import {ContactComponent} from "./components/contact/contact.component";
import {BlogComponent} from "./components/blog/blog.component";
import { LoginComponent } from "./components/login/login.component";
import { SignupComponent } from "./components/signup/signup.component";
// @ts-ignore
const authRoutes: Routes = [
  { path: 'home-page', component: HompePageComponent},
  { path: 'products', component: ProductsComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'blog', component: BlogComponent},
  { path: 'login', component: LoginComponent},
  { path: 'signup', component: SignupComponent},
  {
    path:'', redirectTo:'home-page', pathMatch:'full'
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule, RouterModule.forRoot(authRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
