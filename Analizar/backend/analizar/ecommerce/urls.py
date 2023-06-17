from django.urls import path
from .views import *

urlpatterns = [
    path('', getProductos, name='getProductos'),
    path('producto/<int:id>', getProductoPorId, name='getProductoPorId'),
    path('editar/producto/<int:id>', editarProducto, name='editarProducto'),
    path('eliminar/producto/<int:id>', eliminarProducto, name='eliminarProducto'),
    path('add', postProductos, name='postProductos'),
    path('getCategorias', getCategoria.as_view(), name='getCategorias'),
    path('getServicios', getServicios.as_view(), name='getServicios'),
    path('getProductosAndMedidores', getProductosAndMedidores.as_view(), name='getProductosAndMedidores')
]