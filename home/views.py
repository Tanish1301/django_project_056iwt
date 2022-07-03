from django.shortcuts import render, HttpResponse
from home.models import Contact
# Create your views here.
def index(request):
    return render(request, 'index.html')

def sponcers(request):
    return render(request, 'sponcers.html')

def services (request):
    return render(request, 'services.html')

def contact (request):
    if request.method == "POST":
        name = request.POST.get('name')
        email = request.POST.get('email')
        phone = request.POST.get('phone')
        message = request.POST.get('message')
        
        
        data = Contact(name=name, email=email, phone=phone, message=message)
        data.save()
        
    return render(request, 'contactUs.html')

def order(request):
    return render(request, 'ordernow.html')