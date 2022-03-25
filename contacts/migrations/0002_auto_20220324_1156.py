# Generated by Django 3.2.5 on 2022-03-24 11:56

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('contacts', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='person',
            name='category',
            field=models.CharField(choices=[('Grande', 'GRANDE'), ('Moyenne', 'MOYENNE'), ('Petit', 'PETIT')], max_length=20),
        ),
        migrations.AlterField(
            model_name='person',
            name='genre',
            field=models.CharField(choices=[('Homme', 'HOMME'), ('Femme', 'FEMME'), ('Autres', 'AUTRES')], max_length=20),
        ),
    ]
