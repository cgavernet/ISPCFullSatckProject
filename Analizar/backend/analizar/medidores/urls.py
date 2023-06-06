from django.urls import path
from .views import getMedidores, postMedidores

urlpatterns = [
    path('', getMedidores, name='getMedidores'),
    path('create', postMedidores, name='postMedidores'),
]