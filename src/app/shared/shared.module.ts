import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { OurservicesComponent } from './ourservices/ourservices.component';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AddressComponent } from './address/address.component';


@NgModule({
  declarations: [
    NavbarComponent,
    OurservicesComponent,
    HomeComponent,
    AboutusComponent,
    AddressComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  exports: [
    NavbarComponent
  ]
})
export class SharedModule { }
