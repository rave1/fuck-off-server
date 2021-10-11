from django.db import models

# Create your models here.

class Message(models.Model):
    message = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    author = models.JSONField()

    def __str__(self):
        return f'Author: {self.author}, message: {self.message}'