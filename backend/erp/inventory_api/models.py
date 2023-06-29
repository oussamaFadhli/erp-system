from django.db import models
from django.contrib.auth.models import (
    AbstractBaseUser,
    BaseUserManager,
    PermissionsMixin,
    Group,
    Permission
)
from django.utils import timezone
from django.utils.translation import gettext_lazy as _
from django.core.validators import  MinValueValidator


class CustomUserManager(BaseUserManager):
    # Kifeh na3ml creation l user
    def create_user(self, email, user, password, **extra_fields):
        if not email:
            raise ValueError(_("The email must be set"))
        email = self.normalize_email(email)
        user = self.model(email=email, **extra_fields)
        user.set_password(password)
        user.save()
        return user

    def create_super_user(self, email, password, **extra_fields):
        extra_fields.setdefault("is_staff", True)
        extra_fields.setdefault("is_superuser", True)
        extra_fields.setdefault("is_active", True)

        if extra_fields.get("is_staff") is not True:
            raise ValueError(_("super user must be is_staff=True"))
        if extra_fields.get("is_superuser") is not True:
            raise ValueError(_("super user must be is_superuser=True"))
        return self.create_user(email, password, **extra_fields)


class CustomUser(AbstractBaseUser, PermissionsMixin):
    groups = models.ManyToManyField(Group, related_name='custom_users')
    user_permissions = models.ManyToManyField(Permission, related_name='custom_users')
    email = models.EmailField(_("Email address"), unique=True)
    first_name = models.CharField(max_length=50, blank=True)
    last_name = models.CharField(max_length=50, blank=True)
    username = models.CharField(max_length=30, blank=True)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)
    date_joined = models.DateTimeField(default=timezone.now)

    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = []

    objects = CustomUserManager()

    def __str__(self):
        return self.email


class Category(models.Model):
    category_name = models.CharField(max_length=50, null=False)
    description = models.TextField()

    def __str__(self):
        return self.category_name


class Brand(models.Model):
    brand_name = models.CharField(max_length=50, null=False)

    def __str__(self):
        return self.brand_name


class Products(models.Model):
    product_name = models.CharField(max_length=200)
    description = models.TextField()
    MEASURES = [
        ("L", "LITRE"),
        ("KG", "KILOGRAME"),
        ("P", "PIECE"),
    ]
    unit_of_measures = models.CharField(max_length=15, choices=MEASURES, default="P")
    cost = models.DecimalField(
        validators=[MinValueValidator(0)], default=0, max_digits=10, decimal_places=2
    )
    selling_price = models.DecimalField(
        validators=[MinValueValidator(0)], default=0, max_digits=10, decimal_places=2
    )
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    brand = models.ForeignKey(Brand, on_delete=models.CASCADE)

    def __str__(self):
        return self.product_name


class Warehouses(models.Model):
    warehouse_name = models.CharField(max_length=200, null=False)
    warehouse_address = models.TextField(null=False)
    warehouse_capacity = models.IntegerField(validators=[MinValueValidator(0)])
    warehouse_phone = models.CharField(max_length=150, null=False)

    def __str__(self):
        return self.warehouse_name


class Stock(models.Model):
    products = models.ForeignKey(Products, on_delete=models.CASCADE)
    Warehouse = models.ForeignKey(Warehouses, on_delete=models.CASCADE)
    quantity_on_hand = models.IntegerField(validators=[MinValueValidator(0)], default=0)
    timestamp = models.DateTimeField()

    def __str__(self):
        return f"{self.products.product_name} {self.quantity_on_hand}"


class Supplier(models.Model):
    supplier_name = models.CharField(max_length=200)
    contact_details = models.CharField(max_length=200)
    payement_terms = models.CharField(
        max_length=200,
        choices=[
            ("P", "PAID"),
            ("NP", "NOT_PAID"),
        ],
        null=False,
    )

    def __str__(self):
        return self.supplier_name


class PurchaseOrder(models.Model):
    supplier = models.ForeignKey(Supplier, on_delete=models.CASCADE)
    order_date = models.DateTimeField()
    stock = models.ForeignKey(Stock, on_delete=models.CASCADE)
    product = models.ForeignKey(Products, on_delete=models.CASCADE)
    quantity_purchased = models.IntegerField()
    expected_delivery_date = models.DateField()

    def add_new_stock(self):
        self.stock.quantity_on_hand = (
            self.stock.quantity_on_hand + self.quantity_purchased
        )
        return self.quantity_on_hand

    def __str__(self):
        return f"{self.product.product_name} {self.quantity_purchased}"


class SalesOrder(models.Model):
    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    order_date = models.DateTimeField()
    product = models.ForeignKey(Products, on_delete=models.CASCADE)
    quantity_purchased = models.ForeignKey(PurchaseOrder, on_delete=models.CASCADE)


class TransactionActivity(models.Model):
    transaction_type = models.CharField(
        max_length=30,
        choices=[
            ("CH", "CASH"),
            ("CC", "CREDIT CARD"),
            ("NP", "NOT PAID"),
        ],
    )
    product = models.ForeignKey(Products, on_delete=models.CASCADE)
    timestamp = models.DateTimeField()

    def __str__(self) -> str:
        return self.transaction_type,self.product