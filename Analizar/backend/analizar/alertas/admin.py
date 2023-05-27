from django.contrib import admin
from .models import Alertas

# Register your models here.

@admin.register(Alertas)
class AlertasAdmin(admin.ModelAdmin):
    list_display = ('medidor', 'valor', 'fechaAlta')
