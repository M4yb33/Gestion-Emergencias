import React from "react";
import { WhatsappLogo, QrCode, CheckCircle } from "@phosphor-icons/react";
import { ScreenProps, MobileHeader, MobilePrimaryBtn } from "../MobileShared";

const MobileWhatsApp: React.FC<ScreenProps> = ({ navigate }) => {
    const linked = false;
    return (
        <div className="flex flex-col min-h-[700px]">
            <MobileHeader title="Vincular WhatsApp" onBack={() => navigate("profile")} />
            <div className="flex-1 px-5 pb-8">
                <div className="bg-green-50 border border-green-200 rounded-2xl p-5 mb-6">
                    <div className="flex items-center gap-3 mb-3">
                        <WhatsappLogo size={28} weight="fill" className="text-green-600" />
                        <div>
                            <h3 className="text-sm font-semibold text-green-900 font-sans">WhatsApp SafeAlert Bot</h3>
                            <p className="text-[10px] text-green-600 font-sans">Reporta desde tu WhatsApp al instante</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className={`w-2 h-2 rounded-full ${linked ? "bg-success" : "bg-neutral-300"}`} />
                        <span className={`text-xs font-medium font-sans ${linked ? "text-success" : "text-neutral-500"}`}>
                            {linked ? "Cuenta vinculada" : "No vinculada"}
                        </span>
                    </div>
                </div>

                {!linked && (
                    <>
                        <h3 className="text-sm font-semibold text-neutral-900 font-sans mb-4">Cómo vincular tu cuenta</h3>
                        <div className="space-y-3 mb-6">
                            {[
                                { step: "1", text: "Toca el botón &#39;Vincular con WhatsApp&#39;" },
                                { step: "2", text: "Se abrirá WhatsApp con un mensaje pre-llenado" },
                                { step: "3", text: "Envía el mensaje de verificación al bot" },
                                { step: "4", text: "¡Listo! Ya puedes reportar por WhatsApp" },
                            ].map((s) => (
                                <div key={s.step} className="flex items-center gap-3">
                                    <div className="w-7 h-7 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                                        <span className="text-xs font-bold text-green-700 font-sans">{s.step}</span>
                                    </div>
                                    <p className="text-xs text-neutral-600 font-sans" dangerouslySetInnerHTML={{ __html: s.text }} />
                                </div>
                            ))}
                        </div>

                        <div className="bg-neutral-100 rounded-2xl p-4 flex flex-col items-center mb-6">
                            <QrCode size={64} weight="regular" className="text-neutral-400 mb-2" />
                            <p className="text-xs text-neutral-500 font-sans text-center">O escanea este QR desde otro dispositivo</p>
                        </div>

                        <MobilePrimaryBtn
                            label="Vincular con WhatsApp"
                            onClick={() => { }}
                            icon={<WhatsappLogo size={18} weight="fill" />}
                            variant="primary"
                        />
                    </>
                )}

                {linked && (
                    <div className="flex flex-col items-center py-8 text-center">
                        <CheckCircle size={48} weight="fill" className="text-success mb-4" />
                        <h3 className="text-base font-semibold text-neutral-900 font-sans mb-2">¡Cuenta vinculada!</h3>
                        <p className="text-xs text-neutral-500 font-sans mb-6">Puedes reportar emergencias desde tu WhatsApp.</p>
                        <MobilePrimaryBtn label="Ver chatbot" onClick={() => navigate("whatsappChat")} variant="outline" />
                    </div>
                )}
            </div>
        </div>
    );
};

export default MobileWhatsApp;