from unicodedata import category
from django.db import models

# Create your models here.
class Contact(models.Model):
    query_id = models.AutoField(primary_key = True)
    name = models.CharField(max_length=50)
    email = models.CharField(max_length=70)
    query = models.CharField(max_length=500)

    def __str__(self):
        return self.name
    

class Product(models.Model):
    product_id = models.AutoField(primary_key=True)
    product_name = models.CharField(max_length=50)
    category = models.CharField(max_length=50)
    price = models.IntegerField(default=0)
    tagline = models.CharField(max_length=100)
    image = models.ImageField(upload_to="static", default="")

    def __str__(self):
        return self.product_name