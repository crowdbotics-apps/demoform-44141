from rest_framework import serializers
from persondatamodel.models import PersonDataModel, PersonDataModel


class PersonDataModelSerializer(serializers.ModelSerializer):
    class Meta:
        model = PersonDataModel
        fields = "__all__"
