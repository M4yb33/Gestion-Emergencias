import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import KPICard from "../shared/KPICard";
import StatusBadge from "../shared/StatusBadge";
import PriorityBadge from "../shared/PriorityBadge";
import { l1KPIs, mockTickets, incidentTrendData } from "../../data/mockData";
import { ArrowRight, Clock } from "@phosphor-icons/react";

interface L1DashboardProps {
  onNavigate: (path: string) => void;
}

const L1Dashboard: React.FC<L1DashboardProps> = ({ onNavigate }) => {
  const pendingTickets = mockTickets.filter(
    (t) => t.status === "Received" || t.status === "Validating",
  );

  return (
    <div className="p-8 space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-sans font-medium text-foreground">
            Triage Dashboard
          </h1>
          <p className="text-sm text-muted-foreground font-sans mt-1">
            Operator L1 — Ticket validation and triage
          </p>
        </div>
        <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground bg-card border border-border px-3 py-2 rounded-lg">
          <Clock size={14} weight="regular" className="text-muted-foreground" />
          <span className="text-muted-foreground">Last updated: 10:45 AM</span>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        {l1KPIs.map((kpi, i) => (
          <KPICard key={i} data={kpi} />
        ))}
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        <div className="xl:col-span-2 bg-card border border-border rounded-lg p-6">
          <h2 className="text-base font-sans font-medium text-foreground mb-4">
            Ticket Volume (Today)
          </h2>
          <ResponsiveContainer width="100%" height={220}>
            <AreaChart
              data={incidentTrendData}
              margin={{ top: 5, right: 10, left: -20, bottom: 0 }}
            >
              <defs>
                <linearGradient id="gradReceived" x1="0" y1="0" x2="0" y2="1">
                  <stop
                    offset="5%"
                    stopColor="hsl(350, 80%, 35%)"
                    stopOpacity={0.3}
                  />
                  <stop
export default L1Dashboard;