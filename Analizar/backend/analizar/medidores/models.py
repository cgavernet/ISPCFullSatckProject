from django.db import models
from users.models import User

# Create your models here.
class Medidores(models.Model):
    idMedidor = models.AutoField(primary_key=True)
    nombre = models.CharField(max_length=45)
    detalle = models.CharField(max_length=45)
    identificador = models.CharField(max_length=45)
    user = models.ForeignKey(User, on_delete=models.CASCADE)

    def __str__(self):
        return self.identificador