import React from "react";
        )}
<button
    onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
    className={`text-neutral-300 hover:text-neutral-50 hover:bg-tertiary-hover p-1.5 rounded-md transition-colors duration-150 cursor-pointer ${sidebarCollapsed ? "mx-auto" : ""}`}
    aria-label={sidebarCollapsed ? "Expand sidebar" : "Collapse sidebar"}
>
    {sidebarCollapsed ? (
        <List size={18} weight="regular" />
    ) : (
        <X size={18} weight="regular" />
    )}
</button>
      </div >

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

<nav
    className="flex-1 py-4 overflow-y-auto"
    aria-label="Sidebar navigation"
>
    <ul className="space-y-1 px-2" role="list">
        {filteredItems.map((item) => {
            const isActive =
                currentPath === item.path ||
                currentPath.startsWith(item.path + "/");
            return (
                <li key={item.path}>
                    <button
                        onClick={() => onNavigate(item.path)}
                        className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-sans transition-colors duration-150 cursor-pointer ${isActive
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

{
    !sidebarCollapsed && (
        <div className="p-4 border-t border-tertiary-hover">
            <p className="text-xs text-neutral-500 font-mono">
                v2.4.1 — SafeAlert
            </p>
        </div>
    )
}
    </aside >
  );
};

export default Sidebar;