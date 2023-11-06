from rest_framework import authentication
from persondatamodel.models import PersonDataModel, PersonDataModel, PersonDataModel
from .serializers import (
    PersonDataModelSerializer,
    PersonDataModelSerializer,
    PersonDataModelSerializer,
)
from rest_framework import viewsets


class PersonDataModelViewSet(viewsets.ModelViewSet):
    serializer_class = PersonDataModelSerializer
    authentication_classes = (
        authentication.SessionAuthentication,
        authentication.TokenAuthentication,
    )
    queryset = PersonDataModel.objects.all()
