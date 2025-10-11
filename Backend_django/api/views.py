from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .serializers import UserSerializer
from .serializers import UserProfileSerializer
from rest_framework.permissions import IsAuthenticated
from django.contrib.auth import authenticate, login , get_user_model

User = get_user_model()

class RegisterView(APIView):
    def post(self, request):
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({"message": "User created successfully"}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class LoginView(APIView):
    def post(self, request):
        email_ = request.data.get("email")
        password = request.data.get("password")

        try:
            if "@" in email_:
              user_obj = User.objects.get(email=email_)
              username = user_obj.username   # Django authenticate needs username
            else:
                username= email_
        except User.DoesNotExist:
            return Response({"error": "Invalid credentials"}, status=status.HTTP_400_BAD_REQUEST)
        user = authenticate(request, username=username, password=password)
        if user is not None:
            login(request, user)
            return Response({"message": "Login successful"})
        return Response({"error": "Invalid credentials"}, status=status.HTTP_400_BAD_REQUEST)

class MeView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request): 
        serializer = UserProfileSerializer(request.user)
        return Response(serializer.data)