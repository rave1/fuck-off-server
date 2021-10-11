from copy import deepcopy
from django.contrib.auth import get_user_model

from rest_framework import fields, serializers
from rest_framework.response import Response
from rest_framework import status
from rest_framework.exceptions import ValidationError
from chat.models import Message

from chat.models import Message

User = get_user_model()
class UserSerializer(serializers.ModelSerializer):
    pass


class UserRegisterSerializer(serializers.ModelSerializer):
    password1 = serializers.CharField()
    password2 = serializers.CharField()

    def validate(self, data):
        if User.objects.filter(email=data['email']):
            raise ValidationError({'email': 'user with this email already exists'})
        if data['password1'] != data['password2']:
            raise ValidationError({'password2': 'Passwords do not match'})
        print(data)
        return data

    def create(self, validated_data):
        user_data = deepcopy(validated_data)
        user_data['password'] = user_data.pop('password1')
        user_data.pop('password2')
        user = User.objects.create_user(**user_data)
        return user

    class Meta:
        model = User
        fields = ('email', 'username', 'password1', 'password2')


class UserLoginSerializer(serializers.Serializer):
    username = serializers.CharField()
    password = serializers.CharField()


class MessageSerializer(serializers.ModelSerializer):
    message = serializers.CharField()
    author = serializers.JSONField()
    is_author = serializers.SerializerMethodField()

    def get_is_author(self, message):
        if message.author == self.context['user'].email:
            return True
        else:
            return False

    class Meta:
        model = Message
        fields = ('message', 'author', 'created_at', 'is_author')