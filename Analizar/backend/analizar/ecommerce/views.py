from django.core import serializers
from django.http import JsonResponse
from .models import Productos
from medidores.models import Medidores
from .serializers import ProductosSerializer
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.forms.models import model_to_dict
from django.views.decorators.csrf import csrf_exempt

def getProductos(request):
    productos = Productos.objects.all()
    serializer = ProductosSerializer(productos, many=True)
    return JsonResponse(serializer.data, safe=False)

# Añadir Productos
class addProducto(APIView):
    def post(self, request):
        serializer = ProductosSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# Editar Productos
class editProducto(APIView):
    def put(self, request, id):
        medidor = request.data.get('medidor')
        try:
            producto = Productos.objects.get(idProducto=id)
        except Productos.DoesNotExist:
            return JsonResponse({'error': 'El producto no existe'}, status=status.HTTP_404_NOT_FOUND)
        serializer = ProductosSerializer(producto, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({'message': 'El producto ha sido actualizado correctamente'}, status=status.HTTP_200_OK)
        else:
            if Medidores.objects.filter(idMedidor=medidor).exists():
                return Response({'error': 'El medidor no existe', 'productoNoExiste': True}, status=status.HTTP_400_BAD_REQUEST)
            else:
                return Response({'error': 'Lo siento ocurrio un error al editar el producto, revise que los campos que esten completos', 'alertaNoExiste': False}, status=status.HTTP_400_BAD_REQUEST)

# Consultar Productos
class getProductoById(APIView):
    def get(self, request, id):
        try:
            producto = Productos.objects.get(idProducto=id)
        except Productos.DoesNotExist:
            return JsonResponse({'error': 'El producto no existe'}, status=status.HTTP_404_NOT_FOUND)
        serializer = ProductosSerializer(producto)
        return Response(serializer.data, status=status.HTTP_200_OK)

# Eliminar Productos
@csrf_exempt
def deleteProducto(request, id):
    try:
        producto = Productos.objects.get(idProducto=id)
        producto.delete()
        return JsonResponse({'message': 'Producto eliminado correctamente'})
    except Productos.DoesNotExist:
        return JsonResponse({'error': 'El producto no existe'}, status=status.HTTP_404_NOT_FOUND)
    except Exception as e:
        return JsonResponse({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
