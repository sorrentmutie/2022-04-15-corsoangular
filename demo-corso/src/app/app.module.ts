import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsListComponent } from './products/components/products-list/products-list.component';
import { MyFirstPipe } from './products/pipes/my-first.pipe';
import { AddressPipe } from './products/pipes/address.pipe';
import { RandomUsersListComponent } from './randomusers/components/random-users-list/random-users-list.component';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';
import { WelcomeComponent } from './shared/components/welcome/welcome.component';
import { ProductsPageComponent } from './products/components/products-page/products-page.component';
import { ProductDetailsComponent } from './products/components/product-details/product-details.component';
import { MyFirstInterceptor } from './shared/interceptors/my-first.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    ProductsListComponent,
    MyFirstPipe,
    AddressPipe,
    RandomUsersListComponent,
    NotFoundComponent,
    WelcomeComponent,
    ProductsPageComponent,
    ProductDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: MyFirstInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
