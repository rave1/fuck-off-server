from copy import deepcopy

from django.template.response import ContentNotRenderedError
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import AllowAny, IsAuthenticated
# from rest_framework.authentication import authenticate
from rest_framework.authtoken.models import Token
from rest_framework import viewsets
from rest_framework import status
from rest_framework.pagination import PageNumberPagination
from api.serializers import MessageSerializer, UserSerializer, UserLoginSerializer, UserRegisterSerializer
from rest_framework import generics
from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login
from chat.models import Message


class HelloView(APIView):

    permission_classes = (IsAuthenticated,)

    def get(self, request):
        content = {'message': 'HELLO!'}
        return Response(content)
    

class RegisterView(generics.GenericAPIView):
    serializer_class = UserRegisterSerializer
    permission_classes = (AllowAny, )
    
    def post(self, request, *args, **kwargs):
        # TODO rebuild this method
        serializer = self.serializer_class(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.create(serializer.validated_data)
        user = authenticate(username=serializer.validated_data['email'],
                                password=serializer.validated_data['password1'])
        if not user:
            return Response({
                'auth error'
            }, status=status.HTTP_400_BAD_REQUEST)
        login(request, user)
        result = deepcopy(serializer.data)
        result.update({'success': True})
        # TODO Create new return serializer to not pop password from data
        result.pop('password1')
        result.pop('password2')
        token, _ = Token.objects.get_or_create(user=user)
        return Response({
            'user': 'data_here',
            'token': token.key
        })


class LoginView(generics.GenericAPIView):
    serializer_class = UserLoginSerializer


    def post(self, request):
        serializer = self.serializer_class(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = authenticate(username=serializer.validated_data['username'], password=serializer.validated_data['password'])
        if not user:
            return Response({'error': 'invalid credentials'}, status=status.HTTP_400_BAD_REQUEST)
        login(request, user)
        token, _ = Token.objects.get_or_create(user=user)
        return Response({
            'user': 'user_data',
            'token': token.key
        })


class MessageViewset(viewsets.ModelViewSet):

    serializer_class = MessageSerializer
    queryset = Message.objects.all()
    permission_classes = (IsAuthenticated, )
    pagination_class = PageNumberPagination

    def list(self, request):
        queryset = self.queryset
        page = self.paginate_queryset(queryset)
        if page is not None:
            serializer = self.get_serializer(page, many=True, context={'user': request.user})
            return self.get_paginated_response(serializer.data)
        serializer = self.serializer_class(queryset, many=True, context={'user': request.user})
        
        return Response(serializer.data)
