from django.urls import path
from .views import getAlertas

urlpatterns = [
    path('', getAlertas, name='getAlertas'),
]