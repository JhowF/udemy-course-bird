import { Routes } from '@angular/router';
import { AppHomeComponent } from './home/home.component';
import { RestauranteComponent } from './restaurante/restaurante.component';
import { DiversaoComponent } from './diversao/diversao.component';
import { OfertaComponent } from './oferta/oferta.component';
import { ComoUsarComponent } from './oferta/como-usar/como-usar.component';
import { OndeFicaComponent } from './oferta/onde-fica/onde-fica.component';
import { OrdemCompraComponent } from './ordem-compra/ordem-compra.component';

export const ROUTES: Routes = [
  { path: '', component: AppHomeComponent },
  { path: 'restaurantes', component: RestauranteComponent },
  { path: 'diversao', component: DiversaoComponent },
  { path: 'ofertas', component: AppHomeComponent },
  {
    path: 'ofertas/:id',
    component: OfertaComponent,
    children: [
      { path: '', component: ComoUsarComponent },
      { path: 'como-usar', component: ComoUsarComponent },
      { path: 'onde-fica', component: OndeFicaComponent },
    ],
  },
  { path: 'ordem-compra', component: OrdemCompraComponent },
];
