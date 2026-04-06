import React, { useState } from "react";
import { ScreenProps, MobileHeader, MobileInput, MobilePrimaryBtn } from "../MobileShared";
import { CheckCircle } from "@phosphor-icons/react";

const MobileForgotPassword: React.FC<ScreenProps> = ({ navigate }) => {
    const [sent, setSent] = useState(false);
    const [value, setValue] = useState("");

    return (
        <div className="flex flex-col min-h-[700px]">
            <MobileHeader title="Recuperar contraseña" onBack={() => navigate("login")} />
            <div className="flex-1 px-5 pb-8">
                {sent ? (
                    <div className="flex flex-col items-center justify-center h-full py-12 text-center px-4">
                        <div className="w-20 h-20 bg-success/10 rounded-full flex items-center justify-center mb-5">
                            <CheckCircle size={40} weight="fill" className="text-success" />
                        </div>
                        <h2 className="text-lg font-semibold text-neutral-900 font-sans mb-2">¡Enviado!</h2>
                        <p className="text-sm text-neutral-500 font-sans mb-6 leading-relaxed">
                            Revisa tu correo o SMS. El enlace expira en 15 minutos.
                        </p>
                        <MobilePrimaryBtn label="Volver al inicio de sesión" onClick={() => navigate("login")} variant="outline" />
                    </div>
                ) : (
                    <>
                        <div className="text-center mb-8 mt-4">
                            <div className="w-16 h-16 bg-warning/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                                <span className="text-3xl">🔐</span>
                            </div>
                            <p className="text-sm text-neutral-600 font-sans leading-relaxed px-4">
                                Te enviaremos un enlace para restablecer tu contraseña.
                            </p>
                        </div>
                        <MobileInput label="Correo o teléfono registrado" placeholder="correo@ejemplo.com" value={value} onChange={setValue} required />
                        <div className="mt-4">
                            <MobilePrimaryBtn label="Enviar enlace de recuperación" onClick={() => setSent(true)} disabled={!value} />
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default MobileForgotPassword;