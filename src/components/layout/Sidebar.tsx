import React from "react";
import { List, X } from "@phosphor-icons/react";

interface SidebarProps {
  currentPath: string;
  onNavigate: (path: string) => void;
  sidebarCollapsed: boolean;
  setSidebarCollapsed: (collapsed: boolean) => void;
  activeRole: "Admin" | "L1" | "L2";
}

const roleLabels: Record<string, string> = {
  Admin: "Administrator",
  L1: "Operator L1",
  L2: "Operator L2",
};

const roleAccentColors: Record<string, string> = {
  Admin: "bg-tertiary",
  L1: "bg-warning",
  L2: "bg-success",
};

const sidebarItems = [
  {
    label: "Dashboard",
    path: "/dashboard",
    icon: "📊",
    roles: ["Admin", "L1", "L2"],
  },
  {
    label: "Tickets",
    path: "/tickets",
    icon: "🎫",
    roles: ["Admin", "L1", "L2"],
  },
  {
    label: "Resources",
    path: "/resources",
    icon: "🚚",
    roles: ["Admin", "L2"],
  },
  {
    label: "Users",
    path: "/users",
    icon: "👥",
    roles: ["Admin"],
  },
  {
    label: "Centers",
    path: "/centers",
    icon: "🏢",
    roles: ["Admin"],
  },
  {
    label: "Analytics",
    path: "/analytics",
    icon: "📈",
    roles: ["Admin", "L2"],
  },
  {
    label: "Audit",
    path: "/audit",
    icon: "📋",
    roles: ["Admin"],
  },
  {
    label: "Permissions",
    path: "/permissions",
    icon: "🔐",
    roles: ["Admin"],
  },
];

const Sidebar: React.FC<SidebarProps> = ({
  currentPath,
  onNavigate,
  sidebarCollapsed,
  setSidebarCollapsed,
  activeRole,
}) => {
  const filteredItems = sidebarItems.filter((item) =>
    item.roles.includes(activeRole)
  );

  return (
    <aside
      className={`bg-neutral-950 border-r border-tertiary-hover transition-all duration-300 flex flex-col ${
        sidebarCollapsed ? "w-16" : "w-64"
      }`}
    >
      <div className="p-4 border-b border-tertiary-hover flex items-center justify-between">
        {!sidebarCollapsed && (
          <h1 className="text-lg font-bold text-primary font-sans">SafeAlert</h1>
        )}
        <button
          onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
          className={`text-neutral-300 hover:text-neutral-50 hover:bg-tertiary-hover p-1.5 rounded-md transition-colors duration-150 cursor-pointer ${
            sidebarCollapsed ? "mx-auto" : ""
          }`}
          aria-label={sidebarCollapsed ? "Expand sidebar" : "Collapse sidebar"}
        >
          {sidebarCollapsed ? (
            <List size={18} weight="regular" />
          ) : (
            <X size={18} weight="regular" />
          )}
        </button>
      </div>

      {!sidebarCollapsed && (
        <div className="px-4 py-3 border-b border-tertiary-hover">
          <div className="flex items-center gap-2">
            <span
              className={`w-2 h-2 rounded-full ${roleAccentColors[activeRole]}`}
            ></span>
            <span className="text-xs text-neutral-300 font-sans">
              {roleLabels[activeRole]}
            </span>
          </div>
        </div>
      )}

      <nav className="flex-1 py-4 overflow-y-auto" aria-label="Sidebar navigation">
        <ul className="space-y-1 px-2" role="list">
          {filteredItems.map((item) => {
            const isActive =
              currentPath === item.path ||
              currentPath.startsWith(item.path + "/");
            return (
              <li key={item.path}>
                <button
                  onClick={() => onNavigate(item.path)}
                  className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-sans transition-colors duration-150 cursor-pointer ${
                    isActive
                      ? "bg-primary text-primary-foreground"
                      : "text-neutral-300 hover:text-neutral-50 hover:bg-tertiary-hover"
                  } ${sidebarCollapsed ? "justify-center" : ""}`}
                  aria-label={sidebarCollapsed ? item.label : undefined}
                  aria-current={isActive ? "page" : undefined}
                  title={sidebarCollapsed ? item.label : undefined}
                >
                  <span className="flex-shrink-0">{item.icon}</span>
                  {!sidebarCollapsed && <span>{item.label}</span>}
                </button>
              </li>
            );
          })}
        </ul>
      </nav>

      {!sidebarCollapsed && (
        <div className="p-4 border-t border-tertiary-hover">
          <p className="text-xs text-neutral-500 font-mono">v2.4.1 — SafeAlert</p>
        </div>
      )}
    </aside>
  );
};

export default Sidebar;