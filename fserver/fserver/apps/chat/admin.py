from django.contrib import admin
from chat.models import Message
# Register your models here.

class MessageAdmin(admin.ModelAdmin):
    date_hierarchy='created_at'
    fields = ('message', 'author')
    readonly_fields = ('created_at', )

admin.site.register(Message, MessageAdmin)