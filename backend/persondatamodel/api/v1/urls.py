from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .viewsets import (
    PersonDataModelViewSet,
    PersonDataModelViewSet,
    PersonDataModelViewSet,
    PersonDataModelViewSet,
)

router = DefaultRouter()
router.register("persondatamodel", PersonDataModelViewSet)

urlpatterns = [
    path("", include(router.urls)),
]
