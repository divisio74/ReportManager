from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
from fastapi import FastAPI, HTTPException

app = FastAPI()

class LoginRequest(BaseModel):
    username: str
    password: str

@app.post("/login")
def login(request: LoginRequest):
    # A securiser correctement en prod
    if request.username == "admin" and request.password == "admin123":
        return {"message": "Connexion réussie", "token": "fake-jwt-token"}
    else:
        raise HTTPException(status_code=401, detail="Identifiants invalides")


# Autoriser le frontend (React) à appeler l’API
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # ⚠️ en prod, limiter à ton domaine
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Modèle de données attendu
class ESGData(BaseModel):
    co2: float
    eau: float
    accidents: int

# Endpoint de collecte
@app.post("/collecte")
def collecte_data(data: ESGData):
    print("✅ Données reçues :", data.dict())
    return {"message": "Données enregistrées avec succès", "data": data.dict()}
