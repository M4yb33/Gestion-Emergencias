import React, { useState } from "react";
import { ScreenProps, MobileHeader, MobilePrimaryBtn } from "../MobileShared";

interface IncidentType {
  id: string;
  label: string;
  emoji: string;
}

interface RiskLevel {
  id: string;
  label: string;
  color: string;
}

const incidentTypes: IncidentType[] = [
  { id: "fire", label: "Incendio", emoji: "🔥" },
  { id: "accident", label: "Accidente", emoji: "🚗" },
  { id: "medical", label: "Médico", emoji: "🏥" },
  { id: "other", label: "Otro", emoji: "⚠️" },
];

const riskLevels: RiskLevel[] = [
  { id: "low", label: "Bajo", color: "bg-green-100 text-green-700" },
  { id: "medium", label: "Medio", color: "bg-yellow-100 text-yellow-700" },
  { id: "high", label: "Alto", color: "bg-red-100 text-red-700" },
  { id: "critical", label: "Crítico", color: "bg-red-200 text-red-900" },
];

const MobileCreateReport: React.FC<ScreenProps> = ({ navigate }) => {
  const [selected, setSelected] = useState<string | null>(null);
  const [risk, setRisk] = useState<string | null>(null);
  const [desc, setDesc] = useState("");

  return (
    <div className="flex flex-col min-h-[700px] bg-white">
      <MobileHeader
        title="Nuevo reporte"
        subtitle="Paso 1 de 4"
        onBack={() => navigate("dashboard")}
      />

      <div className="flex-1 px-5 pb-6 overflow-y-auto">
        <div className="flex gap-1 mb-4">
          {[1, 2, 3, 4].map((step) => (
            <div
              key={step}
              className={`flex-1 h-1 rounded-full ${
                step === 1 ? "bg-primary" : "bg-neutral-200"
              }`}
            />
          ))}
        </div>

        <p className="text-sm font-semibold text-neutral-800 font-sans mb-3">
          Tipo de incidente <span className="text-error">*</span>
        </p>
        <div className="grid grid-cols-4 gap-2 mb-5">
          {incidentTypes.map((type) => (
            <button
              key={type.id}
              onClick={() => setSelected(type.id)}
              className={`flex flex-col items-center gap-1.5 p-2 rounded-xl border-2 cursor-pointer transition-all ${
                selected === type.id
                  ? "border-primary bg-primary/5"
                  : "border-neutral-200 bg-white hover:border-neutral-300"
              }`}
            >
              <span className="text-xl">{type.emoji}</span>
              <span className="text-[9px] font-medium text-neutral-700 font-sans text-center leading-tight">
                {type.label}
              </span>
            </button>
          ))}
        </div>

        <p className="text-sm font-semibold text-neutral-800 font-sans mb-3">
          Nivel de riesgo <span className="text-error">*</span>
        </p>
        <div className="grid grid-cols-2 gap-2 mb-5">
          {riskLevels.map((level) => (
            <button
              key={level.id}
              onClick={() => setRisk(level.id)}
              className={`border-2 rounded-xl py-2.5 text-xs font-medium font-sans cursor-pointer transition-all ${
                risk === level.id
                  ? `${level.color} border-2`
                  : "border-neutral-200 bg-white text-neutral-600 hover:border-neutral-300"
              }`}
            >
              {level.label}
            </button>
          ))}
        </div>

        <p className="text-sm font-semibold text-neutral-800 font-sans mb-2">
          Descripción breve <span className="text-error">*</span>
        </p>
        <textarea
          placeholder="Describe brevemente lo que está ocurriendo..."
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
          rows={3}
          className="w-full px-3.5 py-3 border border-neutral-200 rounded-xl text-sm text-neutral-900 bg-neutral-50 placeholder-neutral-400 font-sans focus:outline-none focus:ring-2 focus:ring-primary resize-none mb-5"
        />

        <MobilePrimaryBtn
          label="Siguiente -> Ubicación"
          onClick={() => navigate("location", { type: selected ?? undefined, risk: risk ?? undefined, desc })}
          disabled={!selected || !risk || !desc.trim()}
        />
      </div>
    </div>
  );
};

export default MobileCreateReport;
