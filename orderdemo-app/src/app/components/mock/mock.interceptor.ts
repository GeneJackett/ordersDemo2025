// mock.interceptor.ts
import { HttpInterceptorFn, HttpResponse } from '@angular/common/http';
import { delay, of } from 'rxjs';

export const MockInterceptor: HttpInterceptorFn = (req,next) => {
    const LATENCY = 700;
    if (req.url.includes('/api/orders')) {
      const mockResponse = [
        {
          customerId: 'CUST123',
          orderId: 'ORD456',
          totalSaleAmount: 250.75,
          orderDate: '2025-08-25T10:30:00Z'
        },
        {
          customerId: 'CUST123',
          orderId: 'ORD999',
          totalSaleAmount: 499.99,
          orderDate: '2025-08-24T14:15:00Z'
        },
        {
          customerId: 'CUST1992',
          orderId: 'ORD456',
          totalSaleAmount: 250.75,
          orderDate: '2025-08-25T10:30:00Z'
        },
        {
          customerId: 'CUST1992',
          orderId: 'ORD999',
          totalSaleAmount: 499.99,
          orderDate: '2025-08-24T14:15:00Z'
        },
        {
          customerId: 'CUST2005',
          orderId: 'ORD456',
          totalSaleAmount: 250.75,
          orderDate: '2025-08-25T10:30:00Z'
        },
        {
          customerId: 'CUST7001',
          orderId: 'ORD999',
          totalSaleAmount: 499.99,
          orderDate: '2025-08-24T14:15:00Z'
        },
        {
          customerId: 'CUST7001',
          orderId: 'ORD456',
          totalSaleAmount: 250.75,
          orderDate: '2025-08-25T10:30:00Z'
        },
        {
          customerId: 'CUST1992',
          orderId: 'ORD999',
          totalSaleAmount: 499.99,
          orderDate: '2025-08-24T14:15:00Z'
        },
        {
          customerId: 'CUST7001',
          orderId: 'ORD456',
          totalSaleAmount: 250.75,
          orderDate: '2025-08-25T10:30:00Z'
        },
        {
          customerId: 'CUST1992',
          orderId: 'ORD999',
          totalSaleAmount: 499.99,
          orderDate: '2025-08-24T14:15:00Z'
        },
        {
          customerId: 'CUST7001',
          orderId: 'ORD456',
          totalSaleAmount: 250.75,
          orderDate: '2025-08-25T10:30:00Z'
        },
        {
          customerId: 'CUST1992',
          orderId: 'ORD999',
          totalSaleAmount: 499.99,
          orderDate: '2025-08-24T14:15:00Z'
        },
        {
          customerId: 'CUST7001',
          orderId: 'ORD456',
          totalSaleAmount: 250.75,
          orderDate: '2025-08-25T10:30:00Z'
        },
        {
          customerId: 'CUST1992',
          orderId: 'ORD999',
          totalSaleAmount: 499.99,
          orderDate: '2025-08-24T14:15:00Z'
        },
      ];
      return of(new HttpResponse({ status: 200, body: mockResponse })).pipe(delay(LATENCY));
    }
    return next(req);
  }

