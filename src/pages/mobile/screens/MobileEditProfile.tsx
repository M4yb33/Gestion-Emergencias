import React, { useState } from "react";
import { ScreenProps, MobileHeader, MobileInput, MobilePrimaryBtn } from "../MobileShared";

const MobileEditProfile: React.FC<ScreenProps> = ({ navigate }) => {
  const [form, setForm] = useState({ nombres: "Carlos", apellidos: "Rodríguez", telefono: "+57 300 123 4567", correo: "carlos@correo.com" });
  const set = (k: string) => (v: string) => setForm((p) => ({ ...p, [k]: v }));

  return (
    <div className="flex flex-col min-h-[700px]">
      <MobileHeader title="Editar perfil" onBack={() => navigate("profile")} />
      <div className="flex-1 px-5 pb-8 space-y-4">
        <div className="flex justify-center py-4">
          <div className="relative">
            <div className="w-20 h-20 bg-gradient-to-br from-primary to-[#1a2e5a] rounded-2xl flex items-center justify-center">
              <span className="text-white text-2xl font-bold font-sans">CR</span>
            </div>
            <button className="absolute -bottom-1 -right-1 w-7 h-7 bg-info rounded-full flex items-center justify-center cursor-pointer border-2 border-white">
              <span className="text-white text-[10px]">✎</span>
            </button>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <MobileInput label="Nombres" value={form.nombres} onChange={set("nombres")} />
          <MobileInput label="Apellidos" value={form.apellidos} onChange={set("apellidos")} />
        </div>
        <MobileInput label="Teléfono" type="tel" value={form.telefono} onChange={set("telefono")} />
        <MobileInput label="Correo electrónico" type="email" value={form.correo} onChange={set("correo")} />
        <div className="pt-2 space-y-3">
          <MobilePrimaryBtn label="Guardar cambios" onClick={() => navigate("profile")} />
          <MobilePrimaryBtn label="Cancelar" variant="ghost" onClick={() => navigate("profile")} />
        </div>
      </div>
    </div>
  );
};

export default MobileEditProfile;