from django.core import serializers
from django.http import JsonResponse
from .serializers import UserSerializers
from users.models import User
from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework.views import APIView 
from django.forms.models import model_to_dict
from django.contrib.auth import authenticate, login
from django.contrib.auth import get_user_model
from django.contrib.auth.hashers import check_password

# Create your views here.
def getUser(request):
    users = User.objects.all()#Traigo todos los usaurios registrados
    data = [model_to_dict(user) for user in users]#Convierto los datos en un json
    return JsonResponse(data, safe=False)

class addUser(APIView):
    def post(self, request):
        email = request.data.get('email')
        
        if User.objects.filter(email=email).exists():
            return Response({'error': 'El email ya esta registrado en el sistema', 'email_exists': True}, status=status.HTTP_400_BAD_REQUEST)
        serializer = UserSerializers(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class loginUser(APIView):
    def post(self, request):
        email = request.data.get('email')
        password = request.data.get('password')

        try:
            user = User.objects.get(email=email)
        except User.DoesNotExist:
            return Response({'error': 'Credenciales inválidas'}, status=status.HTTP_401_UNAUTHORIZED)

        if user.password == password:
            # Las credenciales son válidas
            # Aquí puedes realizar acciones adicionales si es necesario, como generar un token de acceso
            return Response({'message': 'Inicio de sesión exitoso'}, status=status.HTTP_200_OK)
        else:
            # Credenciales inválidas
            return Response({'error': 'Credenciales inválidas'}, status=status.HTTP_401_UNAUTHORIZED)


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