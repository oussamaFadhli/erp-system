from django.urls import path
from .views import RecentlyAddedProductsViews, LatestSoldProductsViews


urlpatterns = [
    path(
        "recently_added_products/",
        RecentlyAddedProductsViews.as_view(),
        name="recently_added_products",
    ),
    path(
        "latest_sold_products/",
        LatestSoldProductsViews.as_view(),
        name="latest_sold_products",
    ),
]
