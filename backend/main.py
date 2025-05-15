from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routers import futbol

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # En producción, limitar origen
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(futbol.router)