from django.http import HttpResponse
from django.shortcuts import render


def learn_fun(request):
    return HttpResponse("Learn Fun")

