import { Routes } from '@angular/router';
import { DetalheComponent } from './page/detalhe/detalhe.component';
import { HomeComponent } from './page/home/home.component';
import { ProdutosComponent } from './components/produtos/produtos.component';

export const routes: Routes = [
  {
    path: 'detalhe/:id',
    component: DetalheComponent,
  },
  {
    path: '', component: HomeComponent
  },
];
