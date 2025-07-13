"""
ALL FUNCTIONS IN THIS FILE ARE RELATED TO PRODUCT OPERATIONS
and all follows this returns and raises pattern:

Args:
    db (Session): SQLAlchemy database session.
    product (ProductCreate): Product data to be created.
Returns:
    Product: The created Product object on success.
    dict: An error dictionary if an exception occurs.

Raises:
    Exception: Any exception raised during the database operation is caught and returned as an error dictionary.
"""

from sqlalchemy.orm import Session
from app.models.product import Product
from app.schemas.product import ProductCreate
from app.schemas.product import ProductOut


def create_product(db: Session, product: ProductCreate):
    """
    Creates a new product in the database.

    # The function attempts to create a new Product instance using the provided product data,
    # adds it to the database session, commits the transaction, and refreshes the instance to get the latest data.
    # If any exception occurs during this process, it prints the exception and returns an error dictionary.
    """
    try:
        db_product = Product(**product.dict())
        db.add(db_product)
        db.commit()
        db.refresh(db_product)
        return db_product
    except Exception as e:
        print(e)
        return {"error": str(e)}


def get_all_products(db: Session) -> list[ProductOut]:
    """_summary_
    get all the products, do not use pagination for now
    Returns:
        list[ProductOut]: _description_
    """
    try:
        return db.query(Product).all()
    except Exception as e:
        print(e)
        return {"error": str(e)}


def get_product_by_id(db: Session, product_id: int) -> ProductOut:
    """
    Filters for a single product by id, if not found, then raises an error. Catch it in the parent function and display the error
    """
    try:
        product = db.query(Product).filter(Product.id == product_id).first()
        if product:
            return product
        else:
            return {"error": "Product not found"}
    except Exception as e:
        print(e)
        return {"error": str(e)}


def update_product(product_id: int, product: ProductCreate, db: Session) -> ProductOut:
    """
    Updates an existing product by its ID. TODO: implement ORM in this functions
    """
    try:
        db_product = db.query(Product).filter(Product.id == product_id).first()
        if db_product:
            for key, value in product.dict().items():
                setattr(db_product, key, value)
            db.commit()
            db.refresh(db_product)
            return db_product
        else:
            return {"error": "Product not found"}
    except Exception as e:
        print(e)
        return {"error": str(e)}


def delete_product(product_id: int, db: Session):
    """Deletes a product by its ID.
    If the product is found, it deletes it from the database and commits the transaction.
    If the product is not found, it returns an error message.
    """
    try:
        db_product = db.query(Product).filter(Product.id == product_id).first()
        if db_product:
            db.delete(db_product)
            db.commit()
            return {"message": "Product deleted successfully"}
        else:
            return {"error": "Product not found"}
    except Exception as e:
        print(e)
        return {"error": str(e)}
