import React, { useState } from "react";
import { Camera, VideoCamera, Microphone, Upload, X, Image, File } from "@phosphor-icons/react";
import { ScreenProps, MobileHeader, MobilePrimaryBtn } from "../MobileShared";

const MobileEvidence: React.FC<ScreenProps> = ({ navigate }) => {
  const [files, setFiles] = useState([
    { name: "foto_incidente.jpg", type: "image", size: "2.1 MB" },
    { name: "audio_desc.m4a", type: "audio", size: "0.8 MB" },
  ]);

  const removeFile = (i: number) => setFiles((f) => f.filter((_, idx) => idx !== i));

  return (
    <div className="flex flex-col min-h-[700px]">
      <MobileHeader title="Adjuntar evidencia" subtitle="Paso 3 de 4" onBack={() => navigate("location")} />
      <div className="flex-1 px-5 pb-6">
        <div className="flex gap-1 mb-5">
          {[1,2,3,4].map((s) => (
            <div key={s} className={`flex-1 h-1 rounded-full ${s <= 3 ? "bg-primary" : "bg-neutral-200"}`} />
          ))}
        </div>

        <p className="text-sm font-semibold text-neutral-800 font-sans mb-1">Adjunta evidencia del incidente</p>
        <p className="text-xs text-neutral-500 font-sans mb-4">Opcional pero muy útil para la validación</p>

        <div className="grid grid-cols-2 gap-3 mb-5">
          {[
            { icon: <Camera size={22} weight="regular" />, label: "Tomar foto", color: "bg-blue-50 border-blue-200 text-blue-700" },
            { icon: <VideoCamera size={22} weight="regular" />, label: "Grabar video", color: "bg-purple-50 border-purple-200 text-purple-700" },
            { icon: <Microphone size={22} weight="regular" />, label: "Grabar audio", color: "bg-orange-50 border-orange-200 text-orange-700" },
            { icon: <Upload size={22} weight="regular" />, label: "Subir archivo", color: "bg-neutral-100 border-neutral-300 text-neutral-700" },
          ].map((btn) => (
            <button
              key={btn.label}
              className={`border-2 rounded-2xl p-4 flex flex-col items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity ${btn.color}`}
            >
              {btn.icon}
              <span className="text-xs font-medium font-sans">{btn.label}</span>
            </button>
          ))}
        </div>

        {files.length > 0 && (
          <div className="mb-5">
            <div className="flex items-center justify-between mb-2">
              <p className="text-xs font-semibold text-neutral-700 font-sans">Archivos adjuntos</p>
              <span className="bg-primary text-white text-[10px] font-bold rounded-full w-5 h-5 flex items-center justify-center">{files.length}</span>
            </div>
            <div className="space-y-2">
              {files.map((f, i) => (
                <div key={i} className="bg-neutral-50 border border-neutral-200 rounded-xl p-3 flex items-center gap-3">
                  <div className="w-8 h-8 bg-neutral-200 rounded-lg flex items-center justify-center flex-shrink-0">
                    {f.type === "image" ? <Image size={16} className="text-neutral-500" /> : <File size={16} className="text-neutral-500" />}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-medium text-neutral-800 font-sans truncate">{f.name}</p>
                    <p className="text-[10px] text-neutral-400 font-sans">{f.size}</p>
                  </div>
                  <button onClick={() => removeFile(i)} className="w-6 h-6 rounded-full bg-neutral-200 flex items-center justify-center cursor-pointer hover:bg-red-100">
                    <X size={12} className="text-neutral-500" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="space-y-3">
          <MobilePrimaryBtn label="Siguiente → Revisar reporte" onClick={() => navigate("reviewReport")} />
          <MobilePrimaryBtn label="Omitir este paso" variant="ghost" onClick={() => navigate("reviewReport")} />
        </div>
      </div>
    </div>
  );
};

export default MobileEvidence;