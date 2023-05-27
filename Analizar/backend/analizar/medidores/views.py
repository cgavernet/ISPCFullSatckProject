from django.core import serializers
from django.http import JsonResponse
from .models import Medidores

# Create your views here.
def getMedidores(request):
    medidores = Medidores.objects.all()#Traigo todos los usaurios registrados
    data = serializers.serialize('json', medidores)#Convierto los datos en un json
    return JsonResponse(data, safe=False)