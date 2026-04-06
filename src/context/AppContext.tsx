import React, { createContext, useContext, useState, ReactNode, useMemo } from "react";
import { UserRole, User } from "../types";

interface AppContextType {
    currentUser: User | null;
    setCurrentUser: (user: User | null) => void;
    sidebarCollapsed: boolean;
    setSidebarCollapsed: (collapsed: boolean) => void;
    activeRole: UserRole;
    setActiveRole: (role: UserRole) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: ReactNode }> = ({
    children,
}) => {
    const [currentUser, setCurrentUser] = useState<User | null>(null);
    const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
    const [activeRole, setActiveRole] = useState<UserRole>("L1");

    const contextValue = useMemo(
      () => ({
        currentUser,
        setCurrentUser,
        sidebarCollapsed,
        setSidebarCollapsed,
        activeRole,
        setActiveRole,
      }),
      [currentUser, sidebarCollapsed, activeRole]
    );

    return (
        <AppContext.Provider value={contextValue}>
            {children}
        </AppContext.Provider>
    );
};

export const useAppContext = () => {
    const context = useContext(AppContext);
    if (!context)
        throw new Error("useAppContext must be used within AppProvider");
    return context;
};