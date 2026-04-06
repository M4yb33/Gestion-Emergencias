import React, { useState } from "react";
import { Shield } from "@phosphor-icons/react";
import { ScreenProps, MobileInput, MobilePrimaryBtn } from "../MobileShared";

const MobileLogin: React.FC<ScreenProps> = ({ navigate }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <div className="flex flex-col min-h-[700px]">
            <div className="bg-gradient-to-br from-[#7b1c2e] to-[#1a2e5a] px-8 pt-12 pb-8 flex flex-col items-center">
                <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center mb-3">
                    <Shield size={28} weight="fill" className="text-white" />
                </div>
                <h1 className="text-xl font-bold text-white font-sans">SafeAlert</h1>
                <p className="text-xs text-white/60 font-sans mt-1">Sistema de reportes ciudadanos</p>
            </div>
            <div className="flex-1 bg-white px-5 pt-8 pb-8 space-y-4">
                <div>
                    <h2 className="text-lg font-semibold text-neutral-900 font-sans mb-1">Iniciar sesión</h2>
                    <p className="text-xs text-neutral-500 font-sans">Ingresa con tu correo o teléfono</p>
                </div>
                <MobileInput label="Correo o teléfono" placeholder="correo@ejemplo.com" value={email} onChange={setEmail} required />
                <MobileInput label="Contraseña" type="password" placeholder="••••••••" value={password} onChange={setPassword} required />
                <div className="text-right">
                    <span
                        className="text-xs text-primary font-medium cursor-pointer hover:underline font-sans"
                        onClick={() => navigate("forgot")}
                    >
                        ¿Olvidaste tu contraseña?
                    </span>
                </div>
                <MobilePrimaryBtn label="Iniciar sesión" onClick={() => navigate("dashboard")} />
                <p className="text-center text-xs text-neutral-500 font-sans">
                    ¿Sin cuenta aún?{" "}
                    <span className="text-primary font-medium cursor-pointer" onClick={() => navigate("register")}>
                        Regístrate aquí
                    </span>
                </p>
            </div>
        </div>
    );
};

export default MobileLogin;