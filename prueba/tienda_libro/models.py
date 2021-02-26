from django.db import models

class Libro (models.Model):
    id = models.AutoField( primary_key =True)
    name = models.CharField(max_length = 100)
    auth = models.CharField(max_length = 200)
    editorial = models.CharField( max_length = 300)

       

    def __str__(self):
     return self.name  