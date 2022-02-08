from django.shortcuts import render
from django.http import HttpResponse
from . models import Contact, Product
# Create your views here.

def index(request):
   
    return render(request, 'index.html')

def watches(request):
    allProds = Product.objects.all()
    print(allProds)
    params = {'allProds':allProds}

    return render(request, 'watches.html', params)

def customizations(request):
    return render(request, 'customizations.html')

def customer(request):
    thank = False
    if request.method=="POST":
        name = request.POST.get('name', '')
        email = request.POST.get('email', '')
        query = request.POST.get('query', '')
        contact = Contact(name=name, email=email, query=query)
        contact.save()
        thank = True

    return render(request, 'customer.html', {'thank':thank})
