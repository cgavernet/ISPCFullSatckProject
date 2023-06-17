import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ProductosService } from 'src/app/productos.service';

@Component({
  selector: 'app-edit-producto',
  templateUrl: './edit-producto.component.html',
  styleUrls: ['./edit-producto.component.css']
})
export class EditProductoComponent implements OnInit {
  constructor(private rutaEdit: ActivatedRoute, private fb: FormBuilder, private productosService: ProductosService, private router: Router){}
  productoId!: number;
  editProducto!: FormGroup;
  loginError: string = '';

  ngOnInit(): void {
    this.rutaEdit.params.subscribe(
      (params: Params) => {
        this.productoId = params['id'];
      })
      this.getProducto()
  }
  initForm(): FormGroup {
    return this.fb.group({
      nombre: ['', [Validators.required, Validators.maxLength(40)]],
      descripcion: ['', [Validators.required, Validators.maxLength(200)]],
      rutaImagen: ['', [Validators.required]],
      cantidadDisponible: ['', [Validators.required, Validators.pattern(/^\d+(.\d{1,2})?$/)]],
      precio: ['', [Validators.required, Validators.pattern(/^\d+(.\d{1,2})?$/)]]
    })
  }
  getProducto(){
    const idParam = this.rutaEdit.snapshot.paramMap.get('id');
    this.productoId = idParam ? +idParam : 0;
    this.editProducto = this.initForm()
    // Obtener datos productos y mostrarlos en el formulario
    this.productosService.getProductoById(this.productoId).subscribe((data) => {
      console.log(data);
      
      this.editProducto.patchValue({
        nombre: data.nombre,
        descripcion: data.descripcion,
        rutaImagen: data.rutaImagen,
        precio: data.precio,
        cantidadDisponible: data.cantidadDisponible
      });
    }, (error) => {
      console.error('Hubo un error al mostrar los detalles del producto', error);
    })
  }
  updateProducto(){
    const productos = {
      "nombre": this.editProducto.value.nombre,
      "descripcion": this.editProducto.value.descripcion, 
      "rutaImagen": this.editProducto.value.rutaImagen, 
      "precio": this.editProducto.value.precio, 
      "cantidadDisponible": this.editProducto.value.cantidadDisponible
    }
    if(this.editProducto.valid){
      this.productosService.updateProductoById(this.productoId, productos).subscribe((product) => {
        console.log('Producto editado con exito', product);
        this.router.navigate(['/productos']);        
      }, (error: any) => {
        this.loginError = 'Lo siento ocurrio un error al editar la alerta, revise que los campos esten completos';
      })
    }else{
      this.editProducto.markAllAsTouched()
      this.loginError = 'Complete los campos';
    }

  }
}
