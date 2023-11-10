import { Injectable } from '@angular/core';
import { ProductoCarrito } from './carrito';
import { Producto } from '../interfaces/producto';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() {
    const guardado= localStorage.getItem("carrito");
    if(guardado)
    this.carrito=JSON.parse (guardado);
    this.calculartotal()
    
   }

  carrito: ProductoCarrito[]= []
  totalCarrito: number=0;


  agregarAlCarrito(producto:Producto, cantidad:number){
    const productoActual:ProductoCarrito ={
      cantidad:1,
      producto: producto
    }
    this.carrito.push(productoActual);
    console.log(this.carrito)
    this.guardarLocalStorage()
    this.calculartotal()
    
  }
  eliminarProducto(nombre:string){
    this.carrito = this.carrito.filter(item => item.producto.nombre !== nombre);
    this.guardarLocalStorage()
    this.calculartotal()
    

  }
  vaciarCarrito(){
    this.carrito=[]
    this.guardarLocalStorage()
    this.calculartotal()

  }

  cambiarCantidad(){
    this.guardarLocalStorage()
    this.calculartotal()

  }
  guardarLocalStorage(){
    localStorage.setItem("carrito",JSON.stringify(this.carrito) )
  }
  calculartotal(){
    let subtotal =0;
    this.carrito.forEach(item=> {
        subtotal =subtotal+item.producto.precio

    })
    this.totalCarrito=subtotal


  }
}
