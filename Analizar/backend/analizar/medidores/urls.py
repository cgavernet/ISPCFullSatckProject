from django.urls import path
from .views import getMedidores

urlpatterns = [
    path('', getMedidores, name='getMedidores'),
]