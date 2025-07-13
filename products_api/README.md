Certainly — here's the complete `README.md` content in raw **Markdown** format:

---

````markdown
# FastAPI Product API

A lightweight REST API built with **FastAPI**, using **SQLite3** to simulate a database connection without requiring a running PostgreSQL server or user setup.

---

## 📦 Requirements

- Python 3.13.8
- pip (Python package installer)
- [Postman](https://www.postman.com/) (optional, for testing API endpoints)

---

## ⚙️ Installation

1. Clone the repository:

```bash
git clone https://github.com/your-username/your-repo.git
cd your-repo
```
````

2. (Optional but recommended) Create and activate a virtual environment:

```bash
python -m venv venv
source venv/bin/activate      # On Linux/macOS
venv\Scripts\activate         # On Windows
```

3. Install dependencies:

```bash
pip install -r requirements.txt
```

---

## 🚀 Running the API

You can run the API in two ways:

### ✅ Option 1 – Manually with `uvicorn`:

```bash
uvicorn app.main:app --reload
```

### ✅ Option 2 – Using the provided `run.sh` script:

```bash
bash run.sh
```

By default, the server will be available at:

```
http://localhost:8000
```

---

## 🗃️ Database

- The API uses **SQLite3** for simplicity — no need to install or configure external services.
- A local database file will be created on first run.
- If the table is empty, it will be seeded automatically with sample products.

---

## 🔌 API Endpoints

All endpoints are under the prefix:

```
/api/alpha/products/
```

| Method | Endpoint                     | Description          |
| ------ | ---------------------------- | -------------------- |
| `GET`  | `/api/alpha/products/`       | List all products    |
| `POST` | `/api/alpha/products/create` | Create a new product |

---

## 📮 Postman Collection

- The collection file is included: [`POSTMAN_API.json`](./POSTMAN_API.json)
- Set the environment variable `API_URL` to:

```
http://localhost:8000/api/alpha
```

> Replace `localhost` with your IP or hostname if you're testing on a different machine or environment.

---

## 🧾 Sample JSON to Create a Product

```json
{
  "name": "testing name",
  "description": "this must be a description",
  "price": 20.12
}
```

---

## ✅ Features

- [x] FastAPI backend
- [x] SQLite3 for local storage
- [x] SQLAlchemy ORM integration
- [x] Pydantic validation
- [x] Auto-seed sample data if DB is empty
- [x] RESTful product endpoints
- [x] Postman collection for testing
- [x] Swagger documentation

---

## 📚 API Documentation

You can access the interactive Swagger UI for API documentation and testing at:

```
http://localhost:8000/docs
```

## 📄 License

GNU V3

```

---

```
