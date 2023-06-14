from django.urls import path
from .views import *

urlpatterns = [
    path('', getProductos, name='getProductos'),
    path('producto/<int:id>', getProductoPorId, name='getProductoPorId'),
    path('editar/producto/<int:id>', editarProducto, name='editarProducto'),
    path('eliminar/producto/<int:id>', eliminarProducto, name='eliminarProducto'),
    path('add', postProductos, name='postProductos'),
]