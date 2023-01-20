import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './Feature/aboutus/aboutus.component';
import { RegistraionComponent } from './Feature/admin/registraion/registraion.component';
import { BlogsComponent } from './Feature/blogs/blogs.component';
import { HomeComponent } from './Feature/home/home.component';
import { OurservicesComponent } from './Feature/ourservices/ourservices.component';
import { OurtechnologiesComponent } from './Feature/ourtechnologies/ourtechnologies.component';
import { TagloneExpcardComponent } from './Feature/taglone-expcard/taglone-expcard.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'services',
    component: OurservicesComponent
  },
  {
    path: 'ourtechnogies',
    component: OurtechnologiesComponent
  },
  {
    path: 'ourbest',
    component: TagloneExpcardComponent
  },
  {
    path: 'ourblog',
    component: BlogsComponent
  },
  {
    path: 'about',
    component: AboutusComponent
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('src/app/Feature/admin/admin.module').then(m => m.AdminModule)
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
