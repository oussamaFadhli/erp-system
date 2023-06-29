from django.shortcuts import render
from .models import Products
from .serializers import RecentlyAddedProducts
from rest_framework.views import APIView
from rest_framework import generics,viewsets



class RecentlyAddedProductsViews(generics.ListAPIView):
    queryset=Products.objects.order_by('-id')[:3]
    serializer_class=RecentlyAddedProducts

