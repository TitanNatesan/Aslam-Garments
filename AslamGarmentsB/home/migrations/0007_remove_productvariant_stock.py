# Generated by Django 5.0.6 on 2024-05-22 17:37

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('home', '0006_alter_address_options_alter_category_options_and_more'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='productvariant',
            name='stock',
        ),
    ]