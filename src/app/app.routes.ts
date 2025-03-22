import { Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { ImprintComponent } from './imprint/imprint.component';

export const routes: Routes = [
    { path: '', component: HomepageComponent },
    { path: 'imprint', component: ImprintComponent}
    
];
