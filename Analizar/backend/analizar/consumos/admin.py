from django.contrib import admin
from .models import Consumos

# Register your models here.

@admin.register(Consumos)
class ConsumosAdmin(admin.ModelAdmin):
    list_display = ('medidor', 'fechaMedicion', 'consumo')