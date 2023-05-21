from django.urls import path
from .views import getConsumos

urlpatterns = [
    path('', getConsumos, name= 'getConsumos')
]
