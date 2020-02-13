from django.urls import path
from .views import HomePageView, emailView, successView

urlpatterns = [
    #path('', HomePageView.as_view(), name='home'),
    path('', emailView, name='home'),
    path('success/', successView, name='success'),
]

