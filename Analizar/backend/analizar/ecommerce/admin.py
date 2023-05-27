from django.contrib import admin
from .models import *

# Register your models here.
@admin.register(Productos)#Registro modelo
class ProductosAdmin(admin.ModelAdmin):#Creo clase para definir los campos a mostrar de dicho modelo
    list_display = ['nombre', 'precio', 'cantidadDisponible']

@admin.register(Categoria)
class CategoriaAdmin(admin.ModelAdmin):
    list_display = ['nombre']

@admin.register(Pedidos)
class PedidosAdmin(admin.ModelAdmin):
    list_display = ['usuario', 'fechaHoraPedido', 'estadoPedido']

@admin.register(DetallesPedido)
class DetallesPedidoAdmin(admin.ModelAdmin):
    list_display = ['pedido', 'producto', 'cantidad', 'precioUnitario']

@admin.register(ProductosPorCategoria)
class PPCAdmin(admin.ModelAdmin):
    list_display = ['producto', 'categoria']

@admin.register(MetodosPago)
class MetodosPagoAdmin(admin.ModelAdmin):
    list_display = ['nombre', 'descripcion']

@admin.register(PedidosPago)
class PedidosPagoAdmin(admin.ModelAdmin):
    list_display = ['pedido', 'metodoPago', 'monto', 'fechaHoraPago']

