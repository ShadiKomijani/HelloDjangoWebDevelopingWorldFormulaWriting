from django.urls import path
from . import views

urlpatterns = [
    path('', views.index),
    path('studyfun', views.study_fun),
]
