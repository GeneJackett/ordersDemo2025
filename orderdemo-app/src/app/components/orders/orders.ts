import { Component, OnInit} from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { Order, OrderService } from '../services/orderservice';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-orders',
  imports: [MatCardModule,MatTableModule,FormsModule],
  templateUrl: './orders.html',
  styleUrl: './orders.css'
})
export class Orders implements OnInit{
textQuery = '';
orders: Order[] = [];

  constructor(private orderService: OrderService) {}

  ngOnInit(){
    this.orderService.getOrders().subscribe(data=> {
      this.orders = data;
      //check data is being called correctly
      console.log(this.orders);
    })
    }
  
  filterOders = this.orders.filter(p=>p.customerId === '');
  
  displayedColumns: string[] = ['customerId', 'orderId', 'totalSaleAmount', 'orderDate'];
  }