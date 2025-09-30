import LogoutButton from "../components/LogoutButton";

export default function Report() {
  const handleExport = () => {
    alert("Export PDF en cours (mock)...");
  };

  return (
    <div>
      <h1 className="text-xl font-bold mb-4">Rapport CSRD</h1>
      <p>Un rapport conforme sera généré ici.</p>
      <button
        onClick={handleExport}
        className="bg-green-600 text-white px-4 py-2 rounded mt-4"
      >
        Exporter en PDF
      </button>
      <div className="mt-32">
        <LogoutButton />
      </div>
    </div>
  );
}

