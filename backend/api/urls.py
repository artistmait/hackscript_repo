from django.urls import path
from .views import get_transcripts

urlpatterns = [
    path('transcripts/', get_transcripts, name='get_transcripts'),
]
