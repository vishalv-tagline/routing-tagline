import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminChildComponent } from './admin-child/admin-child.component';
import { AdminChild2Component } from './admin-child2/admin-child2.component';

const routes: Routes = [
  {
    path: 'admin-child',
    component: AdminChildComponent
  },
  {
    path: 'admin-child2/:id',
    component: AdminChild2Component
  },
  {
    path: '**',
    redirectTo: 'admin-child'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
