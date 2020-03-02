from django.shortcuts import render, redirect
from django.contrib.auth.models import User
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.decorators import login_required
from django.views.generic import TemplateView
from django.contrib.auth.mixins import LoginRequiredMixin
from django.contrib.auth import authenticate, login


def home(request):
    count = User.objects.count()
    return render(request, "signuphome.html", {'count': count})


def signup(request):
    if request.method == 'POST':
        form = UserCreationForm(request.POST)
        if form.is_valid():
            form.save()
            username = request.POST['username']
            password = request.POST['password1']
            user = authenticate(request, username=username, password=password)
            if user is not None:
                login(request, user)
                return render(request, 'secret_page.html')
            return redirect('login') #this needs to be changed
    else:
        form = UserCreationForm()
    return render(request, 'registration/signup2.html', {'form': form})


@login_required
def secret_page(request):
    return render(request, 'secret_page.html')