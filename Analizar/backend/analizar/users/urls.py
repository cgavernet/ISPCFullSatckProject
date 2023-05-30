from django.urls import path
from users.views import *
from . import views

urlpatterns = [
    path('', getUser, name='getUser'),
    path('addUser', views.addUser.as_view(), name='addUser')
]
