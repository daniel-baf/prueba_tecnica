from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session

from app.db.session import engine, SessionLocal, Base
from app.api.alpha.endpoints import products
from app.models.product import Product

app = FastAPI()

# middleware and CORS settings can be added here if needed
# TODO: remove the * from allow_origins in production
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

Base.metadata.create_all(bind=engine)  # Create the database tables if they do not exist


# Seed database if empty
# Drop all tables and recreate them
Base.metadata.drop_all(bind=engine)
Base.metadata.create_all(bind=engine)


def seed_database():
    db: Session = SessionLocal()
    if db.query(Product).first() is None:
        sample_products = [
            Product(name="Laptop", description="14-inch ultrabook", price=999.99),
            Product(name="Mouse", description="Wireless optical mouse", price=29.99),
            Product(name="Monitor", description="24-inch FHD monitor", price=159.50),
        ]
        db.add_all(sample_products)
        db.commit()
        print("[INFO] Sample products added.")
    db.close()


seed_database()


# Include routers
app.include_router(products.router, prefix="/api/alpha/products", tags=["products"])
