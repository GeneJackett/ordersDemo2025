import { Routes } from '@angular/router';
import { Orders } from './components/orders/orders';
import { Ordercard } from './components/ordercard/ordercard';
import { Blogcard } from './components/blogcard/blogcard';
export const routes: Routes = [
    {
        path: 'orders',
        component: Orders,
    },{
        path: 'blogcard',
        component: Blogcard,
    }
];
