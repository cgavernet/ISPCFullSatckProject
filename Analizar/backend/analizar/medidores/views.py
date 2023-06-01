from django.core import serializers
from django.http import JsonResponse
from .models import Medidores
from django.forms.models import model_to_dict

# Create your views here.
def getMedidores(request):
    medidores = Medidores.objects.all()#Traigo todos los usaurios registrados
    data = [model_to_dict(medidor) for medidor in medidores] #Le indico que solo me devuelva el valor de los campos de alertas, el resto que lo descarte
    return JsonResponse(data, safe=False)