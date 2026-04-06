import React, { ReactNode } from "react";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

interface DashboardLayoutProps {
    children: ReactNode;
    currentPath: string;
    onNavigate: (path: string) => void;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({
    children,
    currentPath,
    onNavigate,
}) => {
    return (
        <div className="flex h-screen bg-background overflow-hidden">
            <Sidebar currentPath={currentPath} onNavigate={onNavigate} />
            <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
                <Topbar onNavigate={onNavigate} currentPath={currentPath} />
                <main
                    className="flex-1 overflow-y-auto bg-neutral-100"
                    role="main"
                    id="main-content"
                >
                    {children}
                </main>
            </div>
        </div>
    );
};

export default DashboardLayout;