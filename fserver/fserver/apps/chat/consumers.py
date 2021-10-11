# chat/consumers.py
import json
from channels.generic.websocket import AsyncWebsocketConsumer
import asyncio
from chat.models import Message
from channels.auth import login
from channels.db import database_sync_to_async

class ChatConsumer(AsyncWebsocketConsumer):
    async def connect(self):
        user = self.scope['user']
        if not user:
            await self.close()
        self.room_name = self.scope['url_route']['kwargs']['room_name']
        self.room_group_name = 'chat_%s' % self.room_name

        # Join room group
        await self.channel_layer.group_add(
            self.room_group_name,
            self.channel_name
        )

        await self.accept()

    async def disconnect(self, close_code):
        # Leave room group
        await self.channel_layer.group_discard(
            self.room_group_name,
            self.channel_name
        )

    # Receive message from WebSocket
    async def receive(self, text_data):
        text_data_json = json.loads(text_data)
        message = text_data_json['message']

        if message == 'send_fuck':
            for i in range(50):
                await self.channel_layer.group_send(
                    self.room_group_name,
                    {
                        'type': 'chat_message',
                        'message': 'fuck you!'
                    }
                )
                await asyncio.sleep(3)
        else:
            # Send message to room group
            await self.channel_layer.group_send(
                self.room_group_name,
                {
                    'type': 'chat_message',
                    'message': f'username: {self.scope["user"]} {message}'
                }
            )
            await self.save_message(message, self.scope['user'].email)

    @database_sync_to_async
    def save_message(self, message, author):
        message = Message.objects.create(message=message, author=author)

    # Receive message from room group
    async def chat_message(self, event):
        message = event['message']

        # Send message to WebSocket
        await self.send(text_data=json.dumps({
            'message': message
        }))