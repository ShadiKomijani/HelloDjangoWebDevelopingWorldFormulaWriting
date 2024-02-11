from django.urls import path
from . import views

urlpatterns = [
    path('learnfun', views.learn_fun),
]
