from django.db import models
from medidores.models import Medidores

# Create your models here.
class Consumos(models.Model):
    idConsumos = models.AutoField(primary_key=True)
    medidor = models.ForeignKey(Medidores, on_delete=models.CASCADE)
    fechaMedicion = models.DateTimeField()
    consumo = models.FloatField()

    def __str__(self):
        return f'{self.medidor}'