import React, { useState } from "react";
import { ScreenProps, MobileHeader, MobileInput, MobilePrimaryBtn } from "../MobileShared";

const MobileRegister: React.FC<ScreenProps> = ({ navigate }) => {
  const [form, setForm] = useState({ nombres: "", apellidos: "", telefono: "", correo: "", password: "", confirm: "", terms: false });
  const set = (k: string) => (v: string | boolean) => setForm((p) => ({ ...p, [k]: v }));

  return (
    <div className="flex flex-col min-h-[700px]">
      <MobileHeader title="Crear cuenta" subtitle="Regístrate para empezar a reportar" onBack={() => navigate("welcome")} />
      <div className="flex-1 px-5 pb-8 space-y-4 overflow-y-auto">
        <div className="grid grid-cols-2 gap-3">
          <MobileInput label="Nombres" placeholder="Carlos" required value={form.nombres} onChange={set("nombres")} />
          <MobileInput label="Apellidos" placeholder="Rodríguez" required value={form.apellidos} onChange={set("apellidos")} />
        </div>
        <MobileInput label="Teléfono" type="tel" placeholder="+57 300 000 0000" required value={form.telefono} onChange={set("telefono")} />
        <MobileInput label="Correo electrónico" type="email" placeholder="carlos@correo.com" required value={form.correo} onChange={set("correo")} />
        <MobileInput label="Contraseña" type="password" placeholder="Mínimo 8 caracteres" required value={form.password} onChange={set("password")} />
        <MobileInput label="Confirmar contraseña" type="password" placeholder="Repetir contraseña" required value={form.confirm} onChange={set("confirm")} />

        <div className="flex items-start gap-3 p-3 bg-neutral-50 rounded-xl border border-neutral-200">
          <input
            type="checkbox"
            id="terms"
            className="mt-0.5 accent-primary w-4 h-4 cursor-pointer"
            checked={form.terms}
            onChange={(e) => set("terms")(e.target.checked)}
          />
          <label htmlFor="terms" className="text-xs text-neutral-600 font-sans cursor-pointer leading-relaxed">
            Acepto los <span className="text-primary underline">Términos de servicio</span> y la{" "}
            <span className="text-primary underline">Política de privacidad</span> de SafeAlert
          </label>
        </div>

        <div className="pt-2">
          <MobilePrimaryBtn label="Crear cuenta" onClick={() => navigate("otp")} disabled={!form.terms} />
        </div>
        <p className="text-center text-xs text-neutral-500 font-sans">
          ¿Ya tienes cuenta?{" "}
          <span className="text-primary font-medium cursor-pointer" onClick={() => navigate("login")}>
            Inicia sesión
          </span>
        </p>
      </div>
    </div>
  );
};

export default MobileRegister;