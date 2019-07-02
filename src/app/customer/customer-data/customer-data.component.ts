import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import customers from '../../shared/data/data';

@Component({
  selector: 'app-customer-data',
  templateUrl: './customer-data.component.html',
  styleUrls: ['./customer-data.component.scss']
})
export class CustomerDataComponent implements OnInit {

  public identifier: any;
  clientes:Array<any> = customers;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    /*this.route.params.subscribe(miParams =>{this.identifier = miParams['id'];})  //Observable. lo guarda en memoria y lo va modificando en cada carga. Una forma de hacerlo. */
    this.identifier = this.route.snapshot.params['id']; //Otra forma de hacerlo
  }

}
