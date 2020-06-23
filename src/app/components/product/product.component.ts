import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatDialog, MatPaginator, MatSort } from '@angular/material';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product.model';
import { CreateProductDialogComponent } from '../create-product-dialog/create-product-dialog.component';
const MOCKDATA  = [
  {productCode: '1234', productDescription : "test123", active: false},
  {productCode: '456', productDescription : "test", active: true},
  {productCode: '789', productDescription : "data", active: false},
]
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  displayedColumns: string[] = ['productCode', 'productDescription', 'active'];
  dataSource = new MatTableDataSource(MOCKDATA);
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(public dialog: MatDialog, private productService: ProductService) { }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  getProducts() {
    this.productService.getProducts().subscribe(res => {

    })
  }

  createProduct() {
    const dialogRef = this.dialog.open(CreateProductDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result instanceof Product)
        this.productService.createProduct(result).subscribe(res => {
          this.getProducts();
        }, error => {

        });
    });
  }

}
