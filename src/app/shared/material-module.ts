import { NgModule } from "@angular/core";
import { MatProgressSpinnerModule,
    MatListModule,
    MatSidenavModule,
    MatIconModule,
    MatToolbarModule,
    MatTableModule,
    MatInputModule,
    MatFormFieldModule ,
    MatButtonModule,
    MatCheckboxModule,
    MatTooltipModule,
    MatDialogModule,
    MatCardModule,
    MatPaginatorModule,
    MatSortModule,
    MatSelectModule
 } from '@angular/material';


@NgModule(  {     
    exports: [MatProgressSpinnerModule,
        MatListModule,
        MatSidenavModule,
        MatIconModule,
        MatToolbarModule,
        MatTableModule,
        MatInputModule,
        MatFormFieldModule ,
        MatButtonModule,
        MatCheckboxModule,
        MatTooltipModule,
        MatDialogModule,
        MatCardModule,
        MatPaginatorModule,
        MatSortModule,
        MatSelectModule 
    ]}
)

export class MaterialModule {

}