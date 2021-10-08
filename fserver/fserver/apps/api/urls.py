from django.urls import path
from rest_framework.authtoken.views import obtain_auth_token
from api.views import HelloView, RegisterView, LoginView

urlpatterns = [
    path('hello/', HelloView.as_view(), name='hello'),
    path('login/', LoginView.as_view(), name='obtain login'),
    path('register/', RegisterView.as_view())
]