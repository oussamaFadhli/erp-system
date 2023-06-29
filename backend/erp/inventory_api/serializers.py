from rest_framework import serializers
from .models import Products



class RecentlyAddedProducts(serializers.ModelSerializer):
    category_name = serializers.SerializerMethodField()
    class Meta:
        model=Products
        fields=['id','product_name','category_name','selling_price']

    def get_category_name(self,obj):
        return obj.category.category_name
