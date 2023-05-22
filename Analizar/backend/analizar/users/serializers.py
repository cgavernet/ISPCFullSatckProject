from rest_framework import serializers
from users.models import User

class UserSerializers(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'nombre', 'apellido', 'email', 'celular', 'password', 'habilitado', 'fechaAlta', 'admin']
        extra_kwargs = {
            'password': {'write_only': True},  # Para que el campo password solo sea de escritura (no se muestre en las respuestas)
        }