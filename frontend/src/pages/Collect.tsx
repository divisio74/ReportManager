import { useState, ChangeEvent, FormEvent } from "react";
import LogoutButton from "../components/LogoutButton";

interface FormData {
  co2: string;
  eau: string;
  accidents: string;
}

export default function Collecte() {
  const [formData, setFormData] = useState<FormData>({
    co2: "",
    eau: "",
    accidents: ""
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8000/collecte", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          co2: parseFloat(formData.co2),
          eau: parseFloat(formData.eau),
          accidents: parseInt(formData.accidents, 10)
        })
      });

      const result = await response.json();
      alert("✅ " + result.message);
      console.log(result);
    } catch (error) {
      console.error("❌ Erreur API:", error);
      alert("Erreur lors de l'envoi des données.");
    }
  };

  return (
    <div>
      <h1 className="text-xl font-bold mb-4">Collecte des données ESG</h1>
      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          type="number"
          name="co2"
          placeholder="Émissions CO₂ (tonnes)"
          value={formData.co2}
          onChange={handleChange}
          className="border p-2 rounded w-full"
        />
        <input
          type="number"
          name="eau"
          placeholder="Consommation d’eau (m³)"
          value={formData.eau}
          onChange={handleChange}
          className="border p-2 rounded w-full"
        />
        <input
          type="number"
          name="accidents"
          placeholder="Accidents de travail"
          value={formData.accidents}
          onChange={handleChange}
          className="border p-2 rounded w-full"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Sauvegarder
        </button>
      </form>
      <div className="mt-32">
        <LogoutButton />
      </div>
    </div>
  );
}
