from django.http import HttpResponse
from django.shortcuts import render


def quiz_fun(request):
    return HttpResponse("Quiz Fun")

