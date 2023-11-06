from django.conf import settings
from django.db import models


class PersonDataModel(models.Model):
    "Generated Model"
    personname = models.TextField(
        null=True,
        blank=True,
    )


# Create your models here.
