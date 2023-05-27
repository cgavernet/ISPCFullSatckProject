from django.core import serializers
from django.http import JsonResponse
from .serializers import UserSerializers
from users.models import User
from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view 

# Create your views here.
def getUser(request):
    users = User.objects.all()#Traigo todos los usaurios registrados
    data = serializers.serialize('json', users)#Convierto los datos en un json
    return JsonResponse(data, safe=False)

def addUser(request):
    if request.method == 'POST':
        serializer = UserSerializers(data=request.POST)
        if serializer.is_valid():
            user = serializer.save()
            return JsonResponse({'mensaje': 'Usuario agregado correctamente', 'id': user.id})
        return JsonResponse(serializer.errors, status=400)
    return JsonResponse({'mensaje': 'Metodo no permitido'}, status=405)

def editUser(request, user_id):
    try:
        user = User.objects.get(id=user_id)
    except User.DoesNotExist:
        return JsonResponse({'mensaje': 'Usuario no encontrado'}, status=404)

    if request.method == 'POST':
        serializer = UserSerializers(instance=user, data=request.POST)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse({'mensaje': 'Usuario actualizado exitosamente', 'user': serializer.data})
        return JsonResponse({'mensaje': 'Datos inválidos'}, status=400)

    return JsonResponse({'mensaje': 'Método no permitido'}, status=405)

@api_view(['DELETE'])
def deleteUser(request, user_id):
    try:
        user = User.objects.get(id=user_id)
    except User.DoesNotExist:
        return Response({'mensaje': 'Usuario no encontrado'}, status=status.HTTP_404_NOT_FOUND)

    user.delete()
    return Response({'mensaje': 'Usuario eliminado exitosamente'}, status=status.HTTP_204_NO_CONTENT)