from django.urls import path

from . import views

urlpatterns = [
    path("", views.index, name="index"),
    path("vincent", views.vincent, name="vincent"),
    path("<str:name>", views.greet, name="greet"),
]