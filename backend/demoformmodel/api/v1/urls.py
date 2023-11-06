from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .viewsets import (
    DemoFormModelViewSet,
    DemoFormModelViewSet,
    DemoFormModelViewSet,
    DemoFormModelViewSet,
)

router = DefaultRouter()
router.register("demoformmodel", DemoFormModelViewSet)

urlpatterns = [
    path("", include(router.urls)),
]
