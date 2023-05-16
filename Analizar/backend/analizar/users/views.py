from django.core import serializers
from django.http import JsonResponse
from users.models import User

# Create your views here.
def getUser(request):
    users = User.objects.all()#Traigo todos los usaurios registrados
    data = serializers.serialize('json', users)#Convierto los datos en un json
    return JsonResponse(data, safe=False)