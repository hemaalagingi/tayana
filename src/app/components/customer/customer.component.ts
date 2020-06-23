import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatDialog, MatPaginator, MatSort } from '@angular/material';
import { Customer } from '../../models/customer.model';
import { CreateCustomerDialogComponent } from '../create-customer-dialog/create-customer-dialog.component';
import { CustomerService } from '../../services/customer.service';
const MOCKDATA = [
  { id: 1, custormerName: 'Lumina', phoneNo: '7707893413', email: 'Lumina@gmail.com', active: false, licenceInfo: '', LicenceDetail: '' },
  { id: 2, custormerName: 'MXT', phoneNo: '9702642367', email: 'MXT@gmail.com', active: true, licenceInfo: '', LicenceDetail: '' },
  { id: 3, custormerName: 'Acumatica', phoneNo: '880264000', email: 'Acumatica@gmail.com', active: true, licenceInfo: '', LicenceDetail: '' },
  { id: 4, custormerName: 'james', phoneNo: '8921783937', email: 'james@gmail.com', active: true, licenceInfo: '', LicenceDetail: '' }

]
@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  displayedColumns: string[] = ['custormerName', 'phoneNo', 'email', 'active'];
  dataSource = new MatTableDataSource(MOCKDATA);
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(public dialog: MatDialog, private customerService: CustomerService) { }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  getCustomers() {
    this.customerService.getCustomers().subscribe(res => {
      // this.dataSource.data = res;
    },
      error => {
        // error msg
      });
  }


  createCustomer() {
    const dialogRef = this.dialog.open(CreateCustomerDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result instanceof Customer)
        this.customerService.createCustomer(result).subscribe(res => {
          this.getCustomers();
        }, error => {

        });
    });
  }

}
