from django.urls import path
from .views import RecentlyAddedProductsViews


urlpatterns = [
    path(
        "recently_added_products/",
        RecentlyAddedProductsViews.as_view(),
        name="recently_added_products",
    ),
]
