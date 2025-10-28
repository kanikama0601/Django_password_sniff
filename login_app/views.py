from django.shortcuts import render,redirect
from django.contrib.auth import authenticate, login
from django.http import JsonResponse
from django.contrib import messages
from django.views.decorators.csrf import ensure_csrf_cookie
# Create your views here.

@ensure_csrf_cookie
def login_view(request):
    return render(request, 'login_app/login.html')

def login_user(request):
    if request.method == 'POST':
        username = request.POST.get('username')
        password = request.POST.get('password')
        user = authenticate(request, username=username, password=password)
        if user is not None:
            login(request, user)
            return JsonResponse({'success': True})
        else:
            return JsonResponse({'success': False})
    return JsonResponse({'success': False})