from django.shortcuts import render
from django.http import HttpResponse
# Create your views here.

def index(request):
    return render(request, 'index.html')

def watches(request):
    return render(request, 'watches.html')

def customizations(request):
    return render(request, 'customizations.html')

def customer(request):
    return render(request, 'customer.html')
