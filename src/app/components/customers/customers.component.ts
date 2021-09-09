import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';
import { Customer } from 'src/app/customer';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  customers:any;
  customer = new Customer;

  constructor(private dataService:DataService) { }

  ngOnInit(): void {
    this.getCustomerData();
  }

  getCustomerData(){
    //console.log('Hello Custome');
    this.dataService.getData().subscribe(res => {
      //console.log(res);
      this.customers = res;
    });
  }

  insertData(){
    //console.log('Hello');
    //console.log(this.customer);
    this.dataService.insertData(this.customer).subscribe(res => {
      //console.log(res);
      this.getCustomerData();
    });
  }

  deleteData(id:any){
    //console.log(id);
    this.dataService.deleteData(id).subscribe(res => {
      this.getCustomerData();
    })
  }

}
