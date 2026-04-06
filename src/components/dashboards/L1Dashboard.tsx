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
import {
  l1KPIs,
  mockTickets,
  incidentTrendData,
} from "../../data/mockData";
import { ArrowRight, Clock } from "@phosphor-icons/react";

interface L1DashboardProps {
  onNavigate: (path: string) => void;
}

const L1Dashboard: React.FC<L1DashboardProps> = ({ onNavigate }) => {
  const pendingTickets = mockTickets.filter(
    (t) => t.status === "Received" || t.status === "Validating"
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
        {l1KPIs.map((kpi) => (
          <KPICard key={kpi.label} data={kpi} />
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
                    offset="95%"
                    stopColor="hsl(350, 80%, 35%)"
                    stopOpacity={0}
                  />
                </linearGradient>
              </defs>
              <XAxis
                dataKey="hour"
                stroke="hsl(0, 0%, 60%)"
                style={{ fontSize: "12px" }}
              />
              <YAxis
                stroke="hsl(0, 0%, 60%)"
                style={{ fontSize: "12px" }}
                width={35}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: "hsl(0, 0%, 15%)",
                  border: "1px solid hsl(0, 0%, 30%)",
                  borderRadius: "6px",
                }}
                labelStyle={{ color: "hsl(0, 0%, 95%)" }}
              />
              <Area
                type="monotone"
                dataKey="received"
                stroke="hsl(350, 80%, 35%)"
                fill="url(#gradReceived)"
                strokeWidth={2}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-card border border-border rounded-lg p-6 space-y-4">
          <h2 className="text-base font-sans font-medium text-foreground">
            Status Distribution
          </h2>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground font-sans">
                Pending
              </span>
              <span className="text-lg font-semibold text-error">
                {pendingTickets.length}
              </span>
            </div>
            <div className="w-full bg-border rounded-full h-2">
              <div
                className="bg-error rounded-full h-2"
                style={{
                  width: `${((pendingTickets.length / mockTickets.length) * 100).toFixed(0)}%`,
                }}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-card border border-border rounded-lg p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-base font-sans font-medium text-foreground">
            Pending Tickets
          </h2>
          <button
            onClick={() => onNavigate("/tickets")}
            className="flex items-center gap-2 text-xs font-sans text-info hover:text-blue-600 transition-colors cursor-pointer"
          >
            View all <ArrowRight size={14} />
          </button>
        </div>
        <div className="space-y-3 max-h-64 overflow-y-auto">
          {pendingTickets.slice(0, 5).map((ticket) => (
            <div
              key={ticket.id}
              className="flex items-center justify-between p-3 bg-neutral-50 rounded border border-border hover:bg-neutral-100 transition-colors cursor-pointer"
            >
              <div className="flex-1">
                <p className="text-sm font-medium text-foreground font-sans">
                  {ticket.id}
                </p>
                <p className="text-xs text-muted-foreground font-sans mt-1">
                  {ticket.description}
                </p>
              </div>
              <div className="flex items-center gap-2 ml-4">
                <PriorityBadge priority={ticket.priority} />
                <StatusBadge status={ticket.status} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default L1Dashboard;