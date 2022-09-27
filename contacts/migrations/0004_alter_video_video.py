# Generated by Django 3.2.5 on 2022-09-05 03:37

import contacts.validators
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('contacts', '0003_video'),
    ]

    operations = [
        migrations.AlterField(
            model_name='video',
            name='video',
            field=models.FileField(upload_to='video/%y', validators=[contacts.validators.file_size]),
        ),
    ]
