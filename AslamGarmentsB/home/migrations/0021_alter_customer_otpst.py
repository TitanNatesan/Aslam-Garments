# Generated by Django 5.0.6 on 2024-06-04 08:00

import django.utils.timezone
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('home', '0020_customer_otp_customer_otpst'),
    ]

    operations = [
        migrations.AlterField(
            model_name='customer',
            name='otpst',
            field=models.DateTimeField(default=django.utils.timezone.now),
        ),
    ]
