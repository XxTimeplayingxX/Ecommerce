import { Component, OnInit, SimpleChanges } from '@angular/core';
import { Products } from '../../MODELS/products.models';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit{
  productosElegidos= <Products[]>([]);
  ngOnInit(): void {
    this.getLocalStorage()
  }
  ngOnChanges(changes: SimpleChanges){
    console.log(changes[JSON.parse(localStorage.getItem('elegidos')!) || []])
    const cart = changes['productosElegidos'];
    this.getLocalStorage();
  }
  getLocalStorage(){
    this.productosElegidos = JSON.parse(localStorage.getItem('elegidos')!) || [];
    console.log(this.productosElegidos[1].image);
  }

  
}
