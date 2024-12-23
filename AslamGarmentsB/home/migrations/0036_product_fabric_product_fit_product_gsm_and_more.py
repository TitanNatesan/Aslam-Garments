# Generated by Django 5.0.6 on 2024-11-13 07:51

import django.contrib.postgres.fields
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('home', '0035_product_tags'),
    ]

    operations = [
        migrations.AddField(
            model_name='product',
            name='fabric',
            field=django.contrib.postgres.fields.ArrayField(base_field=models.CharField(max_length=200), blank=True, help_text='Material of the product made of', null=True, size=None),
        ),
        migrations.AddField(
            model_name='product',
            name='fit',
            field=models.CharField(blank=True, max_length=50, null=True),
        ),
        migrations.AddField(
            model_name='product',
            name='gsm',
            field=models.FloatField(blank=True, help_text='Thickness of the material', null=True),
        ),
        migrations.AddField(
            model_name='product',
            name='ideal_for',
            field=models.CharField(blank=True, max_length=50, null=True),
        ),
        migrations.AddField(
            model_name='product',
            name='product_type',
            field=models.CharField(blank=True, max_length=50, null=True),
        ),
        migrations.AddField(
            model_name='product',
            name='sleeve',
            field=models.CharField(blank=True, max_length=50, null=True),
        ),
    ]
