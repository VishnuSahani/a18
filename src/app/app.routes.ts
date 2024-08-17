import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';
import { LandingPageComponent } from './shared/components/landing-page/landing-page.component';
import { HomeComponent } from './home/home/home.component';

export const routes: Routes = [
    {
        path : "", redirectTo:"home", pathMatch:"full"
    },
    {
        path:"login" ,
        component:LoginComponent
    },
    {
        path:"",
        component: LandingPageComponent,
        children:[
            {
                path:"home",
                loadChildren: ()=> import('./home/home.module').then((h)=>h.HomeModule)
            },
            { path: '**', component: PageNotFoundComponent }, // Catch-all for unmatched routes
        ]
    },
    { path: '**', component: PageNotFoundComponent }, // Catch-all for unmatched routes


   
];
