# Generated by Django 3.1.5 on 2021-03-10 23:06

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('contacts', '0004_auto_20210124_1027'),
    ]

    operations = [
        migrations.AlterField(
            model_name='contact',
            name='sexe',
            field=models.CharField(choices=[('HOMME', 'Homme'), ('FEMME', 'Femme')], default='Homme', max_length=10),
        ),
        migrations.AlterField(
            model_name='contact',
            name='status',
            field=models.CharField(choices=[('PERSONNE', 'Personne'), ('SOCIETE', 'Societe')], default='Personne', max_length=30),
        ),
    ]