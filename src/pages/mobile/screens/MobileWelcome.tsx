import React from "react";
import { Shield, Bell, MapPin, CheckCircle } from "@phosphor-icons/react";
import { ScreenProps } from "../MobileShared";
import { MobilePrimaryBtn } from "../MobileShared";

const MobileWelcome: React.FC<ScreenProps> = ({ navigate }) => {
    return (
        <div className="flex flex-col min-h-[700px]">
            <div className="relative bg-gradient-to-br from-[#7b1c2e] via-[#8b2035] to-[#1a2e5a] flex flex-col items-center justify-center px-8 pt-16 pb-10 flex-1">
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute top-8 left-6 w-32 h-32 bg-white/5 rounded-full blur-2xl" />
                    <div className="absolute bottom-12 right-4 w-48 h-48 bg-white/5 rounded-full blur-3xl" />
                </div>
                <div className="relative z-10 flex flex-col items-center text-center">
                    <div className="w-20 h-20 bg-white/15 rounded-3xl flex items-center justify-center mb-4 border border-white/20">
                        <Shield size={40} weight="fill" className="text-white" />
                    </div>
                    <h1 className="text-3xl font-bold text-white font-sans tracking-tight mb-2">SafeAlert</h1>
                    <p className="text-sm text-white/70 font-sans mb-8 max-w-xs leading-relaxed">
                        Reporta emergencias de forma segura y rápida. Tu comunidad te necesita.
                    </p>
                    <div className="space-y-3 w-full text-left mb-2">
                        {[
                            { icon: <Bell size={14} />, text: "Reporta incidentes en segundos" },
                            { icon: <MapPin size={14} />, text: "Ubicación GPS automática" },
                            { icon: <CheckCircle size={14} />, text: "Seguimiento en tiempo real" },
                        ].map((f, i) => (
                            <div key={i} className="flex items-center gap-3">
                                <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center text-white/80 flex-shrink-0">
                                    {f.icon}
                                </div>
                                <span className="text-white/80 text-xs font-sans">{f.text}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="bg-white px-6 pt-6 pb-8 space-y-3">
                <MobilePrimaryBtn label="Iniciar Sesión" onClick={() => navigate("login")} />
                <MobilePrimaryBtn label="Crear Cuenta" onClick={() => navigate("register")} variant="outline" />
                <p className="text-center text-xs text-neutral-400 font-sans mt-2">
                    Al continuar aceptas los{" "}
                    <span className="text-primary underline cursor-pointer">Términos de uso</span> y la{" "}
                    <span className="text-primary underline cursor-pointer">Política de privacidad</span>
                </p>
            </div>
        </div>
    );
};

export default MobileWelcome;