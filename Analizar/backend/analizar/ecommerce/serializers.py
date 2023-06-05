from rest_framework import serializers
from .models import Productos

class ProductosSerializer(serializers.ModelSerializer):
    class Meta:
        model = Productos
        fields = ['nombre', 'descripcion', 'precio', 'cantidadDisponible', 'categorias']
  