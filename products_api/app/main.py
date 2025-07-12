# main.py
from fastapi import FastAPI
from app.api.alpha.endpoints import products

app = FastAPI(title="Prueba técnica - FastAPI", version="alpha")

app.include_router(product.router, prefix="/product/alpha/v1", tags=["product"])
