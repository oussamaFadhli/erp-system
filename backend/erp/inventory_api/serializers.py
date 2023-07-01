from rest_framework import serializers
from .models import Products,SalesOrder



class RecentlyAddedProducts(serializers.ModelSerializer):
    category_name = serializers.SerializerMethodField()
    class Meta:
        model=Products
        fields=['id','product_name','category_name','selling_price']

    def get_category_name(self,obj):
        return obj.category.category_name

class LatestSalesProducts (serializers.ModelSerializer):
    total_sales = serializers.SerializerMethodField()
    product_name = serializers.SerializerMethodField()
    class Meta:
        model = SalesOrder
        fields = ['id','product_name','order_date','total_sales']
    def get_total_sales(self, obj):
        return obj.quantity_sold * obj.product.selling_price

    def to_representation(self, instance):
        data = super().to_representation(instance)
        data['total_sales'] = self.get_total_sales(instance)
        return data
    def get_product_name(self, obj):
        return obj.product.product_name