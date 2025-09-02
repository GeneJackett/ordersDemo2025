import { Component, computed, OnInit, signal} from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { Order, OrderService } from '../services/orderservice';
import { FormBuilder,FormGroup,FormsModule,ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormField } from '@angular/material/form-field';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { min } from 'rxjs';

@Component({
  standalone: true,
  selector: 'app-orders',
  imports: [
    MatCardModule,
    MatTableModule,
    MatFormField,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    ReactiveFormsModule,
    FormsModule
  ],
  templateUrl: './orders.html',
  styleUrl: './orders.css'
})
export class Orders implements OnInit{
orders: Order[] = [];
myForm!: FormGroup;
//Search/Filter for Orders by Customer ID//
customerIdInput: string ='';
  constructor(private orderService: OrderService, private fb: FormBuilder) {
    this.myForm = this.fb.group({
          customerId: ['', Validators.required],
          orderId: [''],
          totalSaleAmount: [0],
          orderDate: ['']
        });
  }
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
  onSubmit() {
    console.log(this.myForm);
    if (this.myForm.valid) {
      this.orderService.createOrder(this.myForm.value).subscribe({
        next: (res) => {
          console.log('Order created:', res);
          this.myForm.reset();
        },
        error: (err) => console.error('Error creating order', err)
      });
    }
  }

}