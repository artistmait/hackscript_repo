from django.shortcuts import render
from django.http import JsonResponse

def get_transcripts(request):
    return JsonResponse({"message":"hello world"})


# Create your views here.
