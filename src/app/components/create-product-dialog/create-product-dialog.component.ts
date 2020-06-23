import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-create-product-dialog',
  templateUrl: './create-product-dialog.component.html',
  styleUrls: ['./create-product-dialog.component.css']
})
export class CreateProductDialogComponent implements OnInit {

  constructor( @Inject(MAT_DIALOG_DATA) private data: any,
  private dialogRef: MatDialogRef<CreateProductDialogComponent>) { }

  ngOnInit() {
  }

  productForm = new FormGroup({
    productCode: new FormControl(null, [Validators.required]),
    productDescription:new FormControl(null, [Validators.required]),
    active: new FormControl(false, Validators.required),
  });

  cancelClicked(): void {
   this.dialogRef.close(null);
  }
  
  createProduct() {
    this.dialogRef.close(this.productForm.value);
  }

}
