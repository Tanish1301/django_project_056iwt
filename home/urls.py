from django.contrib import admin
from django.urls import path
from home import views


urlpatterns = [
    path('', views.index, name='home'),
    path('sponcers', views.sponcers, name='home'),
    path('services', views.services, name='home'),
    path('contact', views.contact, name='home'),
    path('order', views.order, name='home'),
]
