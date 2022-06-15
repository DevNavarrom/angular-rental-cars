import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'cars',
    loadChildren: () => import('../cars/cars.module').then(m => m.CarsModule)
  },
  {
    path: 'cars/detail',
    loadChildren: () => import('../cars/cars.module').then(m => m.CarsModule)
  },
  {
    path: '**',
    redirectTo: '/cars'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
