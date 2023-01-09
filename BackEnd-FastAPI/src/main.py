from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from .entities.userlogin import UserLogin


app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_methods=['*'], 
    allow_headers=['*'], 
    allow_credentials=True, 
    allow_origins=['http://localhost:3000']
)   

@app.post('/')
async def login(serlogin: UserLogin):
    print(userlogin)