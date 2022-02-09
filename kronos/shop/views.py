from django.shortcuts import render, redirect
from django.http import HttpResponse
from . models import Contact, Product
from django.contrib import messages
from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login, logout

# Create your views here.

def index(request):
   
    return render(request, 'index.html')

def watches(request):
    allProds = []
    catprods = Product.objects.values('category')
    # print(catprods)
    cats = {item['category'] for item in catprods}
    # print(cats)
    for cat in cats:
        prod = Product.objects.filter(category=cat)
        print(prod)
        n = len(prod)
        print(n)
        if(n%3==0):
            outer = int(n/3)
            print(outer)
        else:
            outer = n//3 + 1    
        allProds.append([cat, range(outer),range(n), prod])


    # allProds = Product.objects.all()
    # print(allProds)
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

def signUp(request):
    message = False
    if request.method=="POST":
        first_name = request.POST.get('first_name', '')
        last_name = request.POST.get('last_name', '')
        username = request.POST.get('username', '')
        email = request.POST.get('email', '')
        password = request.POST.get('password', '')
        user = User.objects.create_user(username=username, password= password, email= email, first_name=first_name, last_name=last_name)
        messages.success(request, 'Your Kronos account has been successfully created!')
        user.save()
    return redirect('ShopHome')


def loginUser(request):
    if request.method=="POST":
        username = request.POST.get('login_username')
        password = request.POST.get('login_password')

        user = authenticate(username = username, password = password)

        if user is not None:
            login(request,user)
            messages.success(request, "Successfully logged in")
            print("success login")
            return redirect('ShopHome')
        else:
            messages.error(request, "Error login")
            print("Error login")
            return redirect('ShopHome')


def logoutUser(request):

    logout(request)
    print("Logged out")
    return redirect('ShopHome')

