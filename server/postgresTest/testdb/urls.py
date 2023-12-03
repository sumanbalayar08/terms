from django.urls import path

from . import views
urlpatterns = [
    path('api/teachers/', views.get_teacher, name='get_teacher')
]