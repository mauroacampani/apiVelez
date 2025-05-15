from fastapi import APIRouter
import httpx
from dotenv import load_dotenv
import os

load_dotenv()

url = os.getenv('URL')

router = APIRouter(prefix="/futbol", tags=["futbol"])

API_URL = f'{url}'

@router.get("/tabla")
async def obtener_tabla():
    async with httpx.AsyncClient() as client:

        response = await client.get(API_URL)

        data = response.json()

        standings_entries = data["children"][0]["standings"]

        return standings_entries
    

@router.get("/resultados")
async def obtener_resultados():
    async with httpx.AsyncClient() as client:

        response = await client.get(API_URL)

        data = response.json()

        standings_entries = data["children"][0]["standings"]

        return standings_entries