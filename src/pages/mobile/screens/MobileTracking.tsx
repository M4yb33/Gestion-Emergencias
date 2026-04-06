import React from "react";
import { ScreenProps, MobileHeader, MobileBottomNav } from "../MobileShared";

const steps = [
    { label: "Recibido", desc: "Tu reporte fue registrado correctamente", time: "09:42", done: true, active: false },
    { label: "En revisión", desc: "Un operador está verificando la información", time: "09:48", done: true, active: false },
    { label: "Despachado", desc: "Unidades en camino a la ubicación reportada", time: "10:05", done: true, active: true },
    { label: "Atendido", desc: "El incidente está siendo atendido en campo", time: "—", done: false, active: false },
    { label: "Cerrado", desc: "Incidente resuelto y documentado", time: "—", done: false, active: false },
];

const MobileTracking: React.FC<ScreenProps> = ({ navigate }) => {
    return (
        <div className="flex flex-col min-h-[700px]">
            <MobileHeader title="Seguimiento" subtitle="RPT-0042 · Accidente vial" onBack={() => navigate("reportDetail")} />
            <div className="flex-1 px-5 pb-4">
                <div className="bg-primary/5 border border-primary/20 rounded-2xl p-4 mb-6 flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-lg">🚨</span>
                    </div>
                    <div>
                        <p className="text-xs font-semibold text-primary font-sans">Estado actual: Despachado</p>
                        <p className="text-[10px] text-neutral-500 font-sans">Unidades en camino · ETA ~8 min</p>
                    </div>
                </div>

                <div className="relative">
                    <div className="absolute left-[11px] top-0 bottom-0 w-0.5 bg-neutral-200" />
                    <div className="space-y-5">
                        {steps.map((step, i) => (
                            <div key={step.label} className="flex gap-4 relative">
                                <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 border-2 z-10 ${step.active ? "bg-primary border-primary" : step.done ? "bg-success border-success" : "bg-white border-neutral-300"
                                    }`}>
                                    {(step.done || step.active) && <span className="text-white text-[8px] font-bold">✓</span>}
                                </div>
                                <div className={`flex-1 pb-1 ${step.done || step.active ? "" : "opacity-40"}`}>
                                    <div className="flex items-center justify-between mb-0.5">
                                        <p className={`text-xs font-semibold font-sans ${step.active ? "text-primary" : "text-neutral-700"}`}>{step.label}</p>
                                        <p className="text-[10px] text-neutral-400 font-mono">{step.time}</p>
                                    </div>
                                    <p className="text-[10px] text-neutral-500 font-sans">{step.desc}</p>
                                    {step.active && (
                                        <div className="mt-2 bg-primary/5 border border-primary/20 rounded-lg px-3 py-2">
                                            <p className="text-[10px] text-primary font-sans">Ambulancia AMB-07 y Policía PAT-12 asignadas</p>
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <MobileBottomNav active="reportList" navigate={navigate} />
        </div>
    );
};

export default MobileTracking;