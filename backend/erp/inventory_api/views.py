from django.shortcuts import render
from .models import Products,SalesOrder
from .serializers import RecentlyAddedProducts,LatestSalesProducts
from rest_framework.views import APIView
from rest_framework import generics,viewsets



class RecentlyAddedProductsViews(generics.ListAPIView):
    queryset=Products.objects.order_by('-id')[:3]
    serializer_class=RecentlyAddedProducts

class LatestSoldProductsViews(generics.ListAPIView):
    queryset=SalesOrder.objects.order_by('-id')[:3]
    serializer_class = LatestSalesProducts

