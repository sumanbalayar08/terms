from django.shortcuts import render
from .models import Teacher
from django.http import JsonResponse

# Create your views here.
def get_teacher(request):
    teachers=Teacher.objects.all()
    data = [{'id': teacher.id, 'content': teacher.content} for teacher in teachers]
    return JsonResponse({'teachers': data})