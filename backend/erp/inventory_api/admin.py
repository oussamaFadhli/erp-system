from django.contrib import admin
from .models import *

admin.site.register(CustomUser)
admin.site.register(Category)
admin.site.register(Brand)
admin.site.register(Products)
admin.site.register(Warehouses)
admin.site.register(Stock)
admin.site.register(Supplier)
admin.site.register(PurchaseOrder)
admin.site.register(SalesOrder)
admin.site.register(TransactionActivity)