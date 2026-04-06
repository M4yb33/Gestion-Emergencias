import React from "react";
import { useAppContext } from "../context/AppContext";
import L1Dashboard from "../components/dashboards/L1Dashboard";
import L2Dashboard from "../components/dashboards/L2Dashboard";
import AdminDashboard from "../components/dashboards/AdminDashboard";

interface DashboardPageProps {
    onNavigate: (path: string) => void;
}

const DashboardPage: React.FC<DashboardPageProps> = ({ onNavigate }) => {
    const { activeRole } = useAppContext();

    if (activeRole === "L1") return <L1Dashboard onNavigate={onNavigate} />;
    if (activeRole === "L2") return <L2Dashboard onNavigate={onNavigate} />;
    return <AdminDashboard onNavigate={onNavigate} />;
};

export default DashboardPage;