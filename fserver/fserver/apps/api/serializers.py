from copy import deepcopy

from rest_framework import fields, serializers
from rest_framework.response import Response
from rest_framework import status
from django.contrib.auth.models import User
from rest_framework.exceptions import ValidationError

class UserSerializer(serializers.ModelSerializer):
    pass


class UserRegisterSerializer(serializers.ModelSerializer):
    password1 = serializers.CharField()
    password2 = serializers.CharField()

    def validate(self, data):
        if User.objects.filter(email=data['email']):
            raise ValidationError({'email': 'user with this email already exists'})
        if data['password1'] != data['password2']:
            raise ValidationError({'password2': 'Passwords not matching'})
        return data

    def create(self, validated_data):
        user_data = deepcopy(validated_data)
        user_data['password'] = user_data.pop('password1')
        user_data.pop('password2')
        user = User.objects.create_user(**user_data)
        return user

    class Meta:
        model = User
        fields = ('email', 'password1', 'password2')


class UserLoginSerializer(serializers.Serializer):
    username = serializers.CharField()
    password = serializers.CharField()