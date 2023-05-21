from django.core import serializers
from django.http import JsonResponse
from .models import Alertas

# Create your views here.
def getAlertas(request):
    alertas = Alertas.objects.all()
    data = serializers.serialize('json', alertas)
    return JsonResponse(data, safe=False)