import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ECommerceRoutingModule } from './e-commerce-routing.module';
import { ProductoComponent } from './Components/producto/producto.component';
import { ListProductosComponent } from './Pages/list-productos/list-productos.component';
import { NavbarComponent } from '../shared/navBar/navbar/navbar.component';


@NgModule({
  declarations: [
    ProductoComponent,
    ListProductosComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    ECommerceRoutingModule
  ]
})
export class ECommerceModule { }
