import React, { useState } from "react";
import { User, Gear, SignOut } from "@phosphor-icons/react";
import { useAppContext } from "../../context/AppContext";

interface TopbarProps {
  onNavigate: (path: string) => void;
}

const Topbar: React.FC<TopbarProps> = ({ onNavigate }) => {
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const { currentUser, switchRole, logout } = useAppContext();
  const activeRole = currentUser?.role || "L1";

  const roleLabels: Record<string, string> = {
    L1: "Operador L1",
    L2: "Operador L2",
    Admin: "Administrador",
  };

  const handleLogout = () => {
    logout?.();
    onNavigate("/login");
  };

  return (
    <header className="bg-background border-b border-border sticky top-0 z-40">
      <div className="px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">🚨</span>
          </div>
          <h1 className="text-lg font-sans font-bold text-foreground">
            Gestion Emergencias
          </h1>
        </div>

        <div className="relative">
          <button
            onClick={() => setUserMenuOpen(!userMenuOpen)}
            className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-neutral-100 transition-colors duration-150 cursor-pointer"
          >
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
              <span className="text-white text-sm font-bold">
                {currentUser?.name?.charAt(0) || "U"}
              </span>
            </div>
            <span className="text-sm font-sans text-foreground">
              {currentUser?.name}
            </span>
          </button>

          {userMenuOpen && (
            <div className="absolute right-0 mt-2 w-56 bg-card border border-border rounded-lg shadow-lg overflow-hidden z-50">
              <div className="p-3 border-b border-border">
                <p className="text-sm font-medium text-foreground font-sans">
                  {currentUser?.name}
                </p>
                <p className="text-xs text-muted-foreground font-sans">
                  {currentUser?.email}
                </p>
              </div>
              <div className="p-2">
                <p className="text-xs text-muted-foreground font-sans px-2 py-1 uppercase tracking-wide">
                  Switch Role
                </p>
                {(["L1", "L2", "Admin"] as const).map((role) => (
                  <button
                    key={role}
                    onClick={() => {
                      switchRole?.(role);
                      setUserMenuOpen(false);
                    }}
                    className={`w-full text-left px-3 py-2 text-sm rounded-md font-sans transition-colors duration-150 cursor-pointer ${
                      activeRole === role
                        ? "bg-primary text-primary-foreground"
                        : "text-foreground hover:bg-neutral-100"
                    }`}
                  >
                    {roleLabels[role]}
                  </button>
                ))}
              </div>
              <div className="p-2 border-t border-border">
                <button
                  onClick={() => {
                    onNavigate("/profile");
                    setUserMenuOpen(false);
                  }}
                  className="w-full flex items-center gap-2 px-3 py-2 text-sm text-foreground hover:bg-neutral-100 rounded-md font-sans transition-colors duration-150 cursor-pointer"
                >
                  <User size={16} weight="regular" className="text-foreground" />
                  Profile
                </button>
                <button
                  onClick={() => {
                    onNavigate("/settings");
                    setUserMenuOpen(false);
                  }}
                  className="w-full flex items-center gap-2 px-3 py-2 text-sm text-foreground hover:bg-neutral-100 rounded-md font-sans transition-colors duration-150 cursor-pointer"
                >
                  <Gear size={16} weight="regular" className="text-foreground" />
                  Settings
                </button>
                <button
                  onClick={() => {
                    handleLogout();
                    setUserMenuOpen(false);
                  }}
                  className="w-full flex items-center gap-2 px-3 py-2 text-sm text-error hover:bg-neutral-100 rounded-md font-sans transition-colors duration-150 cursor-pointer"
                >
                  <SignOut size={16} weight="regular" className="text-error" />
                  Sign Out
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Topbar;