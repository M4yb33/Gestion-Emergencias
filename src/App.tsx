import React, { useState, useEffect } from "react";
import { useAppContext, AppProvider } from "./context/AppContext";
import DashboardLayout from "./components/layout/DashboardLayout";
import LoginPage from "./pages/LoginPage";
import DashboardPage from "./pages/DashboardPage";
import TicketsPage from "./pages/TicketsPage";
import TicketDetailPage from "./pages/TicketDetailPage";
import IncidentsPage from "./pages/IncidentsPage";
import MapPage from "./pages/MapPage";
import ResourcesPage from "./pages/ResourcesPage";
import UsersPage from "./pages/UsersPage";
import CentersPage from "./pages/CentersPage";
import AuditPage from "./pages/AuditPage";
import PermissionsPage from "./pages/PermissionsPage";
import AnalyticsPage from "./pages/AnalyticsPage";
import MobileApp from "./pages/mobile/MobileApp";

const AppContent: React.FC = () => {
    const { currentUser } = useAppContext();
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isCitizenMode, setIsCitizenMode] = useState(false);
    const [currentPath, setCurrentPath] = useState("/dashboard");

    useEffect(() => {
        if (!currentUser) {
            setIsLoggedIn(false);
        }
    }, [currentUser]);

const handleNavigate = (path: string) => {
    setCurrentPath(path);
    window.scrollTo({ top: 0, behavior: "smooth" });
};

const handleLogin = () => {
    setIsLoggedIn(true);
    setCurrentPath("/dashboard");
};

const handleCitizenMode = () => {
    setIsCitizenMode(true);
};

if (!isLoggedIn && !isCitizenMode) {
    return <LoginPage onLogin={handleLogin} onCitizenMode={handleCitizenMode} />;
}

if (isCitizenMode) {
    return <MobileApp onExitToWeb={() => { setIsCitizenMode(false); }} />;
}

const renderPage = () => {
    if (currentPath === "/dashboard")
        return <DashboardPage onNavigate={handleNavigate} />;
    if (currentPath === "/tickets")
        return <TicketsPage onNavigate={handleNavigate} />;
    if (currentPath.startsWith("/tickets/")) {
        const ticketId = currentPath.replace("/tickets/", "");
        return (
            <TicketDetailPage ticketId={ticketId} onNavigate={handleNavigate} />
        );
    }
    if (currentPath === "/incidents")
        return <IncidentsPage onNavigate={handleNavigate} />;
    if (currentPath === "/map") return <MapPage onNavigate={handleNavigate} />;
    if (currentPath === "/resources") return <ResourcesPage />;
    if (currentPath === "/users") return <UsersPage />;
    if (currentPath === "/centers") return <CentersPage />;
    if (currentPath === "/audit") return <AuditPage />;
    if (currentPath === "/permissions") return <PermissionsPage />;
    if (currentPath === "/analytics") return <AnalyticsPage />;
    return <DashboardPage onNavigate={handleNavigate} />;
};

return (
    <DashboardLayout currentPath={currentPath} onNavigate={handleNavigate}>
        {renderPage()}
    </DashboardLayout>
);
};

const App: React.FC = () => {
    return (
        <AppProvider>
            <AppContent />
        </AppProvider>
    );
};

export default App;