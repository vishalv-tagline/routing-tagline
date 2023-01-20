import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminChildComponent } from './admin-child/admin-child.component';
import { AdminChild2Component } from './admin-child2/admin-child2.component';
import { RegistraionComponent } from './registraion/registraion.component';

const routes: Routes = [
  {
    path: 'citiesList',
    component: AdminChildComponent,
    children: [
      { path: 'registration', component: RegistraionComponent },
    ]
  },
  {
    path: 'citiesList/:id',
    component: AdminChild2Component
  },
  // {
  //   path: 'registration',
  //   component: RegistraionComponent
  // },
  {
    path: '**',
    redirectTo: 'citiesList'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
