from django.urls import path
from .views import getConsumos

urlpatterns = [
    path('consumos/', getConsumos, name= 'getConsumos')
]
