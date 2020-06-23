import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LicenseKeyComponent } from './license/license-key/license-key.component';
import { DownloadLicenseComponent } from './license/download-license/download-license.component';
import { LicenseGenerationComponent } from './license/license-generation/license-generation.component';
import { ProductComponent } from './components/product/product.component';
import { CustomerComponent } from './components/customer/customer.component';
import { LayoutComponent } from './shared/layout/layout.component';

const routes: Routes = [
  // {path:'', component:LayoutComponent, children :[
    {path:'license-key', component: LicenseKeyComponent},
    {path:'license-generation', component: LicenseGenerationComponent},
    {path:'license-download', component: DownloadLicenseComponent},
    {path:'product',component:ProductComponent},
    {path:'customers', component:CustomerComponent}
  // ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
