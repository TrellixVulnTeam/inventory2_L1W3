# Generated by Django 2.0.1 on 2018-01-04 13:51

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('tims', '0003_auto_20180104_1919'),
    ]

    operations = [
        migrations.AlterField(
            model_name='computer',
            name='ExternalStorage',
            field=models.CharField(default='1 TB', max_length=50),
        ),
    ]
