from django.urls import path
from .views import getConsumos, postConsumos

urlpatterns = [
    path('', getConsumos, name= 'getConsumos'),
    path('create', postConsumos, name= 'postConsumos')
]
