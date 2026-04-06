import React from "react";
import { ScreenProps, MobileHeader } from "../MobileShared";

const history = [
    { id: "VCH-003", title: "Descuento farmacia", brand: "Farmacia Salud+", date: "15 abr 2025", status: "used", credits: 80, emoji: "💊" },
    { id: "VCH-001", title: "Café gratis", brand: "Café Amanecer", date: "10 abr 2025", status: "available", credits: 50, emoji: "☕" },
    { id: "VCH-EXP", title: "Bono transporte", brand: "MioBus", date: "01 mar 2025", status: "expired", credits: 60, emoji: "🚌" },
];

const statusStyle: Record<string, string> = {
    available: "bg-green-100 text-green-700",
    used: "bg-neutral-200 text-neutral-500",
    expired: "bg-red-100 text-red-500",
};
const statusLabel: Record<string, string> = { available: "Disponible", used: "Usado", expired: "Vencido" };

const MobileIncentivesHistory: React.FC<ScreenProps> = ({ navigate }) => {
    return (
        <div className="flex flex-col min-h-[700px]">
            <MobileHeader title="Historial de incentivos" onBack={() => navigate("incentives")} />
            <div className="flex-1 px-5 pb-4 space-y-3">
                {history.map((h) => (
                    <div key={h.id} className="bg-white border border-neutral-200 rounded-2xl p-4 flex items-center gap-3">
                        <div className="w-10 h-10 bg-neutral-100 rounded-xl flex items-center justify-center text-xl flex-shrink-0">{h.emoji}</div>
                        <div className="flex-1">
                            <p className="text-sm font-semibold text-neutral-900 font-sans">{h.title}</p>
                            <p className="text-xs text-neutral-500 font-sans">{h.brand}</p>
                            <p className="text-[10px] text-neutral-400 font-sans">{h.date}</p>
                        </div>
                        <div className="text-right">
                            <p className="text-sm font-bold text-neutral-700 font-sans mb-1">{h.credits} pts</p>
                            <span className={`text-[10px] font-medium px-2 py-0.5 rounded-full font-sans ${statusStyle[h.status]}`}>
                                {statusLabel[h.status]}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MobileIncentivesHistory;