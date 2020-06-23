import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { MaterialModule } from './shared/material-module';
import { LicenseKeyComponent } from './license/license-key/license-key.component';
import { LicenseGenerationComponent } from './license/license-generation/license-generation.component';
import { DownloadLicenseComponent } from './license/download-license/download-license.component';
import { CustomerComponent } from './components/customer/customer.component';
import { ProductComponent } from './components/product/product.component';
import { CreateCustomerDialogComponent } from './components/create-customer-dialog/create-customer-dialog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CreateProductDialogComponent } from './components/create-product-dialog/create-product-dialog.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    CustomerComponent,
    LicenseKeyComponent,
    LicenseGenerationComponent,
    DownloadLicenseComponent,
    CreateCustomerDialogComponent,
    CreateProductDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  entryComponents: [
    CreateCustomerDialogComponent,
    CreateProductDialogComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
