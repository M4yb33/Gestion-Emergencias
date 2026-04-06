import React, { useState } from "react";
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
              {(["L1", "L2", "Admin"] as UserRole[]).map((role) => (
                <button
                  key={role}
                  onClick={() => switchRole(role)}
                  className={`w-full text-left px-3 py-2 text-sm rounded-md font-sans transition-colors duration-150 cursor-pointer ${activeRole === role ? "bg-primary text-primary-foreground" : "text-foreground hover:bg-neutral-100"}`}
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
                onClick={handleLogout}
                className="w-full flex items-center gap-2 px-3 py-2 text-sm text-error hover:bg-neutral-100 rounded-md font-sans transition-colors duration-150 cursor-pointer"
              >
                <SignOut size={16} weight="regular" className="text-error" />
                Sign Out
              </button>
            </div>
          </div >
        )}
      </div >
    </header >
  );
};

export default Topbar;