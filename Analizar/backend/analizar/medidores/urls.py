from django.urls import path
from .views import *
from . import views

urlpatterns = [
    path('', getMedidores, name='getMedidores'),
    path('addMedidores', views.addMedidor.as_view(), name='addMedidores'),
    path('medidorbyuser/<int:user_id>', getMedidoresByUser.as_view(), name='getMedidoresByUser'),
    path('deleteMedidor/<int:id>', deleteMedidor, name='deleteMedidor')
]