from django.contrib import admin
from django.urls import path
from . import views

urlpatterns = [
path('', views.index, name="ShopHome"),
path('watches/', views.watches, name="Watches"),
path('customizations/', views.customizations, name="Customizations"),
path('customer/', views.customer, name="Customer"),
]
