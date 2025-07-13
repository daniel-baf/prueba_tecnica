"""
Products API Endpoints
DANIEL BAUTISTA, JULY 12 2025
THIS MODULE HANDLES ALL THE ENDPOINTS RELATED TO PRODUCTS
ALL LOGIC IS IN THE SERVICE, THIS JUST WORKS AS A MIDDLE LAYER TO THE LOGIC
THIS MODULE IS PART OF THE ALPHA VERSION OF THE API

NOTE: the parent must indicate the endpoint, this works just as the final /name
# example: /api/alpha/products (parent) + /create => /api/alpha/products/create
"""

from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.schemas.product import ProductCreate, ProductOut
from app.services import product_service
from app.api.deps import get_db

router = APIRouter()


# Get all the products
@router.get("/")
def get_products(db: Session = Depends(get_db)):
    return product_service.get_all_products(db=db)


# create a new product
# TODO: check if there is a product with same name
@router.post("/create", response_model=ProductOut)
def create_product(product: ProductCreate, db: Session = Depends(get_db)):
    return product_service.create_product(db=db, product=product)

# list a product by id
@router.get("/{product_id}", response_model=ProductOut)
def get_product(product_id: int, db: Session = Depends(get_db)):
    product = product_service.get_product_by_id(db=db, product_id=product_id)
    return product


# updates the product by id
@router.put("/{product_id}", response_model=ProductOut)
def update_product(
    product_id: int, product: ProductCreate, db: Session = Depends(get_db)
):
    return product_service.update_product(product_id=product_id, product=product, db=db)


# deletes the product by id
@router.delete("/{product_id}")
def delete_product(product_id: int, db: Session = Depends(get_db)):
    return product_service.delete_product(product_id=product_id, db=db)
