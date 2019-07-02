import { Component, OnInit } from '@angular/core';
import customers from '../../shared/data/data';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent implements OnInit {
  clientes:Array<any> = customers;

  constructor() { }

  ngOnInit() {
  }

}
