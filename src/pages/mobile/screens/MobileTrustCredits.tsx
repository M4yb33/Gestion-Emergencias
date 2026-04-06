import React from "react";
import { Star, TrendUp, Info } from "@phosphor-icons/react";
import { ScreenProps, MobileHeader, MobileBottomNav } from "../MobileShared";

const history = [
  { action: "Reporte confirmado", credits: "+25", color: "text-success" },
  { action: "Reporte despachado", credits: "+15", color: "text-success" },
  { action: "Reporte duplicado", credits: "-5", color: "text-error" },
  { action: "Reporte confirmado", credits: "+25", color: "text-success" },
  { action: "Registro completado", credits: "+10", color: "text-success" },
];

const MobileTrustCredits: React.FC<ScreenProps> = ({ navigate }) => {
  return (
    <div className="flex flex-col min-h-[700px]">
      <MobileHeader title="Confianza y Créditos" hideBack />
      <div className="flex-1 pb-4 overflow-y-auto">
        <div className="bg-gradient-to-br from-[#7b1c2e] to-[#1a2e5a] px-5 pt-6 pb-10">
          <div className="flex items-center justify-between mb-4">
            <div>
              <p className="text-white/60 text-xs font-sans">Nivel de confianza</p>
              <h2 className="text-2xl font-bold text-white font-sans">Ciudadano Activo</h2>
            </div>
            <div className="w-14 h-14 bg-yellow-400/20 rounded-2xl flex items-center justify-center border border-yellow-400/30">
              <Star size={28} weight="fill" className="text-yellow-400" />
            </div>
          </div>
          <div className="bg-white/10 rounded-xl p-3 mb-3">
            <div className="flex items-center justify-between mb-2">
              <p className="text-white/70 text-xs font-sans">Puntuación</p>
              <p className="text-white font-bold text-sm font-sans">78 / 100</p>
            </div>
            <div className="w-full bg-white/20 rounded-full h-2">
              <div className="bg-yellow-400 h-2 rounded-full transition-all" style={{ width: "78%" }} />
            </div>
          </div>
          <div className="grid grid-cols-3 gap-2 text-center">
            {[
              { label: "Reportes", value: "12" },
              { label: "Confirmados", value: "8" },
              { label: "Precisión", value: "67%" },
            ].map((s) => (
              <div key={s.label} className="bg-white/10 rounded-xl p-2">
                <p className="text-white font-bold text-lg font-sans">{s.value}</p>
                <p className="text-white/50 text-[10px] font-sans">{s.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-neutral-50 -mt-6 rounded-t-3xl px-5 pt-5">
          <div className="bg-white border border-neutral-200 rounded-2xl p-4 mb-4">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-sm font-semibold text-neutral-800 font-sans">Créditos cívicos</h3>
              <button onClick={() => navigate("incentives")} className="text-xs text-primary font-medium cursor-pointer font-sans">Ver incentivos</button>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-yellow-50 rounded-xl border border-yellow-200 flex items-center justify-center">
export default MobileTrustCredits;