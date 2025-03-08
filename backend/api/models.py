from django.db import models


class Call(models.Model):
    agent = models.ForeignKey('Agent', on_delete=models.CASCADE)
    customer = models.ForeignKey('Customer', on_delete=models.SET_NULL, null=True, blank=True)
    transcript = models.TextField()  # Speech-to-text result
    duration = models.IntegerField()  # Duration in seconds
    sentiment = models.FloatField()  # Sentiment score (-1 to +1)
    keywords = models.TextField(blank=True)  # Extracted keywords
    flagged = models.BooleanField(default=False)  # If flagged for review
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Call {self.id} - Agent {self.agent.name}"

class Chat(models.Model):
    agent = models.ForeignKey('Agent', on_delete=models.CASCADE)
    customer = models.ForeignKey('Customer', on_delete=models.SET_NULL, null=True, blank=True)
    message = models.TextField()  # Customer's message
    response = models.TextField()  # Chatbot/Agent response
    intent = models.CharField(max_length=255)  # Detected intent (fastText, ML model)
    flagged = models.BooleanField(default=False)  # If flagged
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Chat {self.id} - Intent: {self.intent}"

class Agent(models.Model):
    name = models.CharField(max_length=255)
    email = models.EmailField(unique=True)
    department = models.CharField(max_length=255, blank=True)
    avg_response_time = models.FloatField(default=0)  # Avg response time in seconds
    accuracy = models.FloatField(default=0)  # Response accuracy percentage
    flagged_count = models.IntegerField(default=0)  # Count of flagged interactions

    def __str__(self):
        return self.name


class Alert(models.Model):
    SEVERITY_CHOICES = [
        ('low', 'Low'),
        ('medium', 'Medium'),
        ('high', 'High'),
    ]

    call = models.ForeignKey('Call', on_delete=models.SET_NULL, null=True, blank=True)
    chat = models.ForeignKey('Chat', on_delete=models.SET_NULL, null=True, blank=True)
    agent = models.ForeignKey('Agent', on_delete=models.CASCADE)
    reason = models.TextField()  # Why was it flagged?
    severity = models.CharField(max_length=10, choices=SEVERITY_CHOICES, default='low')
    resolved = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Alert {self.id} - {self.severity} severity"
    
class Customer(models.Model):
    name = models.CharField(max_length=255)
    phone = models.CharField(max_length=20, unique=True)
    email = models.EmailField(unique=True, blank=True, null=True)
    past_interactions = models.TextField(blank=True)

    def __str__(self):
        return self.name




# Create your models here.
