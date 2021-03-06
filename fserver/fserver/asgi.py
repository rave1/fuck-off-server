"""
ASGI config for fserver project.

It exposes the ASGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/3.2/howto/deployment/asgi/
"""

import os

from channels.auth import AuthMiddlewareStack
from chat.tokenmiddleware import TokenMiddleware
from channels.routing import ProtocolTypeRouter, URLRouter
from django.core.asgi import get_asgi_application
import chat.routing

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'fserver.settings')

application = ProtocolTypeRouter({
    "http": get_asgi_application(),
    "websocket": TokenMiddleware(
        URLRouter(
            chat.routing.websocket_urlpatterns
        )
    )
})
