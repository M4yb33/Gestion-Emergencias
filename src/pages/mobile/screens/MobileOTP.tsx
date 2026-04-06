import React, { useState, useRef, useEffect } from "react";
import { CheckCircle } from "@phosphor-icons/react";
import { ScreenProps, MobileHeader, MobilePrimaryBtn } from "../MobileShared";

const MobileOTP: React.FC<ScreenProps> = ({ navigate }) => {
  const [code, setCode] = useState(["", "", "", "", "", ""]);
  const [countdown, setCountdown] = useState(0);
  const inputs = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [countdown]);

  const handleChange = (index: number, value: string) => {
    if (!/^\\d?$/.test(value)) return;
    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);
    if (value && index < 5) inputs.current[index + 1]?.focus();
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === "Backspace" && !code[index] && index > 0) {
      inputs.current[index - 1]?.focus();
    }
  };

  const filled = code.every((c) => c !== "");

  return (
    <div className="flex flex-col min-h-[700px]">
      <MobileHeader title="Verificar telÃ©fono" onBack={() => navigate("register")} />
      <div className="flex-1 px-5 pb-8">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <span className="text-3xl">ðŸ“±</span>
          </div>
          <p className="text-sm text-neutral-600 font-sans leading-relaxed">
            Enviamos un cÃ³digo de 6 dÃ­gitos al nÃºmero <span className="font-semibold text-neutral-900">+57 300 *** 0000</span>
          </p>
        </div>

        <div className="flex gap-2 justify-center mb-6">
          {code.map((digit, i) => (
            <input
              key={i}
              ref={(el) => {
                inputs.current[i] = el;
              }}
              type="text"
              inputMode="numeric"
              maxLength={1}
              value={digit}
              onChange={(e) => handleChange(i, e.target.value)}
              onKeyDown={(e) => handleKeyDown(i, e)}
              className={`w-11 h-13 text-center text-xl font-bold border-2 rounded-xl font-sans transition-colors focus:outline-none ${
                digit ? "border-primary bg-primary/5 text-primary" : "border-neutral-200 bg-neutral-50 text-neutral-900"
              } focus:border-primary`}
            />
          ))}
        </div>

        {filled && (
          <div className="flex items-center gap-2 justify-center mb-4 text-success">
            <CheckCircle size={16} weight="fill" />
            <span className="text-xs font-sans font-medium">CÃ³digo listo para verificar</span>
          </div>
        )}

        <MobilePrimaryBtn label="Verificar cÃ³digo" onClick={() => navigate("dashboard")} disabled={!filled} />

        <div className="mt-6 text-center">
          {countdown > 0 ? (
            <p className="text-xs text-neutral-500 font-sans">
              Reenviar cÃ³digo en <span className="font-medium text-neutral-700">0:{countdown.toString().padStart(2, "0")}</span>
            </p>
          ) : (
            <button onClick={() => setCountdown(59)} className="text-xs text-primary font-medium font-sans cursor-pointer hover:underline">
              Reenviar cÃ³digo
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default MobileOTP;

