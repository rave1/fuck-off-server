from django.urls import path, include
from rest_framework.routers import DefaultRouter
from api.views import HelloView, RegisterView, LoginView, MessageViewset

router = DefaultRouter()
router.register(r'messages', MessageViewset)


urlpatterns = [
    path('hello/', HelloView.as_view(), name='hello'),
    path('login/', LoginView.as_view(), name='obtain login'),
    path('register/', RegisterView.as_view()),
    path('', include(router.urls))
]