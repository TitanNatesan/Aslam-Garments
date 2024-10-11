# Generated by Django 5.0.6 on 2024-07-21 13:20

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('home', '0031_alter_order_status'),
    ]

    operations = [
        migrations.AlterField(
            model_name='order',
            name='status',
            field=models.CharField(choices=[('pending', 'Pending'), ('confirmed', 'Confirmed'), ('cancelled', 'Cancelled'), ('packed', 'Packed'), ('shipped', 'Shipped'), ('out_for_delivery', 'Out for delivery'), ('delivered', 'Delivered')], default='pending', max_length=200),
        ),
    ]