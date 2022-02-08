from django.db import models

# Create your models here.
class Contact(models.Model):
    query_id = models.AutoField(primary_key = True)
    name = models.CharField(max_length=50)
    email = models.CharField(max_length=70)
    query = models.CharField(max_length=500)

    def __str__(self):
        return self.name
    