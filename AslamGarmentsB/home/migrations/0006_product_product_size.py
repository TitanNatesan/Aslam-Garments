# Generated by Django 5.0.6 on 2024-05-25 11:49

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('home', '0005_remove_product_size_size'),
    ]

    operations = [
        migrations.AddField(
            model_name='product',
            name='product_size',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='home.size'),
        ),
    ]
