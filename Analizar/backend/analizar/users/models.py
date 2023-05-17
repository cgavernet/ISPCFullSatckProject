from django.db import models

# Create your models here.
class User(models.Model):
    nombre = models.CharField(max_length=45)
    apellido = models.CharField(max_length=45)
    email = models.EmailField(max_length=100, unique=True)
    celular = models.CharField(max_length=40)
    password = models.CharField(max_length=128)
    habilitado = models.BooleanField(default=True)
    fechaAlta = models.DateTimeField(auto_now_add=True)
    admin = models.BooleanField(default=False)

    def __str__(self):
        return f'{self.nombre} {self.apellido}'