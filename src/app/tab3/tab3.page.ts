import { Component } from '@angular/core';
import { CartService } from '../core/service/cart.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(public cartService:CartService) {}

  crearMensaje():string{
    let parteProducto='';
    this.cartService.carrito.forEach(productoCarrito=>{
      const mensajeProducto=`-${productoCarrito.producto.nombre} - ${productoCarrito.cantidad}
      `;
      
      parteProducto = parteProducto  + mensajeProducto;
    })
    const primeraParte = "http://wa.me/+5412345678?text="; 
    const segundaParte = `Hola, quiero hacer un pedido:
    ${parteProducto}
    Mis datos:
    -Nombre:NOMBRE
    -Dirección:DIRRECCIÓN

    Notas:
    `;
    const mensaje = encodeURI(primeraParte+segundaParte)
    return mensaje;
  }
  realizarPedido(){
    window.open(this.crearMensaje(),'_blank');
    this.cartService.vaciarCarrito();
  }
}
