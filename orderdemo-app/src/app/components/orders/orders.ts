import { Component, computed, OnInit, signal} from '@angular/core';
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
orders: Order[] = [];
customerIdInput: string ='';
  constructor(private orderService: OrderService) {}

  ngOnInit(){
    this.orderService.getOrders().subscribe(data=> {
      this.orders = data;
      //check data
      console.log(this.orders);
    })
    }

filterOrders() {
    const input = this.customerIdInput;
    if (!input) {
      this.orderService.getOrders().subscribe(data=> {
      this.orders = data;
      console.log(this.orders);
    })
      return;
    }
    this.orders = this.orders.filter(
      order => order.customerId === input
    );
    console.log(this.orders);
  }
  
  displayedColumns: string[] = ['customerId', 'orderId', 'totalSaleAmount', 'orderDate'];
  }