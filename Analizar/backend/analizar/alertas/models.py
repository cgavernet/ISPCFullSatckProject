from django.db import models
from medidores.models import Medidores
# Create your models here.
class Alertas(models.Model):
    idAlerta = models.AutoField(primary_key=True)
    medidor = models.ForeignKey(Medidores, on_delete=models.CASCADE)
    valor = models.FloatField()
    fechaAlta = models.DateTimeField()

    def __str__(self):
        return self.medidor.identificador