import { Routes } from '@angular/router';
import { ImprintComponent } from './imprint/imprint.component';
import { HomepageComponent } from './homepage/homepage.component';

export const routes: Routes = [
    { path: '', component:HomepageComponent},
    { path: 'imprint', component: ImprintComponent},
    { path:'**', redirectTo:''}
    
];
