from pydantic import BaseModel

# base schema for the product
class ProductBase(BaseModel):
    name: str
    description: str
    price: float
    stock: int

# pass, 'cause no changes or items optionals on creation
class ProductCreate(ProductBase):
    pass


# schema for the product output, use this class as response_model in endpoints
# this will include the id and use orm_mode to convert the ORM object to a Pyd
class ProductOut(ProductBase):
    id: int

    class Config:
        orm_mode = True
