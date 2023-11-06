from rest_framework import serializers
from demoformmodel.models import DemoFormModel, DemoFormModel


class DemoFormModelSerializer(serializers.ModelSerializer):
    class Meta:
        model = DemoFormModel
        fields = "__all__"
