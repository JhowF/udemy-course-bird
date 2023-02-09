import { Routes } from '@angular/router';
import { AppHomeComponent } from './home/home.component';
import { RestauranteComponent } from './restaurante/restaurante.component';
import { DiversaoComponent } from './diversao/diversao.component';

export const ROUTES: Routes = [
  { path: '', component: AppHomeComponent },
  { path: 'restaurantes', component: RestauranteComponent },
  { path: 'diversao', component: DiversaoComponent },
];
