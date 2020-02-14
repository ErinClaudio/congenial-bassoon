import requests
from django.shortcuts import render, redirect
from .models import City
from .forms import CityForm


def index(request):
    url = 'http://api.openweathermap.org/data/2.5/weather?q={}&units=imperial&appid=fdc519f3931d0e0ab1e89bd1f882570f'

    err_mess = ''
    message = " "
    message_class = " "



    if request.method == 'POST':
        form = CityForm(request.POST)

        if form.is_valid():
            new_city = form.cleaned_data['name']
            existing_city_count = City.objects.filter(name=new_city).count()

            if existing_city_count==0:
                r = requests.get(url.format(new_city)).json()

                if r['cod'] == 200:
                    form.save()
                else:
                    err_mess = "Please Try Again"
            else:
                err_mess = "Please try again"

        if err_mess:
            message = err_mess
            message_class = 'is-danger'
        else:
            message = "City added"
            message_class= "is-success"

    form = CityForm()

    cities = City.objects.all()

    weather_data = []

    for city in cities:
        r = requests.get(url.format(city)).json()

        city_weather = {
            'city': city.name,
            'temperature': r['main']['temp'],
            'description': r['weather'][0]['description'],
            'icon': r['weather'][0]['icon'],
        }

        weather_data.append(city_weather)

    context = {
        'weather_data': weather_data, 'form': form,
        "message": message,
        'message_class': message_class
        }
    return render(request, 'weather/weather.html', context)


def delete_city(request, city_name):
    City.objects.get(name = city_name).delete()
    return redirect("weatherhome")