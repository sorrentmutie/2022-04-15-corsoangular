import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroFormComponent } from './heroes/hero-form/hero-form.component';
import { ProductDetailsComponent } from './products/components/product-details/product-details.component';
import { ProductsPageComponent } from './products/components/products-page/products-page.component';
import { RandomUsersListComponent } from './randomusers/components/random-users-list/random-users-list.component';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';
import { WelcomeComponent } from './shared/components/welcome/welcome.component';
import { FirstComponent } from './subjects/first/first.component';

const routes: Routes = [
  {path: 'products', component: ProductsPageComponent},
  {path: 'products/:id', component: ProductDetailsComponent},
  {path: 'random', component: RandomUsersListComponent},
  {path: 'hero', component: HeroFormComponent},
  {path: '', component: FirstComponent},
  {path: "**", component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
