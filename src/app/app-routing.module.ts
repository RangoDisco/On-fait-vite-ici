import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { NorouteComponent } from './noroute/noroute.component';
import { PanierComponent } from './panier/panier.component';
import { ShopComponent } from './shop/shop.component';

const routes: Routes = [
  {path: 'accueil', component: AccueilComponent},
  {path: 'shop', component: ShopComponent},
  {path: 'panier', component: PanierComponent},
  {path: '', redirectTo: '/accueil', pathMatch: 'full'},
  {path: '**', component: NorouteComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
