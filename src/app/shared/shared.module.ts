import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OurservicesComponent } from '../Feature/ourservices/ourservices.component';
import { HomeComponent } from '../Feature/home/home.component';
import { AboutusComponent } from '../Feature/aboutus/aboutus.component';
import { AddressComponent } from '../Feature/address/address.component';


@NgModule({
  declarations: [
    OurservicesComponent,
    HomeComponent,
    AboutusComponent,
    AddressComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [

  ]
})
export class SharedModule { }
