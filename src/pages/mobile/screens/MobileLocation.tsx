import React, { useState } from "react";
import { MapPin, NavigationArrow } from "@phosphor-icons/react";
import { ScreenProps, MobileHeader, MobilePrimaryBtn } from "../MobileShared";

const MobileLocation: React.FC<ScreenProps> = ({ navigate, reportData }) => {
  const [confirmed, setConfirmed] = useState(false);
  const [manual, setManual] = useState("");

  return (
    <div className="flex flex-col min-h-[700px]">
      <MobileHeader title="Ubicación del incidente" subtitle="Paso 2 de 4" onBack={() => navigate("createReport")} />
      <div className="flex-1 flex flex-col">
        <div className="flex gap-1 px-5 mb-4">
          {[1,2,3,4].map((s) => (
            <div key={s} className={`flex-1 h-1 rounded-full ${s <= 2 ? "bg-primary" : "bg-neutral-200"}`} />
          ))}
        </div>

        <div className="mx-5 rounded-2xl overflow-hidden border border-neutral-200 mb-4 bg-neutral-100 relative" style={{ height: 220 }}>
          <div className="w-full h-full bg-gradient-to-br from-slate-200 to-slate-300 flex items-center justify-center relative">
            <div className="absolute inset-0">
              {[...Array(8)].map((_, i) => (
                <div key={i} className={`absolute border-neutral-300/60 ${i % 2 === 0 ? "border-t w-full" : "border-l h-full"}`}
                  style={{ top: i % 2 === 0 ? `${(i/2 + 1) * 14}%` : "0", left: i % 2 !== 0 ? `${(Math.floor(i/2) + 1) * 20}%` : "0" }} />
              ))}
            </div>
            <div className="relative z-10 flex flex-col items-center gap-1">
              <div className="w-10 h-10 bg-error rounded-full flex items-center justify-center border-4 border-white shadow-lg">
                <MapPin size={18} weight="fill" className="text-white" />
              </div>
              <div className="bg-white rounded-lg px-2 py-1 shadow-sm">
                <p className="text-[10px] font-medium text-neutral-700 font-sans">Cra 7 #45-21, Bogotá</p>
              </div>
            </div>
          </div>
          {confirmed && (
            <div className="absolute top-2 right-2 bg-success text-white text-[10px] font-sans font-medium px-2 py-1 rounded-full">
              ✓ Confirmada
            </div>
          )}
        </div>

        <div className="px-5 space-y-3 flex-1">
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-3 flex items-center gap-3">
            <NavigationArrow size={18} weight="fill" className="text-info flex-shrink-0" />
            <div>
              <p className="text-xs font-semibold text-blue-800 font-sans">Ubicación detectada</p>
              <p className="text-[10px] text-blue-600 font-sans">Cra 7 #45-21, Bogotá, Colombia</p>
            </div>
          </div>

          <button
            onClick={() => setConfirmed(true)}
            className={`w-full border-2 rounded-xl py-3 text-sm font-medium cursor-pointer transition-all font-sans flex items-center justify-center gap-2 ${
              confirmed ? "border-success bg-success/10 text-success" : "border-info bg-blue-50 text-info hover:bg-blue-100"
            }`}
          >
            <NavigationArrow size={16} weight="fill" />
            {confirmed ? "✓ Usando mi ubicación GPS" : "Usar mi ubicación actual"}
          </button>

          <div>
            <p className="text-xs text-neutral-500 font-sans mb-2">O escribe la dirección manualmente:</p>
            <input
              type="text"
              placeholder="Ej: Av. Caracas con Calle 80"
              value={manual}
              onChange={(e) => { setManual(e.target.value); setConfirmed(true); }}
              className="w-full px-3.5 py-3 border border-neutral-200 rounded-xl text-sm text-neutral-900 bg-neutral-50 placeholder-neutral-400 font-sans focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <MobilePrimaryBtn
            label="Siguiente → Evidencia"
            onClick={() => navigate("evidence", { location: manual || "Cra 7 #45-21, Bogotá" })}
            disabled={!confirmed && !manual}
          />
        </div>
      </div>
    </div>
  );
};

export default MobileLocation;