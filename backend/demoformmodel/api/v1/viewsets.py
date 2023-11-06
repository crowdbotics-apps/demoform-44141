from rest_framework import authentication
from demoformmodel.models import DemoFormModel, DemoFormModel, DemoFormModel
from .serializers import (
    DemoFormModelSerializer,
    DemoFormModelSerializer,
    DemoFormModelSerializer,
)
from rest_framework import viewsets


class DemoFormModelViewSet(viewsets.ModelViewSet):
    serializer_class = DemoFormModelSerializer
    authentication_classes = (
        authentication.SessionAuthentication,
        authentication.TokenAuthentication,
    )
    queryset = DemoFormModel.objects.all()
