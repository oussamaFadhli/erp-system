# Generated by Django 4.2.2 on 2023-06-30 21:13

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('inventory_api', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='salesorder',
            old_name='quantity_salled',
            new_name='quantity_sold',
        ),
    ]