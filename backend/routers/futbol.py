from fastapi import APIRouter
import httpx
from dotenv import load_dotenv
import os

load_dotenv()

url = os.getenv('URL')
url_resultados = os.getenv('URL_RESULTADOS')

router = APIRouter(prefix="/futbol", tags=["futbol"])

API_URL = f'{url}'
API_URL_RESULTADOS = f'{url_resultados}'

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

        response = await client.get(API_URL_RESULTADOS)

        data = response.json()


        filtrados = [evento for evento in data["events"] if evento.get("league", {}).get("id") == "745"]
 
        
        return filtrados
    

@router.get("/calendario")
async def obtener_calendario():
    async with httpx.AsyncClient() as client:

        response = await client.get(API_URL_CALENDARIO)

        data = response.json()


        filtrados = [evento for evento in data["events"] if evento.get("league", {}).get("id") == "745"]
 
        
        return filtrados