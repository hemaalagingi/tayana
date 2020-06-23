import { NgModule } from "@angular/core";
import { SnackbarComponent } from './snackbar/snackbar.component';
import { LoaderLayoutComponent } from './loader-layout/loader-layout.component';
import { LayoutComponent } from './layout/layout.component';
import { MaterialModule } from './material-module';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        SnackbarComponent,
        LayoutComponent,
        LoaderLayoutComponent,
        ],
    imports: [MaterialModule,CommonModule,BrowserModule,RouterModule,
   ],
    exports: [LayoutComponent]
})

export class SharedModule {

}