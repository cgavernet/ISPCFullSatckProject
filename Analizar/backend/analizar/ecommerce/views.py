from django.core import serializers
from django.http import JsonResponse

from .models import *
import json
# from rest_framework import status
from django.views.decorators.csrf import csrf_exempt

# Create your views here.
def getProductos(request):
    productos = list(Productos.objects.values())
    data = productos
    return JsonResponse(data, safe=False)

def getProductoPorId(request, id):
    producto = list(Productos.objects.filter(id=id).values())
    datos = producto
    return JsonResponse(datos[0], safe=False)

@csrf_exempt
def postProductos(request):
    jd = json.loads(request.body)
    # categoria = Categoria.objects.get(id=jd['id_categoria'])
    Productos.objects.create(nombre=jd["nombre"],descripcion=jd["descripcion"],rutaImagen=jd["rutaImagen"],precio=jd["precio"],cantidadDisponible=jd["cantidadDisponible"])
    # Productos.objects.create(nombre=jd["nombre"],descripcion=jd["descripcion"],precio=jd["precio"],cantidadDisponible=jd["cantidadDisponible"],categorias=categoria)
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