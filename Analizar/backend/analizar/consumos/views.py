from django.core import serializers
from django.http import JsonResponse
from .models import Consumos
import json
from django.views.decorators.csrf import csrf_exempt

# Create your views here.
def getConsumos(request):
    consumos = list(Consumos.objects.values())
    data = consumos
    return JsonResponse(data, safe=False)

@csrf_exempt
def postConsumos(request):
    jd = json.loads(request.body)
    Consumos.objects.create(medidor=jd["id_medidor"],fechaMedicion=jd["fecha_medicion"],consumo=jd["consumo"])
    datos = {'message': "success"}
    return JsonResponse(datos)