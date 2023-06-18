import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductosService } from 'src/app/productos.service';
import { AuthService } from 'src/app/service/auth.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})

export class ProductosComponent implements OnInit {
  productos: any[]=[];
  categorias: any[] = [];
  counter = Array;
  opcionSeleccionado: string = '1';
  verSeleccion: number = 1;
  insertProducto!: FormGroup;
  loginError: string = '';

  constructor(private productosService: ProductosService, private authService: AuthService, private fb: FormBuilder) {
       
  }

  ngOnInit(): void {
    this.insertProducto = this.initForm()
    this.getProductos()
    this.getCategorias()
  }

  isAdmin(): boolean {
    // console.log(this.authService.isLoggedIn);   
    return this.authService.getIsAdmin();
  }

  getProductos(){
    this.productosService.getProductosAndMedidores().subscribe(
      (productos: any[]) => {
        this.productos = productos;
      },
      (error) => {
        console.error('Error al obtener los productos: ', error);
      }
    );
  }

  getCategorias(){
    this.productosService.getCategorias().subscribe(
      (categoria: any) => {
        this.categorias = categoria;
        //console.log(categoria);
      }
    )
  }
  capturar() {
    // Pasamos el valor seleccionado a la variable verSeleccion
    this.verSeleccion = Number(this.opcionSeleccionado);
  }
  //Agregar producto
  addProducto(){
  const nombre = this.insertProducto.value.nombre; 
  const descripcion = this.insertProducto.value.descripcion;
  const rutaImagen = this.insertProducto.value.rutaImagen; 
  const cantidadDisponible = this.insertProducto.value.cantidadDisponible;
  const precio = this.insertProducto.value.precio;
  const categoria = this.insertProducto.value.categoria;
  if(this.insertProducto.valid){
  this.productosService.addProducto(nombre, descripcion, rutaImagen, precio, cantidadDisponible, categoria).subscribe((product: any) => {
    console.log('Producto agregado con éxito:', product);
    this.closeAddProducto();
    this.getProductos()
  }, (error: any) => {
    console.error('Hubo un error al agregar la alerta', error);
  })
  }else{
    this.insertProducto.markAllAsTouched();
    this.loginError = 'Complete los campos';
  }
  }
  // Modal agregar producto
  openAddProducto(): void {
    const modalProducto = document.getElementById('addProducto');
    let contenedorProductos = document.getElementById('productos');
    if(modalProducto != null) {
      //console.log('click');      
      modalProducto.classList.remove('d-none');
      modalProducto.classList.add('d-flex'); 
      this.insertProducto.reset();     
    }
    if(contenedorProductos != null) {
      contenedorProductos.classList.add('visually-hidden');
    }
  }
  closeAddProducto() {
    const modalProducto = document.getElementById('addProducto');
    let contenedorProductos = document.getElementById('productos');
    if(modalProducto != null) {     
      modalProducto.classList.remove('d-flex'); 
      modalProducto.classList.add('d-none');   
    }
    if(contenedorProductos != null) {
      contenedorProductos.classList.remove('visually-hidden');
    }
  }
  initForm(): FormGroup {
    return this.fb.group({
      nombre: ['', [Validators.required, Validators.maxLength(40)]],
      descripcion: ['', [Validators.required, Validators.maxLength(300)]],
      rutaImagen: ['', [Validators.required]],
      cantidadDisponible: ['', [Validators.required, Validators.pattern(/^\d+(.\d{1,2})?$/)]],
      precio: ['', [Validators.required, Validators.pattern(/^\d+(.\d{1,2})?$/)]],
      categoria: ['']
    })
  }


  removeProducto(id: number){
    this.productosService.removeProducto(id).subscribe((product: any) => {
      console.log('Producto eliminado con exito:', product);
      this.getProductos()
    }, (error: any) => {
      console.error('Hubo un error al eliminar el producto', error);      
    })
  }
  
  agregarCarrito(producto:any, cantidad:number, tipoProducto:string){

    console.log(cantidad)
    if(cantidad === 0){
      Swal.fire({
        icon: 'error',
        title: 'Sin stock!',
        text: 'No quedan unidades disponibles de este producto!'
      })
    }

    if(localStorage.getItem('mi-carrito') != null){
      let carritoActual = JSON.parse(localStorage.getItem('mi-carrito')!)
      let seAgregoElemento = false

      for(let item of carritoActual){
        // console.log(item)
        if(item.producto.id === producto.id){
          item.cantidad += cantidad
          seAgregoElemento = true
        }
      }

      if(!seAgregoElemento){
        // let nuevaCantidadFinal = producto.cantidadDisponible - cantidad
        // const prod = {
        //   "nombre": producto.nombre, 
        //   "descripcion":producto.descripcion, 
        //   "rutaImagen": producto.rutaImagen, 
        //   "precio": producto.precio, 
        //   "cantidadDisponible": nuevaCantidadFinal
        // }
        // this.productosService.updateProductoById(producto.id, prod).subscribe((data:any) => {
        //   console.log(data)  
        //   return data
        // },(error:any) => {
        //   console.error(error)
        // })
        carritoActual!.push({producto,cantidad, tipoProducto})
      }
      
      localStorage.setItem('mi-carrito',JSON.stringify(carritoActual))
    }else{
      let carritoActual = JSON.stringify([{producto,cantidad, tipoProducto}])
      // let nuevaCantidadFinal = producto.cantidadDisponible - cantidad
      // const prod = {
      //   "nombre": producto.nombre, 
      //   "descripcion":producto.descripcion, 
      //   "rutaImagen": producto.rutaImagen, 
      //   "precio": producto.precio, 
      //   "cantidadDisponible": nuevaCantidadFinal
      // }
      // this.productosService.updateProductoById(producto.id, prod).subscribe(data => console.log(data))
      localStorage.setItem('mi-carrito',carritoActual)
    }
    
    Swal.fire({
      icon: 'success',
      title: 'Éxito!',
      text: 'Se agregó el producto al carrito!'
    }).then(()=>{
      let nuevaCantidadFinal = producto.cantidadDisponible - cantidad
      const prod = {
        "nombre": producto.nombre, 
        "descripcion":producto.descripcion, 
        "rutaImagen": producto.rutaImagen, 
        "precio": producto.precio, 
        "cantidadDisponible": nuevaCantidadFinal
      }
      this.productosService.updateProductoById(producto.id, prod).subscribe((data:any) => {
        //console.log(data) 
        this.verSeleccion = 0 
        this.getProductos()
        return data
      },(error:any) => {
        console.error(error)
      })      
    })
  }
}
