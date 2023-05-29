from django.urls import path
from .views import *
from . import views

urlpatterns = [
    path('', getAlertas, name='getAlertas'),
    path('addAlerta', views.addAlerta.as_view(), name='addAlerta'),
    path('deleteAlerta/<int:id>', deleteAlerta, name='deleteAlerta')
]