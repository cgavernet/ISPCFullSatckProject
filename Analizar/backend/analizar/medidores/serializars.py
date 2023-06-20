from rest_framework import serializers
from .models import Medidores

class MedidoresSerializer(serializers.ModelSerializer):
    class Meta:
        model = Medidores
        fields = '__all__'