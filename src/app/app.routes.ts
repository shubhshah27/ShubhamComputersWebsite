import { Routes } from '@angular/router';
import { Home } from '../app/app/pages/home/home';
import { About } from '../app/app/pages/about/about';
import { Services } from '../app/app/pages/services/services';
import { Products } from '../app/app/pages/products/products';
import { Clients } from '../app/app/pages/clients/clients';
import { Contact } from '../app/app/pages/contact/contact';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'about', component: About },
  { path: 'services', component: Services },
  { path: 'products', component: Products },
  { path: 'clients', component: Clients },
  { path: 'contact', component: Contact },
  { path: '**', redirectTo: '' }
];
