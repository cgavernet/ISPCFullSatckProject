from django.core import serializers
from django.http import JsonResponse
from django.views import View
from .models import *
import json
from rest_framework import status
from django.views.decorators.csrf import csrf_exempt
from django.forms.models import model_to_dict
# Create your views here.
def getProductos(request):
    productos = list(Productos.objects.values())
    data = productos
    return JsonResponse(data, safe=False)
#Obtener productos
class getProductosAndMedidores(View):
    def get(self, request):
        try:
            categoria = Categoria.objects.get(nombre='Medidor')
            productos = ProductosPorCategoria.objects.filter(categoria=categoria)
            data = []
            for producto_categoria in productos:
                producto = producto_categoria.producto
                datos_producto = {
                    'id': producto.id,
                    'nombre': producto.nombre,
                    'precio': producto.precio,
                    'rutaImagen': producto.rutaImagen,
                    'descripcion': producto.descripcion
                }
                data.append(datos_producto)
            #data = [model_to_dict(servicio) for servicio in servicios]
            return JsonResponse(data, safe=False)
        except ProductosPorCategoria.DoesNotExist:
            return JsonResponse({'error': 'Producto no encontrado'}, status=404)
#Obtener servicios
class getServicios(View):
    def get(self, request):
        try:
            categoria = Categoria.objects.get(nombre='Servicios')
            servicios = ProductosPorCategoria.objects.filter(categoria=categoria)
            data = []
            for producto_categoria in servicios:
                producto = producto_categoria.producto
                caracteristicas = producto.descripcion.split(';')
                datos_producto = {
                    'id': producto.id,
                    'nombre': producto.nombre,
                    'precio': producto.precio,
                    'caracteristicas': caracteristicas,
                }
                data.append(datos_producto)
            #data = [model_to_dict(servicio) for servicio in servicios]
            return JsonResponse(data, safe=False)
        except ProductosPorCategoria.DoesNotExist:
            return JsonResponse({'error': 'Servicio no encontrado'}, status=404)
#Obtener Categorias
class getCategoria(View):
    def get(self, request):
        try:
            categorias = Categoria.objects.all()
            data = [model_to_dict(categoria) for categoria in categorias]         
            return JsonResponse(data, safe=False)
        except Categoria.DoesNotExist:
            return JsonResponse({'error': 'Categoria no encontrada'}, status=404)
def getProductoPorId(request, id):
    producto = list(Productos.objects.filter(id=id).values())
    datos = producto
    return JsonResponse(datos[0], safe=False)

@csrf_exempt
def postProductos(request):
    jd = json.loads(request.body)
    categoria_id = jd['categoria']
    categoria = Categoria.objects.get(id=categoria_id)
    producto = Productos.objects.create(nombre=jd["nombre"],descripcion=jd["descripcion"],rutaImagen=jd["rutaImagen"],precio=jd["precio"],cantidadDisponible=jd["cantidadDisponible"])
    # Productos.objects.create(nombre=jd["nombre"],descripcion=jd["descripcion"],precio=jd["precio"],cantidadDisponible=jd["cantidadDisponible"],categorias=categoria)
    ProductosPorCategoria.objects.create(producto=producto, categoria=categoria)
    datos = {'message': "Creado con éxito"}
    return JsonResponse(datos)

@csrf_exempt
def editarProducto(request, id):
    jd = json.loads(request.body)
    producto = Productos.objects.get(id=id)
    producto.nombre = jd["nombre"]
    producto.descripcion = jd["descripcion"]
    producto.rutaImagen = jd["rutaImagen"]
    producto.precio = jd["precio"]
    producto.cantidadDisponible = jd["cantidadDisponible"]
    producto.save()
    datos = {'message': "Modificado con éxito"}
    return JsonResponse(datos)

@csrf_exempt
def eliminarProducto(request, id):
    producto = Productos.objects.get(id=id)
    producto.delete()
    datos = {'message': "Eliminado con éxito"}
    return JsonResponse(datos)