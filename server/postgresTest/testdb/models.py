from django.db import models

# Create your models here.
class Teacher(models.Model):
    content = models.CharField(max_length=20000)
