from django.urls import path
from . import views

urlpatterns = [
    path('quizfun', views.quiz_fun),
]
