import pytest
from entities.userlogin import UserLogin

class TestUserLogin:
    def test_check_email_given_a_valid_email(self):
        user_email = "teste@teste.com.br"
        user_password = "123456"
        expected = None
        
        user_test : UserLogin(user_email, user_password)
        try:
            result = user_test.check_email()
            assert result != expected
        except:
            print("Something went wrong")
        
        