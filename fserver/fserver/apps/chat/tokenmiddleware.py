from channels.db import database_sync_to_async
from django.contrib.auth import get_user_model
from rest_framework.authtoken.models import Token

@database_sync_to_async
def get_user(token):
    User = get_user_model()
    try:
        user = Token.objects.get(key=token).user
        return user
    except Token.DoesNotExist:
        return None
    

class TokenMiddleware:

    def __init__(self, app) -> None:
        self.app = app

    async def __call__(self, scope, recieve, send):
        
        scope['user'] = await get_user(scope['headers'])

        return await self.app(scope, recieve, send)