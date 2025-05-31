import { Routes } from '@angular/router';
import { DistrictComponent } from './district/district.component';
import { DetailPageComponent } from './pages/detail-page/detail-page.component';

export const routes: Routes = [

    {path:'',component:DistrictComponent},
    {path:'district/:id',component:DetailPageComponent},
    
];
