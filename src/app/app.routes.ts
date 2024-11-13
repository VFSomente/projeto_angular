import { Routes } from '@angular/router';
import { DetalheComponent } from './page/detalhe/detalhe.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  {
    path: 'detalhe',
    component: DetalheComponent,
  },
  { path: '', component: HomeComponent },
];
