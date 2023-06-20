from django.urls import path
from users.views import *
from . import views

urlpatterns = [
    path('', getUser, name='getUser'),
    path('addUser', views.addUser.as_view(), name='addUser'),
    path('loginUser', loginUser.as_view(), name='loginUser'),
    path('getUsersAndMedidores', getUsersAndMedidores.as_view(), name="getUsersAndMedidores"),
    path('deleteUser/<int:user_id>', deleteUser, name='deleteUser')
]
