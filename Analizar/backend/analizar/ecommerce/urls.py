from django.urls import path
from .views import *
from . import views

urlpatterns = [
    path('', getProductos, name='getProductos'),
    path('addProducto', views.addProducto.as_view(), name='addProducto'),
    path('getProductoById/<int:id>', getProductoById.as_view(), name='getProductoById'),
    path('editProducto/<int:id>', editProducto.as_view(), name='editProducto'),
    path('deleteProducto/<int:id>', deleteProducto, name='deleteProducto')
]
