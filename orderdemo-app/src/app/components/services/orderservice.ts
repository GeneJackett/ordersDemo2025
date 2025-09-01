// order.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Order {
  customerId: string;
  orderId: string;
  totalSaleAmount: number;
  orderDate: string;
}

@Injectable({ providedIn: 'root' })
export class OrderService {
  constructor(private http: HttpClient) {}

  getOrders(): Observable<Order[]> {
    return this.http.get<Order[]>('http://localhost:8080/api/v1/Orders'); // intercepted & mocked
  }
  createOrder(order: Order): Observable<Order> {
    return this.http.post<Order>('/api/v1/Orders', order);
  }
  deleteOrder(order: Order): Observable<Order> {
    return this.http.delete<Order>('/api/v1/delete/order');
  }
  
}
