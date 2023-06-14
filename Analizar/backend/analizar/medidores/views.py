from django.core import serializers
from django.http import JsonResponse
from .models import Medidores, User
import json
from .serializars import MedidoresSerializer
from django.contrib.auth import get_user_model
from django.views.decorators.csrf import csrf_exempt
from django.views import View
from rest_framework.views import APIView
from django.forms.models import model_to_dict
from rest_framework.response import Response
from rest_framework import status


# Create your views here.
def getMedidores(request):
    medidores = list(Medidores.objects.values())#Traigo todos los usaurios registrados
    data = medidores
    return JsonResponse(data, safe=False)

class addMedidor(APIView):
    def post(self, request):
        serializer = MedidoresSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class getMedidoresByUser(View):
    def get(self, request, user_id):
        try:
            usuario = User.objects.get(id=user_id)
            medidores = Medidores.objects.filter(user=usuario)
            data = [model_to_dict(medidor) for medidor in medidores]
            return JsonResponse(data, safe=False)
        except User.DoesNotExist:
            return JsonResponse({'error': 'Usuario no encontrado'}, status=404)

@csrf_exempt
def deleteMedidor(request, id):
    try:
        medidor = Medidores.objects.get(idMedidor=id)
        medidor.delete()
        return JsonResponse({'message': 'Medidor eliminado correctamente'})
    except Medidores.DoesNotExist:
        return JsonResponse({'error': 'El medidor no existe'}, status=status.HTTP_404_NOT_FOUND)
    except Exception as e:
        return JsonResponse({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)