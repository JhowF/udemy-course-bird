import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { AppHomeComponent } from './home/home.component';
import { RodapeComponent } from './rodape/rodape.component';
import { TopoComponent } from './topo/topo.component';
import { HttpClientModule } from '@angular/common/http';
import { RestauranteComponent } from './restaurante/restaurante.component';
import { DiversaoComponent } from './diversao/diversao.component';
import { RouterModule } from '@angular/router';
import { ROUTES } from './app.routes';
import { OfertaComponent } from './oferta/oferta.component';

@NgModule({
  declarations: [
    AppComponent,
    AppHomeComponent,
    RodapeComponent,
    TopoComponent,
    RestauranteComponent,
    DiversaoComponent,
    OfertaComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
