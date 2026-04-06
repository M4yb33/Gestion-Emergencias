import React, { useState } from "react";
import { Microphone, Image, PaperPlaneTilt } from "@phosphor-icons/react";
import { ScreenProps, MobileHeader } from "../MobileShared";

const MobileWhatsAppChat: React.FC<ScreenProps> = ({ navigate }) => {
  const [scene, setScene] = useState("emergency");

  const botMessages: Record<string, Array<{ from: "user" | "bot"; type: "text" | "audio" | "image"; text: string }>> = {
    emergency: [
      { from: "bot", type: "text", text: "Â¡Hola! ðŸ‘‹ Bienvenido a SafeAlert. Â¿En quÃ© podemos ayudarte?" },
      { from: "user", type: "text", text: "Necesito reportar una emergencia" },
      { from: "bot", type: "text", text: "Entendido. Por favor, describe el tipo de emergencia que estÃ¡s experimentando." },
    ],
    alert: [
      { from: "bot", type: "text", text: "Â¿QuÃ© tipo de alerta deseas enviar?" },
      { from: "user", type: "text", text: "Accidente de trÃ¡nsito" },
      { from: "bot", type: "text", text: "Gracias. Estamos enviando unidades al lugar." },
    ],
    info: [
      { from: "user", type: "text", text: "Â¿CuÃ¡l es el tiempo de respuesta promedio?" },
      { from: "bot", type: "text", text: "El tiempo promedio de respuesta en tu Ã¡rea es de 8-12 minutos." },
    ],
  };

  return (
    <div className="flex flex-col h-screen bg-[#ece5dd]">
      <MobileHeader title="Chat SafeAlert" onBack={() => navigate("dashboard")} />

      <div className="flex gap-1 px-3 py-2 bg-[#075e54]">
        {[{ key: "emergency", label: "Emergencia" }, { key: "alert", label: "Alerta" }, { key: "info", label: "Info" }].map((s) => (
          <button
            key={s.key}
            onClick={() => setScene(s.key)}
            className={`flex-shrink-0 px-3 py-1.5 rounded-full text-[10px] font-medium font-sans cursor-pointer transition-colors ${
              scene === s.key ? "bg-[#075e54] text-white" : "bg-white/60 text-neutral-700 hover:bg-white"
            }`}
          >
            {s.label}
          </button>
        ))}
      </div>

      <div className="flex-1 px-3 py-3 space-y-2 overflow-y-auto">
        {botMessages[scene].map((msg, i) => (
          <div key={i} className={`flex ${msg.from === "user" ? "justify-end" : "justify-start"}`}>
            <div
              className={`max-w-[80%] px-3 py-2 rounded-2xl shadow-sm ${
                msg.from === "user" ? "bg-[#dcf8c6] rounded-tr-sm" : "bg-white rounded-tl-sm"
              }`}
            >
              {msg.type === "audio" && (
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-7 h-7 bg-[#075e54] rounded-full flex items-center justify-center">
                    <Microphone size={14} weight="fill" className="text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex gap-0.5 h-4 items-center">
                      {[3, 5, 8, 4, 6, 9, 5, 7, 4, 6, 8, 5, 4, 6].map((h, j) => (
                        <div key={j} className="w-0.5 bg-neutral-400 rounded-full" style={{ height: `${h}px` }} />
                      ))}
                    </div>
                    <p className="text-[9px] text-neutral-400 font-sans">0:23</p>
                  </div>
                </div>
              )}
              {msg.type === "image" && (
                <div className="w-40 h-28 bg-neutral-300 rounded-xl mb-1 flex items-center justify-center">
                  <Image size={28} weight="regular" className="text-neutral-500" />
                </div>
              )}
              <p className="text-xs font-sans text-neutral-800 whitespace-pre-line leading-relaxed">{msg.text}</p>
              <p className="text-[9px] text-neutral-400 font-sans text-right mt-0.5">{msg.from === "user" ? "10:42 âœ“âœ“" : "10:42"}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-[#f0f0f0] px-3 py-2 flex items-center gap-2">
        <div className="flex-1 bg-white rounded-full px-4 py-2">
          <p className="text-xs text-neutral-400 font-sans">Escribe un mensaje...</p>
        </div>
        <button className="w-9 h-9 bg-[#075e54] rounded-full flex items-center justify-center cursor-pointer">
          <PaperPlaneTilt size={16} weight="fill" className="text-white" />
        </button>
      </div>
    </div>
  );
};

export default MobileWhatsAppChat;

