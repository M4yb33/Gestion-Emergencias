import React from "react";
import { CheckCircle, WhatsappLogo, PencilSimple, SignOut } from "@phosphor-icons/react";
import { ScreenProps, MobileHeader, MobileBottomNav } from "../MobileShared";

const MobileProfile: React.FC<ScreenProps> = ({ navigate }) => {
    return (
        <div className="flex flex-col min-h-[700px]">
            <MobileHeader title="Mi Perfil" hideBack subtitle="Gestiona tu información personal" />
            <div className="flex-1 px-5 pb-4">
                <div className="flex flex-col items-center py-6">
                    <div className="relative mb-3">
                        <div className="w-20 h-20 bg-gradient-to-br from-primary to-[#1a2e5a] rounded-2xl flex items-center justify-center">
                            <span className="text-white text-2xl font-bold font-sans">CR</span>
                        </div>
                        <button
                            onClick={() => navigate("editProfile")}
                            className="absolute -bottom-1 -right-1 w-7 h-7 bg-info rounded-full flex items-center justify-center cursor-pointer border-2 border-white"
                        >
                            <PencilSimple size={12} weight="bold" className="text-white" />
                        </button>
                    </div>
                    <h2 className="text-base font-bold text-neutral-900 font-sans">Carlos Rodríguez</h2>
                    <p className="text-xs text-neutral-500 font-sans">carlos@correo.com</p>
                    <div className="flex items-center gap-1.5 mt-2">
                        <CheckCircle size={13} weight="fill" className="text-success" />
                        <span className="text-xs text-success font-medium font-sans">Verificado</span>
                    </div>
                </div>

                <div className="space-y-3">
                    <div className="bg-neutral-50 rounded-2xl p-4 border border-neutral-100">
                        <h3 className="text-xs font-semibold text-neutral-500 font-sans uppercase tracking-wider mb-3">Información personal</h3>
                        <div className="space-y-2.5">
                            {[
                                { label: "Nombre completo", value: "Carlos Rodríguez" },
                                { label: "Teléfono", value: "+57 300 123 4567" },
                                { label: "Correo electrónico", value: "carlos@correo.com" },
                            ].map((f) => (
                                <div key={f.label}>
                                    <p className="text-[10px] text-neutral-400 font-sans">{f.label}</p>
                                    <p className="text-xs font-medium text-neutral-800 font-sans">{f.value}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <button
                        onClick={() => navigate("whatsapp")}
                        className="w-full bg-green-50 border border-green-200 rounded-2xl p-4 flex items-center gap-3 cursor-pointer hover:bg-green-100 transition-colors"
                    >
                        <WhatsappLogo size={24} weight="fill" className="text-green-600 flex-shrink-0" />
                        <div className="flex-1 text-left">
                            <p className="text-xs font-semibold text-green-800 font-sans">WhatsApp</p>
                            <p className="text-[10px] text-green-600 font-sans">No vinculado — Toca para vincular</p>
                        </div>
                        <span className="text-green-600 text-xs">→</span>
                    </button>

                    <button
                        onClick={() => navigate("editProfile")}
                        className="w-full bg-white border border-neutral-200 rounded-2xl p-4 flex items-center gap-3 cursor-pointer hover:bg-neutral-50 transition-colors"
                    >
                        <PencilSimple size={18} weight="regular" className="text-neutral-500" />
                        <span className="text-sm font-medium text-neutral-700 font-sans">Editar perfil</span>
                    </button>

                    <button
                        onClick={() => navigate("welcome")}
                        className="w-full bg-red-50 border border-red-200 rounded-2xl p-4 flex items-center gap-3 cursor-pointer hover:bg-red-100 transition-colors"
                    >
                        <SignOut size={18} weight="regular" className="text-error" />
                        <span className="text-sm font-medium text-error font-sans">Cerrar sesión</span>
                    </button>
                </div>
            </div>
            <MobileBottomNav active="profile" navigate={navigate} />
        </div>
    );
};

export default MobileProfile;