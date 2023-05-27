from django.core import serializers
from django.http import JsonResponse
from .models import Consumos

# Create your views here.
def getConsumos(request):
    consumos = Consumos.objects.all()
    data = serializers.serialize('json', consumos)
    return JsonResponse(data, safe=False)
