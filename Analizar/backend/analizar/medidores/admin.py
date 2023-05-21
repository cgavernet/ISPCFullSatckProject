from django.contrib import admin
from .models import Medidores

# Register your models here.

@admin.register(Medidores)
class MedidoresAdmin(admin.ModelAdmin):
    list_display = ('idMedidor', 'nombre', 'detalle', 'identificador')