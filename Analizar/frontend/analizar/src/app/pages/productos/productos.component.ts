import { Component, OnInit } from '@angular/core';
import { ProductosService } from 'src/app/productos.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})

export class ProductosComponent implements OnInit {
  productos: any[]=[];

  constructor(private productosService: ProductosService) {
    
    
  }

  ngOnInit(): void {
    this.productosService.getProductos().subscribe(
      (productos: any[]) => {
        this.productos = productos;
      },
      (error) => {
        console.error('Error al obtener los productos: ', error);
      }
    );
  }
}

