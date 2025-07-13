
"""
This module sets up the SQLAlchemy database engine and session factory for the application.

Attributes:
    engine (sqlalchemy.engine.base.Engine): The SQLAlchemy engine instance connected to the database specified by SQLALCHEMY_DATABASE_URI.
    SessionLocal (sqlalchemy.orm.session.sessionmaker): A sessionmaker factory configured to create new SQLAlchemy Session objects with autocommit and autoflush disabled, and bound to the engine.

Note:
    The 'check_same_thread' argument is set to False to allow usage of the same SQLite database connection across multiple threads.
    This is just a simulation so I'm not installing a DB or external dependencies.
"""

from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker, declarative_base
from app.config import SQLALCHEMY_DATABASE_URI


engine = create_engine(
    SQLALCHEMY_DATABASE_URI, connect_args={"check_same_thread": False}
)

SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine) # session factory for creating new Session objects

Base = declarative_base() # central base class for declarative models, import in the models
