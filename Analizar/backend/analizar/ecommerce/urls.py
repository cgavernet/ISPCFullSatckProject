from django.urls import path
from .views import *

urlpatterns = [
    path('', getProductos, name='getProductos'),
]