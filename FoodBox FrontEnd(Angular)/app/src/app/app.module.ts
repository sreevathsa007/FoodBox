import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule,Route, Router } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { CartComponent } from './cart/cart.component';
import { HeaderComponent } from './header/header.component';
import { ManageCustomersComponent } from './manage-customers/manage-customers.component';
import { ManagePurchaseComponent } from './manage-purchase/manage-purchase.component';
import { OrderSummaryComponent } from './order-summary/order-summary.component';
import { PaymentGatewayComponent } from './payment-gateway/payment-gateway.component';
import { ProductComponent } from './product/product.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSortModule } from '@angular/material/sort';

@NgModule({
  declarations: [
    AppComponent,
    AdminDashboardComponent,
    AdminLoginComponent,
    CartComponent,
    HeaderComponent,
    ManageCustomersComponent,
    ManagePurchaseComponent,
    OrderSummaryComponent,
    PaymentGatewayComponent,
    ProductComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    RouterModule,
    MatSnackBarModule,
    MatSortModule
    

  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
