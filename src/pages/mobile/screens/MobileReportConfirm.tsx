import React from "react";
import { CheckCircle, ArrowRight } from "@phosphor-icons/react";
import { ScreenProps, MobilePrimaryBtn } from "../MobileShared";

const MobileReportConfirm: React.FC<ScreenProps> = ({ navigate }) => {
    return (
        <div className="flex flex-col min-h-[700px] items-center justify-center px-6 py-10">
            <div className="text-center">
                <div className="w-24 h-24 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle size={52} weight="fill" className="text-success" />
                </div>
                <h1 className="text-xl font-bold text-neutral-900 font-sans mb-2">¡Reporte enviado!</h1>
                <p className="text-sm text-neutral-500 font-sans mb-6 leading-relaxed">
                    Tu reporte fue recibido correctamente. Un operador lo revisará en breve.
                </p>

                <div className="bg-neutral-50 border border-neutral-200 rounded-2xl p-5 mb-6 text-left">
                    <div className="flex items-center justify-between mb-3">
                        <p className="text-xs text-neutral-500 font-sans">Número de caso</p>
                        <span className="bg-primary/10 text-primary text-xs font-bold px-3 py-1 rounded-full font-mono">RPT-0043</span>
                    </div>
                    <div className="flex items-center justify-between mb-3">
                        <p className="text-xs text-neutral-500 font-sans">Estado inicial</p>
                        <span className="bg-blue-100 text-blue-700 text-xs font-medium px-2 py-0.5 rounded-full font-sans">Recibido</span>
                    </div>
                    <div className="flex items-center justify-between">
                        <p className="text-xs text-neutral-500 font-sans">Tiempo estimado</p>
                        <p className="text-xs font-semibold text-neutral-800 font-sans">~5 minutos</p>
                    </div>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-xl p-3 mb-6">
                    <p className="text-xs text-blue-700 font-sans">
                        📲 Recibirás notificaciones sobre el estado de tu reporte
                    </p>
                </div>

                <div className="space-y-3 w-full">
                    <MobilePrimaryBtn
                        label="Ver detalle del reporte"
                        onClick={() => navigate("reportDetail")}
                        icon={<ArrowRight size={16} />}
                    />
                    <MobilePrimaryBtn label="Volver al inicio" variant="ghost" onClick={() => navigate("dashboard")} />
                </div>
            </div>
        </div>
    );
};

export default MobileReportConfirm;