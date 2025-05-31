import { Routes } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { CategoryComponent } from './page/category/category.component';
import { ProductComponent } from './page/product/product.component';
import { LoginComponent } from './page/login/login.component';

export const routes: Routes = [
    {
        path:'',
        component:HomeComponent
    },
    {
        path:'category',
        component:CategoryComponent
    },

    {
        path:'product/:id',
        component:ProductComponent
    },
     {
        path:'login',
        component:LoginComponent
    },
    

];
