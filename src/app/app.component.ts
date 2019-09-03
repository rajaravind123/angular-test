import { Component } from '@angular/core';
import { ProductsService } from './services/products.service';
import { MatPaginator, MatSort, MatTableDataSource, PageEvent } from '@angular/material';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
})
export class AppComponent  {
  name = 'Angular';
  dataSource = new MatTableDataSource<any>();
  datalength = 0;
  getProductData: any;
  constructor(private productService: ProductsService ) { }

applyFilter(filterValue: string) {
       filterValue = filterValue.trim(); // Remove whitespace
       filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
       this.dataSource.filter = filterValue;
     }
     
  ngOnInit() {
   this.receiveProductData();
  }

  receiveProductData() {
    this.productService.getProduct().subscribe(data => {
      if (data != null) {
        //this.dataSource = new MatTableDataSource(JSON.parse(data.toString()));
        this.datalength = data.length;
        //console.log(data.toString());
        this.getProductData = JSON.parse(data.toString());
        console.log(this.getProductData);
      }
    });
  }


}
