import { useState } from "react";
import LogoutButton from "../components/LogoutButton";

interface AnalyseData {
  theme: string;
  impact: number;
  risque: number;
}

export default function Analyse() {
  // Données statiques merdique pour l'exemple
  const [analyses] = useState<AnalyseData[]>([
    { theme: "Climat", impact: 3, risque: 2 },
    { theme: "Biodiversité", impact: 2, risque: 4 }
  ]);

  return (
    <div>
      <h1 className="text-xl font-bold mb-4">Analyse double matérialité</h1>
      <table className="w-full border-collapse border">
        <thead>
          <tr className="bg-gray-100">
            <th className="border px-2 py-1">Thème</th>
            <th className="border px-2 py-1">Impact (1-5)</th>
            <th className="border px-2 py-1">Risque (1-5)</th>
          </tr>
        </thead>
        <tbody>
          {analyses.map((a, i) => (
            <tr key={i}>
              <td className="border px-2 py-1">{a.theme}</td>
              <td className="border px-2 py-1">{a.impact}</td>
              <td className="border px-2 py-1">{a.risque}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="mt-32">
        <LogoutButton />
      </div>
    </div>
  );
}
