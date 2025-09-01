import { Component, computed, OnInit, signal} from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { Order, OrderService } from '../services/orderservice';
import { FormsModule } from '@angular/forms';
import { MatFormField } from '@angular/material/form-field';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-orders',
  imports: [MatCardModule,MatTableModule,FormsModule,MatFormField,MatFormFieldModule,MatInputModule,MatSelectModule],
  templateUrl: './orders.html',
  styleUrl: './orders.css'
})
export class Orders implements OnInit{
orders: Order[] = [];

//Search/Filter for Orders by Customer ID//
customerIdInput: string ='';
  constructor(private orderService: OrderService) {}
//loads orders to table on page load
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

  //Create Order Form//
  newOrder: Partial<Order> = { customerId: '', totalSaleAmount: 0, orderDate: new Date().toISOString() };

  addOrder() {
    this.orderService.createOrder(this.newOrder as Order).subscribe(savedOrder => {
      this.orders.push(savedOrder);
      this.newOrder = { customerId: '', totalSaleAmount: 0, orderDate: new Date().toISOString() };
    });
  }

}