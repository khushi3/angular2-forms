import {ModuleWithProviders}  from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {HomeComponent} from './home.component';
import {AboutComponent} from './about.component';
import {FormsComponent} from './forms.component';
import {LoginComponent} from './login.component';
import { PrivateComponent } from './private.component';

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'about', component: AboutComponent },
     { path: 'forms', component: FormsComponent },
     { path: 'login', component: LoginComponent },
      { path: '', component: PrivateComponent },
      { path: '**', component: PrivateComponent }
];

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
