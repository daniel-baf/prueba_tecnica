from sqlalchemy import Column, Integer, String
from app.db.session import engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy import Numeric
from app.db.session import Base

# product used in case of any logic for the ORM, always check is the same structure as the schema 
# at app/schemas/product.py
class Product(Base):
    __tablename__ = "product"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, index=True)
    price = Column(Numeric(10, 2))
    description = Column(String)
    stock = Column(Integer)
