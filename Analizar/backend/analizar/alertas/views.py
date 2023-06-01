from django.core import serializers
from django.http import JsonResponse
from .models import Alertas
from medidores.models import Medidores
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

#Editar alerta
class editAlerta(APIView):
    def put(self, request, id):
        medidor = request.data.get('medidor')
        try:
            alerta = Alertas.objects.get(idAlerta=id)
        except Alertas.DoesNotExist:
            return JsonResponse({'error': 'La alerta no existe'}, status=status.HTTP_404_NOT_FOUND)
        serializer = AlertasSerializer(alerta, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({'message': 'La alerta ha sido actualizada correctamente'}, status=status.HTTP_200_OK)
        else:
            if Medidores.objects.filter(idMedidor=medidor).exists():
                return Response({'error': 'El medidor no existe', 'alertaNoExiste': True}, status=status.HTTP_400_BAD_REQUEST)
            else:
                return Response({'error': 'Lo siento ocurrio un error al editar la alerta, revise los campos que esten completos', 'alertaNoExiste': False}, status=status.HTTP_400_BAD_REQUEST)

#Traigo alerta por ID
class getAlertaById(APIView):
    def get(self, request, id):
        try:
            alerta = Alertas.objects.get(idAlerta=id)
        except Alertas.DoesNotExist:
            return JsonResponse({'error': 'La alerta no existe'}, status=status.HTTP_404_NOT_FOUND)
        serializer = AlertasSerializer(alerta)
        return Response(serializer.data, status=status.HTTP_200_OK)

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