import React from "react";
import { MapPin, PaperclipHorizontal } from "@phosphor-icons/react";
import { ScreenProps, MobileHeader, MobileStatusBadge, MobileBottomNav } from "../MobileShared";

const timeline = [
  { state: "Recibido", time: "09:42 — Hoy", done: true, active: false },
  { state: "En revisión", time: "09:48 — Hoy", done: true, active: false },
  { state: "Despachado", time: "10:05 — Hoy", done: true, active: true },
  { state: "Cerrado", time: "Pendiente", done: false, active: false },
];

const MobileReportDetail: React.FC<ScreenProps> = ({ navigate }) => {
  return (
    <div className="flex flex-col min-h-[700px]">
      <MobileHeader title="Detalle del reporte" onBack={() => navigate("reportList")} />
      <div className="flex-1 px-5 pb-4 overflow-y-auto space-y-4">
        <div className="flex items-center justify-between">
          <span className="font-mono text-xs text-neutral-500 bg-neutral-100 px-2 py-1 rounded-lg">RPT-0042</span>
          <MobileStatusBadge status="Despachado" size="md" />
        </div>

        <div className="bg-white border border-neutral-200 rounded-2xl p-4">
          <p className="text-xs font-semibold text-neutral-500 uppercase tracking-wide mb-1">Incidente</p>
          <p className="text-base font-bold text-neutral-900 font-sans mb-1">🚗 Accidente vial</p>
          <span className="bg-orange-100 text-orange-700 text-xs font-medium px-2 py-0.5 rounded-full font-sans">Riesgo Alto</span>
          <p className="text-xs text-neutral-600 font-sans mt-3 leading-relaxed">
            Colisión entre vehículos en el cruce. Al menos 2 personas lesionadas. Tráfico bloqueado.
          </p>
        </div>

        <div className="bg-white border border-neutral-200 rounded-2xl p-4">
          <div className="flex items-center gap-2 mb-2">
            <MapPin size={14} weight="fill" className="text-info" />
            <p className="text-xs font-semibold text-neutral-700 font-sans">Ubicación</p>
          </div>
          <div className="bg-neutral-100 rounded-xl h-28 flex items-center justify-center mb-2 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-slate-200 to-slate-300" />
            <div className="relative z-10 flex flex-col items-center gap-1">
              <div className="w-7 h-7 bg-error rounded-full flex items-center justify-center border-2 border-white shadow">
                <MapPin size={12} weight="fill" className="text-white" />
              </div>
            </div>
          </div>
          <p className="text-xs text-neutral-600 font-sans">Cra 7 con Cl 45, Bogotá</p>
        </div>

        <div className="bg-white border border-neutral-200 rounded-2xl p-4">
          <p className="text-xs font-semibold text-neutral-700 font-sans mb-3">Línea de tiempo</p>
          <div className="space-y-3">
            {timeline.map((t) => (
              <div key={t.state} className="flex items-center gap-3">
                <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 border-2 ${
                  t.active ? "bg-primary border-primary" : t.done ? "bg-success border-success" : "bg-white border-neutral-300"
                }`}>
                  {(t.done || t.active) && <span className="text-white text-[8px] font-bold">✓</span>}
                </div>
                <div className="flex-1">
                  <p className={`text-xs font-medium font-sans ${t.active ? "text-primary" : t.done ? "text-neutral-800" : "text-neutral-400"}`}>{t.state}</p>
                  <p className="text-[10px] text-neutral-400 font-sans">{t.time}</p>
                </div>
                {t.active && <span className="bg-primary/10 text-primary text-[10px] font-medium px-2 py-0.5 rounded-full font-sans">Actual</span>}
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white border border-neutral-200 rounded-2xl p-4">
          <div className="flex items-center gap-2 mb-2">
            <PaperclipHorizontal size={14} weight="fill" className="text-neutral-500" />
            <p className="text-xs font-semibold text-neutral-700 font-sans">Evidencias</p>
          </div>
          <div className="flex gap-2">
            <div className="w-16 h-16 bg-neutral-200 rounded-xl flex items-center justify-center">📷</div>
            <div className="w-16 h-16 bg-neutral-200 rounded-xl flex items-center justify-center">🎵</div>
          </div>
        </div>
      </div>
      <MobileBottomNav active="reportList" navigate={navigate} />
    </div>
  );
};

export default MobileReportDetail;