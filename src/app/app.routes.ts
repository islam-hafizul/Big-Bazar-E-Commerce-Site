import { Routes } from '@angular/router';
import { Login } from './pages/admin/login/login';
import { Layout } from './pages/admin/layout/layout';
import { Products } from './pages/admin/products/products';
import { Categories } from './pages/admin/categories/categories';
import { Home } from './pages/websites/home/home';
import { WebProducts } from './pages/websites/web-products/web-products';
import { WebCategory } from './pages/websites/web-category/web-category';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'shop',
        pathMatch:'full'
    },
    {
        path:'',
        component:Home,
        children: [
            {
                path:'shop',
                component:WebProducts
            },
            {
                path:'category/:id',
                component:WebCategory
            },
        ]
    },
    {
        path:'login',
        component:Login
    },
    {
        path:'',
        component:Layout,
        children:[
            {
                path:'products',
                component:Products
            },
            {
                path:'categories',
                component:Categories
            }
        ]
    }
];
