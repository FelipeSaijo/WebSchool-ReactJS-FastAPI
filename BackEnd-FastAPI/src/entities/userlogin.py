from pydantic import BaseModel
import re

class UserLogin(BaseModel):
    email: str
    password: str
    
    def check_email(self):
        email_format = re.compile('([A-Za-z0-9]+[.-_])*[A-Za-z0-9]+@[A-Za-z0-9-]+([.]+[A-Z|a-z]{2,})+')
        return re.fullmatch(email_format, email)
