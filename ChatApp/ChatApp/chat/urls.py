from django.urls import path

from ChatApp.chat import views

urlpatterns = [
    path('', views.lobby, name='lobby'),
    path('room/', views.room, name='room'),
]