from django.shortcuts import render
from django.contrib.auth.models import User
from rest_framework import generics
from .serializers import NoteSerializer, UserSerializer
from rest_framework.permissions import IsAuthenticated, AllowAny
from django.http import JsonResponse
from .models import Note

def home(request):
    return JsonResponse({"message": "Welcome to the backend API"})

# User registration view
class CreateUserView(generics.CreateAPIView):
    queryset = User.objects.all()  
    serializer_class = UserSerializer
    permission_classes = (AllowAny,) 

# List and create notes
class NoteListCreate(generics.ListCreateAPIView):
    serializer_class = NoteSerializer
    permission_classes = [IsAuthenticated]  

    def get_queryset(self):
        user = self.request.user
        return Note.objects.filter(author=user)
    
    def perform_create(self, serializer):
        serializer.save(author=self.request.user)

# Delete a note
class NoteDelete(generics.DestroyAPIView):
    serializer_class = NoteSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        user = self.request.user
        return Note.objects.filter(author=user)
