import { Component, EventEmitter, OnInit, Output, output, signal } from '@angular/core';
import { StoreService } from '../../../services/store.service';
import { Products } from '../../../shared/MODELS/products.models';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrl: './producto.component.css'
})
export class ProductoComponent implements OnInit{
  @Output() addToCart = new EventEmitter();

  products = <Products[]>([]);
  cart = <Products[]>([]);


  constructor(private storeService: StoreService){}

  ngOnInit(): void {
    this.getData();
  }
  getData(){
    this.storeService.getData().subscribe((data)=>
    {
      this.products = data;
      console.log(this.products);
    })
  }
  productToCart(index:number){
    console.log('Enviando producto: ' +this.products[index].title)
    this.cart.push(this.products[index]);
    localStorage.setItem('elegidos', JSON.stringify(this.cart));
    console.log(localStorage.getItem('elegidos')?.length)
    
  }
}
