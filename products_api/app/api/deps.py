# GLOBAL DEPENDENCIES FOR API ROUTES

from app.db.session import SessionLocal

# return the temporal DB session
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()
