from rest_framework import serializers
from .models import Alertas

class AlertasSerializer(serializers.ModelSerializer):
    class Meta:
        model = Alertas
        fields = '__all__'