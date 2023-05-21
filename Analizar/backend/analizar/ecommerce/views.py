from django.core import serializers
from django.http import JsonResponse
from .models import *

# Create your views here.
def getProductos(request):
    alertas = Productos.objects.all()
    data = serializers.serialize('json', alertas)
    return JsonResponse(data, safe=False)