# Generated by Django 3.2 on 2021-04-30 10:36

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0002_auto_20210429_2146'),
    ]

    operations = [
        migrations.AddField(
            model_name='product',
            name='url',
            field=models.CharField(default='exit', max_length=500),
            preserve_default=False,
        ),
    ]
