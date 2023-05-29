from django.core import serializers
from django.http import JsonResponse
from .models import Alertas
from .serializers import AlertasSerializer
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.forms.models import model_to_dict
from django.views.decorators.csrf import csrf_exempt

# Create your views here.
def getAlertas(request):
    alertas = Alertas.objects.all()
    data = [model_to_dict(alerta) for alerta in alertas] #Le indico que solo me devuelva el valor de los campos de alertas, el resto que lo descarte
    return JsonResponse(data, safe=False)

class addAlerta(APIView):
    def post(self, request):
        serializer = AlertasSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# Elimino alerta
@csrf_exempt
def deleteAlerta(request, id):
    try:
        alerta = Alertas.objects.get(idAlerta=id)
        alerta.delete()
        return JsonResponse({'message': 'Alerta eliminada correctamente'})
    except Alertas.DoesNotExist:
        return JsonResponse({'error': 'La alerta no existe'}, status=status.HTTP_404_NOT_FOUND)
    except Exception as e:
        return JsonResponse({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)