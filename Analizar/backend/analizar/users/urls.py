from django.urls import path
from users.views import getUser

urlpatterns = [
    path('', getUser, name='getUser'),
]
