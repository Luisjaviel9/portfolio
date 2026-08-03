
# Create your views here.
from rest_framework import generics
from django.core.mail import send_mail
from .models import MensajeContacto
from .serializers import MensajeContactoSerializer


class MensajeContactoCreateView(generics.CreateAPIView):
    queryset = MensajeContacto.objects.all()
    serializer_class = MensajeContactoSerializer

    def perform_create(self, serializer):
        mensaje = serializer.save()

        send_mail(
            subject=f"Nuevo mensaje de {mensaje.nombre}",
            message=(
                f"Nombre: {mensaje.nombre}\n"
                f"Correo: {mensaje.correo}\n\n"
                f"Mensaje:\n{mensaje.mensaje}"
            ),
            from_email=None,
            recipient_list=["luisjaviel15@gmail.com"],
            fail_silently=False,
        )