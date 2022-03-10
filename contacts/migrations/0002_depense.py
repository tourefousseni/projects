# Generated by Django 3.2.5 on 2022-03-10 16:06

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('contacts', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Depense',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('mode_payment_depense', models.CharField(choices=[('Espece', 'Espece'), ('Orange Money', 'Orange Money'), ('Mobi Cash', 'Mobi Cash'), ('Sama Money', 'Sama Money'), ('Wave', 'Wave'), ('Virement', 'Virement'), ('Transaction', 'Transaction')], default='Espece', max_length=50)),
                ('amount', models.DecimalField(blank=True, decimal_places=2, default=0, max_digits=20, null=True, verbose_name='Montant depensé')),
                ('pattern', models.CharField(choices=[('Paiement Ouvrier', 'Paiement Ouvrier'), ('Achat Materiel', 'Achat Materiel'), ('Paiement Magasin', 'Paiement Magasin'), ('Bon', 'Bon'), ('Electricite', 'Electricite')], default='Paiement Ouvrier', max_length=50)),
                ('description', models.CharField(blank=True, max_length=200, verbose_name='Description du depense')),
                ('status', models.BooleanField(default=False)),
                ('create_at', models.DateField(auto_now=True)),
                ('person', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='contacts.person', verbose_name='Titulaire Depense')),
            ],
        ),
    ]
