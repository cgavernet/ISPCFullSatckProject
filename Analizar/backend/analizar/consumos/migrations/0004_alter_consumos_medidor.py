# Generated by Django 4.2 on 2023-05-28 23:23

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('medidores', '0002_alter_medidores_user'),
        ('consumos', '0003_alter_consumos_medidor'),
    ]

    operations = [
        migrations.AlterField(
            model_name='consumos',
            name='medidor',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='medidores.medidores'),
        ),
    ]
