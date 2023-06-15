from django.db import models
from users.models import User

# Create your models here.
class Categoria(models.Model):
    # idCategoria = models.AutoField(primary_key=True)
    nombre = models.CharField(max_length=50)
    
    def __str__(self):
        return self.nombre

class Productos(models.Model):
    # idProducto = models.AutoField(primary_key=True)
    nombre = models.CharField(max_length=100)
    descripcion = models.TextField()
    rutaImagen = models.TextField(default=" ")
    precio = models.DecimalField(max_digits=10, decimal_places=2)
    cantidadDisponible = models.PositiveIntegerField()
    # categorias = models.ManyToManyField(Categoria, through='ProductosPorCategoria')

    def __str__(self):
        return self.nombre

class Pedidos(models.Model):
    usuario = models.ForeignKey(User, on_delete=models.CASCADE)
    fechaHoraPedido = models.DateTimeField()
    estadoPedido = models.CharField(max_length=20)
    
    def __str__(self):
        return f'{self.usuario} | {self.estadoPedido}'

class DetallesPedido(models.Model):
    pedido = models.ForeignKey(Pedidos, on_delete=models.CASCADE)
    producto = models.ForeignKey(Productos, on_delete=models.CASCADE)
    cantidad = models.PositiveIntegerField()
    precioUnitario = models.DecimalField(max_digits=10, decimal_places=2)

    def __str__(self):
        return f'{self.pedido} | {self.producto}'

class ProductosPorCategoria(models.Model):
    producto = models.ForeignKey(Productos, on_delete=models.CASCADE)
    categoria = models.ForeignKey(Categoria, on_delete=models.CASCADE)

    def __str__(self):
        return f'{self.producto} | {self.categoria}'


class MetodosPago(models.Model):
    nombre = models.CharField(max_length=50)
    descripcion = models.TextField()

    def __str__(self):
        return f'{self.nombre}'


class PedidosPago(models.Model):
    pedido = models.ForeignKey(Pedidos, on_delete=models.CASCADE)
    metodoPago = models.ForeignKey(MetodosPago, on_delete=models.CASCADE)
    monto = models.DecimalField(max_digits=10, decimal_places=2)
    fechaHoraPago = models.DateTimeField()

    def __str__(self):
        return f'{self.pedido} | {self.monto}'

