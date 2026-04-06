import React, { useState } from "react";
import { MapPin, FunnelSimple } from "@phosphor-icons/react";
import { ScreenProps, MobileHeader, MobileStatusBadge, MobileBottomNav } from "../MobileShared";

const reports = [
  { id: "RPT-0043", type: "Accidente vial", emoji: "🚗", date: "Hace 10 min", location: "Cra 7 #45-21", status: "Recibido" },
  { id: "RPT-0042", type: "Accidente vial", emoji: "🚗", date: "Hace 2 horas", location: "Cra 7 con Cl 45", status: "Despachado" },
  { id: "RPT-0038", type: "Incendio", emoji: "🔥", date: "Ayer 14:22", location: "Cl 80 #12-35", status: "Cerrado" },
  { id: "RPT-0031", type: "Inundación vía", emoji: "🌊", date: "Hace 3 días", location: "Av Boyacá sur", status: "Cerrado" },
  { id: "RPT-0024", type: "Emergencia médica", emoji: "🏥", date: "Hace 1 semana", location: "Cl 45 #15-20", status: "Cerrado" },
];

const filters = ["Todos", "Recibido", "En revisión", "Despachado", "Cerrado"];

const MobileReportList: React.FC<ScreenProps> = ({ navigate }) => {
  const [filter, setFilter] = useState("Todos");
  const filtered = filter === "Todos" ? reports : reports.filter((r) => r.status === filter);

  return (
    <div className="flex flex-col min-h-[700px]">
      <MobileHeader title="Mis Reportes" hideBack subtitle={`${reports.length} reportes en total`} />
      <div className="flex-1 pb-4">
        <div className="flex gap-2 px-5 pb-4 overflow-x-auto no-scrollbar">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`flex-shrink-0 px-3 py-1.5 rounded-full text-xs font-medium font-sans cursor-pointer transition-colors ${
                filter === f ? "bg-primary text-white" : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="px-5 space-y-3">
          {filtered.map((r) => (
            <button
              key={r.id}
              onClick={() => navigate("reportDetail")}
              className="w-full bg-white border border-neutral-200 rounded-2xl p-4 flex items-start gap-3 cursor-pointer hover:shadow-sm transition-shadow text-left"
            >
              <div className="w-10 h-10 bg-neutral-100 rounded-xl flex items-center justify-center flex-shrink-0 text-xl">
                {r.emoji}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-2 mb-1">
                  <p className="text-sm font-semibold text-neutral-900 font-sans">{r.type}</p>
                  <MobileStatusBadge status={r.status} />
                </div>
                <p className="text-[10px] text-neutral-400 font-sans flex items-center gap-1">
                  <MapPin size={9} weight="fill" /> {r.location}
                </p>
                <p className="text-[10px] text-neutral-400 font-sans mt-0.5">{r.date}</p>
                <p className="text-[10px] font-mono text-neutral-400 mt-0.5">{r.id}</p>
              </div>
            </button>
          ))}
        </div>
      </div>
      <MobileBottomNav active="reportList" navigate={navigate} />
    </div>
  );
};

export default MobileReportList;