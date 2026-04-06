import React from "react";
import { MapPin, PaperclipHorizontal, Tag, Warning } from "@phosphor-icons/react";
import { ScreenProps, MobileHeader, MobilePrimaryBtn } from "../MobileShared";

const MobileReviewReport: React.FC<ScreenProps> = ({ navigate }) => {
  return (
    <div className="flex flex-col min-h-[700px]">
      <MobileHeader title="Revisar reporte" subtitle="Paso 4 de 4" onBack={() => navigate("evidence")} />
      <div className="flex-1 px-5 pb-6">
        <div className="flex gap-1 mb-5">
          {[1,2,3,4].map((s) => (
            <div key={s} className="flex-1 h-1 rounded-full bg-primary" />
          ))}
        </div>

        <div className="bg-orange-50 border border-orange-200 rounded-xl p-3 flex items-start gap-2 mb-4">
          <Warning size={16} weight="fill" className="text-warning mt-0.5 flex-shrink-0" />
          <p className="text-xs text-orange-700 font-sans">Revisa cuidadosamente antes de enviar. Los reportes falsos afectan tu nivel de confianza.</p>
        </div>

        <div className="space-y-3 mb-6">
          <div className="bg-white border border-neutral-200 rounded-2xl p-4">
            <div className="flex items-center gap-2 mb-3">
              <Tag size={14} weight="fill" className="text-primary" />
              <p className="text-xs font-semibold text-neutral-700 font-sans uppercase tracking-wide">Tipo de incidente</p>
            </div>
            <p className="text-sm font-medium text-neutral-900 font-sans">🚗 Accidente vial</p>
            <div className="flex items-center gap-2 mt-2">
              <span className="bg-orange-100 text-orange-700 text-xs font-medium px-2 py-0.5 rounded-full font-sans">Riesgo Alto</span>
            </div>
          </div>

          <div className="bg-white border border-neutral-200 rounded-2xl p-4">
            <p className="text-xs font-semibold text-neutral-700 font-sans uppercase tracking-wide mb-2">Descripción</p>
            <p className="text-xs text-neutral-600 font-sans leading-relaxed">
              Colisión entre vehículos en el cruce, al menos 2 personas lesionadas visibles. El tráfico está completamente bloqueado.
            </p>
          </div>

          <div className="bg-white border border-neutral-200 rounded-2xl p-4">
            <div className="flex items-center gap-2 mb-2">
              <MapPin size={14} weight="fill" className="text-info" />
              <p className="text-xs font-semibold text-neutral-700 font-sans uppercase tracking-wide">Ubicación</p>
            </div>
            <p className="text-xs text-neutral-600 font-sans">Cra 7 #45-21, Bogotá, Colombia</p>
          </div>

          <div className="bg-white border border-neutral-200 rounded-2xl p-4">
            <div className="flex items-center gap-2 mb-2">
              <PaperclipHorizontal size={14} weight="fill" className="text-neutral-500" />
              <p className="text-xs font-semibold text-neutral-700 font-sans uppercase tracking-wide">Evidencia adjunta</p>
            </div>
            <div className="flex gap-2">
              <div className="bg-neutral-100 rounded-lg w-14 h-14 flex items-center justify-center">
                <span className="text-xl">📷</span>
              </div>
              <div className="bg-neutral-100 rounded-lg w-14 h-14 flex items-center justify-center">
                <span className="text-xl">🎵</span>
              </div>
            </div>
            <p className="text-[10px] text-neutral-400 font-sans mt-1">2 archivos adjuntos</p>
          </div>
        </div>

        <div className="space-y-3">
          <MobilePrimaryBtn label="Enviar reporte" onClick={() => navigate("reportConfirm")} />
          <MobilePrimaryBtn label="Editar información" variant="ghost" onClick={() => navigate("createReport")} />
        </div>
      </div>
    </div>
  );
};

export default MobileReviewReport;