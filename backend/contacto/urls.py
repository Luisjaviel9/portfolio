from django.urls import path
from .views import MensajeContactoCreateView


urlpatterns = [
    path("", MensajeContactoCreateView.as_view(), name="crear-mensaje"),
]