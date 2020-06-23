import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-create-customer-dialog',
  templateUrl: './create-customer-dialog.component.html',
  styleUrls: ['./create-customer-dialog.component.css']
})
export class CreateCustomerDialogComponent implements OnInit {

  constructor( @Inject(MAT_DIALOG_DATA) private data: any,
  private dialogRef: MatDialogRef<CreateCustomerDialogComponent>) { }

  ngOnInit() {
  }

  customerForm = new FormGroup({
    customerName: new FormControl(null, [Validators.required,Validators.pattern("^[a-zA-Z]*$")]),
    phoneNo:new FormControl(null, [Validators.required,Validators.maxLength(10)]),
    email: new FormControl(null,[ Validators.required, Validators.email]),
    active: new FormControl(false, Validators.required),
  });

  cancelClicked(): void {
   this.dialogRef.close(null);
  }
  
  CreateCustomer() {
    this.dialogRef.close(this.customerForm.value);
  }
}
