from django.contrib import admin
from django.urls import path, include
from django.contrib.staticfiles.urls import staticfiles_urlpatterns
from secretpage import views


urlpatterns = [
    path('admin/', admin.site.urls),
    path('projects/', include('projects.urls')),
    path('', include('homepage.urls')),
    path('weather/', include('weatherapp.urls')),
    path('blog/', include('blog.urls'), name='blog'),
    path('registration/', include('secretpage.urls')),
    path('accounts/', include('django.contrib.auth.urls')),
    path('signup2/', views.signup, name='signup2'),
    path('login/', views.signup, ),
    path('signup/', views.home, name="secret"),
    path('secretpage/', views.secret_page, name='supersecret'),
    path('maps/', include('simplemap.urls')),
]

urlpatterns += staticfiles_urlpatterns()
