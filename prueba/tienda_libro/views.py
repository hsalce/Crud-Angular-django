from django.shortcuts import render
from rest_framework import viewsets
from .models import Libro
from .serializers import LibroSerializer

class  LibroViewSets( viewsets.ModelViewSet):
    
    queryset = Libro.objects.all()
    serializer_class = LibroSerializer