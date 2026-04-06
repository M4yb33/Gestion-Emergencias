import React from "react";
import { QrCode, Clock } from "@phosphor-icons/react";
import { ScreenProps, MobileHeader, MobileBottomNav } from "../MobileShared";

const vouchers = [
    { id: "VCH-001", title: "Café gratis", brand: "Café Amanecer", credits: 50, expires: "30 abr 2025", status: "available", emoji: "☕" },
    { id: "VCH-002", title: "Transporte x2 viajes", brand: "TransMilenio Plus", credits: 120, expires: "15 may 2025", status: "available", emoji: "🚌" },
    { id: "VCH-003", title: "Descuento 10% farmacia", brand: "Farmacia Salud+", credits: 80, expires: "20 abr 2025", status: "used", emoji: "💊" },
];

const MobileIncentives: React.FC<ScreenProps> = ({ navigate }) => {
    return (
        <div className="flex flex-col min-h-[700px]">
            <MobileHeader title="Incentivos y Vouchers" hideBack />
            <div className="flex-1 pb-4 overflow-y-auto">
                <div className="px-5 pt-4 pb-2">
                    <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-4 flex items-center gap-4 mb-5">
                        <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center">
                            <span className="text-2xl">🪙</span>
                        </div>
                        <div>
                            <p className="text-xs text-yellow-700 font-sans">Tus créditos disponibles</p>
                            <p className="text-2xl font-bold text-yellow-800 font-sans">340 pts</p>
                        </div>
                        <button
                            onClick={() => navigate("incentivesHistory")}
                            className="ml-auto text-xs text-yellow-700 font-medium font-sans underline cursor-pointer"
                        >
                            Historial
                        </button>
                    </div>

                    <h3 className="text-sm font-semibold text-neutral-800 font-sans mb-3">Vouchers disponibles</h3>
                    <div className="space-y-3 mb-5">
                        {vouchers.map((v) => (
                            <div
                                key={v.id}
                                className={`rounded-2xl border-2 overflow-hidden ${v.status === "used" ? "opacity-60 border-neutral-200" : "border-yellow-200"}`}
                            >
                                <div className={`px-4 py-3 flex items-center gap-3 ${v.status === "used" ? "bg-neutral-50" : "bg-yellow-50"}`}>
                                    <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-xl border border-neutral-200">
                                        {v.emoji}
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex items-center gap-2">
                                            <p className="text-sm font-semibold text-neutral-900 font-sans">{v.title}</p>
                                            {v.status === "used" && (
                                                <span className="bg-neutral-200 text-neutral-500 text-[10px] px-2 py-0.5 rounded-full font-sans">Usado</span>
                                            )}
                                        </div>
                                        <p className="text-xs text-neutral-500 font-sans">{v.brand}</p>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-sm font-bold text-primary font-sans">{v.credits} pts</p>
                                    </div>
                                </div>
                                {v.status !== "used" && (
                                    <div className="px-4 py-3 bg-white border-t border-yellow-100 flex items-center justify-between">
                                        <div className="flex items-center gap-1 text-neutral-400">
                                            <Clock size={12} weight="regular" />
                                            <span className="text-[10px] font-sans">Vence: {v.expires}</span>
                                        </div>
                                        <button className="bg-primary text-white text-xs font-medium px-3 py-1.5 rounded-lg cursor-pointer hover:bg-primary-hover transition-colors font-sans flex items-center gap-1">
                                            <QrCode size={12} weight="regular" />
                                            Canjear
                                        </button>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <MobileBottomNav active="dashboard" navigate={navigate} />
        </div>
    );
};

export default MobileIncentives;