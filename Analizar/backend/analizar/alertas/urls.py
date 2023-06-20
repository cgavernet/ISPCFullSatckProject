from django.urls import path
from .views import *
from rest_framework.views import APIView
from . import views

urlpatterns = [
    path('', getAlertas, name='getAlertas'),
    path('addAlerta', views.addAlerta.as_view(), name='addAlerta'),
    path('deleteAlerta/<int:id>', deleteAlerta, name='deleteAlerta'),
    path('editAlerta/<int:id>', editAlerta.as_view(), name='editAlerta'),
    path('getAlertaById/<int:id>', getAlertaById.as_view(), name='getAlertaById' ),
    path('getAlertaByMedidor/<int:user_id>', getAlertasByUser.as_view(), name='getAlertaByUser')
]