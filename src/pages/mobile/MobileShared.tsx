import React from "react";
import { ArrowLeft } from "@phosphor-icons/react";

export type MobileScreen =
  | "login"
  | "register"
  | "otp"
  | "dashboard"
  | "landing"
  | "createReport"
  | "reportList"
  | "reportDetail"
  | "reviewReport"
  | "reportConfirm"
  | "profile"
  | "editProfile"
  | "trust"
  | "incentives"
  | "incentivesHistory"
  | "tracking"
  | "location"
  | "evidence"
  | "whatsapp"
  | "whatsappChat"
  | "forgot"
  | "forgotPassword"
  | "welcome";

export interface ReportData {
  type?: string;
  risk?: string;
  desc?: string;
  location?: string;
  evidence?: string[];
}

export interface ScreenProps {
  navigate: (screen: MobileScreen, data?: ReportData) => void;
  reportData?: ReportData;
}

export const MobileHeader: React.FC<{
  title: string;
  subtitle?: string;
  onBack?: () => void;
  hideBack?: boolean;
}> = ({ title, subtitle, onBack, hideBack }) => {
  return (
    <div className="bg-primary text-white px-4 py-4 flex items-center gap-3 sticky top-0 z-10">
      {!hideBack && (
        <button
          onClick={onBack}
          className="text-white hover:opacity-80 transition-opacity cursor-pointer"
          aria-label="Go back"
        >
          <ArrowLeft size={20} weight="bold" />
        </button>
      )}
      <div className="flex-1 min-w-0">
        <h1 className="text-lg font-sans font-bold leading-tight">{title}</h1>
        {subtitle && <p className="text-xs text-white/85 font-sans mt-0.5">{subtitle}</p>}
      </div>
    </div>
  );
};

export const MobilePrimaryBtn: React.FC<{
  label: string;
  onClick?: () => void;
  type?: "button" | "submit";
  loading?: boolean;
  disabled?: boolean;
  variant?: "primary" | "outline" | "ghost" | "danger";
  fullWidth?: boolean;
  icon?: React.ReactNode;
}> = ({
  label,
  onClick,
  type = "button",
  loading,
  disabled,
  variant = "primary",
  fullWidth = true,
  icon,
}) => {
  const base =
    "flex items-center justify-center gap-2 font-sans font-medium text-sm rounded-xl px-5 py-3.5 transition-colors cursor-pointer disabled:opacity-50";
  const variants: Record<string, string> = {
    primary: "bg-primary text-white hover:bg-primary-hover",
    outline: "bg-white border-2 border-primary text-primary hover:bg-red-50",
    ghost: "bg-neutral-100 text-neutral-700 hover:bg-neutral-200",
    danger: "bg-error text-white hover:bg-red-700",
  };
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={`${base} ${variants[variant]} ${fullWidth ? "w-full" : ""}`}
    >
      {icon && <span>{icon}</span>}
      {loading ? "Procesando..." : label}
    </button>
  );
};

export const MobileInput: React.FC<{
  label: string;
  value: string;
  onChange: (value: string) => void;
  type?: string;
  placeholder?: string;
  required?: boolean;
}> = ({ label, value, onChange, type = "text", placeholder, required }) => {
  return (
    <label className="block">
      <span className="block text-xs font-medium text-neutral-700 font-sans mb-1.5">
        {label}
        {required && <span className="text-error"> *</span>}
      </span>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full px-3.5 py-3 border border-neutral-200 rounded-xl text-sm text-neutral-900 bg-neutral-50 placeholder-neutral-400 font-sans focus:outline-none focus:ring-2 focus:ring-primary"
      />
    </label>
  );
};

export const MobileStatusBadge: React.FC<{
  status: string;
  size?: "sm" | "md";
}> = ({ status, size = "sm" }) => {
  const map: Record<string, string> = {
    Recibido: "bg-blue-100 text-blue-700",
    "En revisión": "bg-yellow-100 text-yellow-700",
    Despachado: "bg-orange-100 text-orange-700",
    Cerrado: "bg-green-100 text-green-700",
    Rechazado: "bg-red-100 text-red-700",
  };
  const px = size === "md" ? "px-3 py-1 text-xs" : "px-2 py-0.5 text-xs";
  return (
    <span
      className={`inline-flex items-center font-medium rounded-full font-sans ${px} ${
        map[status] || "bg-neutral-100 text-neutral-600"
      }`}
    >
      {status}
    </span>
  );
};

export const MobileBottomNav: React.FC<{
  active: string;
  navigate: (screen: MobileScreen) => void;
}> = ({ active, navigate }) => {
  const items = [
    { label: "Inicio", screen: "dashboard" as MobileScreen, emoji: "🏠" },
    { label: "Reportar", screen: "createReport" as MobileScreen, emoji: "📝" },
    {
      label: "Mis Reportes",
      screen: "reportList" as MobileScreen,
      emoji: "📋",
    },
    { label: "Créditos", screen: "trust" as MobileScreen, emoji: "⭐" },
    { label: "Perfil", screen: "profile" as MobileScreen, emoji: "👤" },
  ];
  return (
    <div className="border-t border-neutral-100 bg-white px-2 py-2">
      <div className="flex items-center justify-around">
        {items.map((item) => (
          <button
            key={item.screen}
            onClick={() => navigate(item.screen)}
            className={`flex flex-col items-center gap-1 px-2 py-1 rounded-lg transition-colors cursor-pointer ${
              active === item.screen
                ? "text-primary"
                : "text-neutral-400 hover:text-neutral-600"
            }`}
          >
            <span className="text-lg leading-none">{item.emoji}</span>
            <span
              className={`text-[10px] font-sans font-medium leading-none ${
                active === item.screen ? "text-primary" : "text-neutral-400"
              }`}
            >
              {item.label}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};
