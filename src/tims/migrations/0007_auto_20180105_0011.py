# Generated by Django 2.0.1 on 2018-01-04 18:41

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('tims', '0006_computer_location'),
    ]

    operations = [
        migrations.RenameField(
            model_name='computer',
            old_name='ComputerName',
            new_name='HostName',
        ),
    ]
