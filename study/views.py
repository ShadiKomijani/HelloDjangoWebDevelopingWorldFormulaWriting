from django.shortcuts import render

def index(request):
    return render(request, 'base.html')


def study_fun(request):
    return render(request, 'study_fun.html')
