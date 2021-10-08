from django.template.response import ContentNotRenderedError
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework import viewsets
from rest_framework import status
from api.serializers import UserSerializer
from rest_framework import generics
from django.contrib.auth.models import User

class HelloView(APIView):

    permission_classes = (IsAuthenticated,)

    def get(self, request):
        content = {'message': 'HELLO!'}
        return Response(content)
    
class RegisterView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = (AllowAny, )
    http_method_names = ['post']
