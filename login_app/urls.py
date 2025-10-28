from django.urls import path
from . import views

urlpatterns = [
    path('', views.login_view, name='login'),
    path('auth/', views.login_user, name='login_user'),
]

