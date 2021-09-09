import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/service/data.service';
import { Customer } from 'src/app/customer';

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css']
})
export class CustomerEditComponent implements OnInit {
  id: any;
  data: any;
  customer = new Customer();

  constructor(private route: ActivatedRoute, private dataServices: DataService) { }

  ngOnInit(): void {
    //console.log(this.route.snapshot.params.id);
    this.id = this.route.snapshot.params.id;
    this.getData();
  }

  getData() {
    this.dataServices.getCustomerById(this.id).subscribe(res => {
      //console.log(res);
      this.data = res;
      this.customer = this.data;
    })
  }

  updateCustomer() {
    this.dataServices.updateCustomer(this.id, this.customer).subscribe(res => {

    })
  }

}
