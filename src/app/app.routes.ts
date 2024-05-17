import { Routes } from '@angular/router';

export const routes: Routes = [
    {path:'shop-app', loadChildren:() => import('./shop-app/shop-app.module').then(m => m.ShopAppModule)}
];
