from django.core import serializers
from django.http import JsonResponse
from .models import Medidores, User
import json
from django.views.decorators.csrf import csrf_exempt

# Create your views here.
def getMedidores(request):
    medidores = list(Medidores.objects.values())#Traigo todos los usaurios registrados
    data = medidores
    return JsonResponse(data, safe=False)

@csrf_exempt
def postMedidores(request):
    jd = json.loads(request.body)
    # user = User.objects.get(id=jd['usuario'])
    Medidores.objects.create(nombre=jd["nombre"],detalle=jd["detalle"],identificador=jd["identificador"],user=jd['usuario'])
    data = {'message': "success"}
    return JsonResponse(data, safe=False)