import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";
import KPICard from "../shared/KPICard";
import { l2KPIs, mockResources, categoryData } from "../../data/mockData";
import { Truck, ArrowRight, Clock } from "@phosphor-icons/react";

interface L2DashboardProps {
  onNavigate: (path: string) => void;
}

const CHART_COLORS = [
  "hsl(220, 90%, 56%)",
  "hsl(142, 71%, 45%)",
  "hsl(39, 100%, 50%)",
  "hsl(0, 100%, 50%)",
];

const resourceStatusColors: Record<string, string> = {
  available: "bg-success/10 text-success",
  busy: "bg-warning/10 text-warning",
  offline: "bg-error/10 text-error",
};

const L2Dashboard: React.FC<L2DashboardProps> = ({ onNavigate }) => {
  return (
    <div className="p-8 space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-sans font-medium text-foreground">
            Response Dashboard
          </h1>
          <p className="text-sm text-muted-foreground font-sans mt-1">
            Operator L2 — Resource coordination and response
          </p>
        </div>
        <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground bg-card border border-border px-3 py-2 rounded-lg">
          <Clock size={14} weight="regular" className="text-muted-foreground" />
          <span className="text-muted-foreground">Last updated: 10:45 AM</span>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        {l2KPIs.map((kpi) => (
          <KPICard key={kpi.label} data={kpi} />
        ))}
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        <div className="xl:col-span-2 bg-card border border-border rounded-lg p-6">
          <h2 className="text-base font-sans font-medium text-foreground mb-4">
            Resource Availability by Category
          </h2>
          <ResponsiveContainer width="100%" height={280}>
            <BarChart
              data={categoryData}
              margin={{ top: 10, right: 30, left: 0, bottom: 40 }}
            >
              <XAxis
                dataKey="name"
                tick={{
                  fontSize: 11,
                  fill: "hsl(0, 0%, 45%)",
                  fontFamily: "IBM Plex Mono",
                }}
                axisLine={false}
                tickLine={false}
              />
              <YAxis
                tick={{
                  fontSize: 10,
                  fill: "hsl(0, 0%, 45%)",
                  fontFamily: "IBM Plex Mono",
                }}
                axisLine={false}
                tickLine={false}
              />
              <Tooltip
                contentStyle={{
                  background: "hsl(0, 0%, 100%)",
                  border: "1px solid hsl(0, 0%, 90%)",
                  borderRadius: "8px",
                  fontSize: "12px",
                  fontFamily: "DM Sans",
                }}
                labelStyle={{
                  color: "hsl(220, 15%, 20%)",
                  fontWeight: 500,
                }}
              />
              <Bar dataKey="value" radius={[4, 4, 0, 0]}>
                {categoryData.map((cat, index) => (
                  <Cell
                    key={cat.name}
                    fill={CHART_COLORS[index % CHART_COLORS.length]}
                  />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-card border border-border rounded-lg p-6 space-y-4">
          <h2 className="text-base font-sans font-medium text-foreground">
            Resource Status
          </h2>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground font-sans">
                Available
              </span>
              <span className="text-lg font-semibold text-success">
                {mockResources.filter((r) => r.status === "available").length}
              </span>
            </div>
            <div className="w-full bg-border rounded-full h-2">
              <div
                className="bg-success rounded-full h-2"
                style={{
                  width: `${((mockResources.filter((r) => r.status === "available").length / mockResources.length) * 100).toFixed(0)}%`,
                }}
              />
            </div>
            <div className="flex items-center justify-between pt-2">
              <span className="text-sm text-muted-foreground font-sans">
                In Use
              </span>
              <span className="text-lg font-semibold text-warning">
                {mockResources.filter((r) => r.status === "busy").length}
              </span>
            </div>
            <div className="w-full bg-border rounded-full h-2">
              <div
                className="bg-warning rounded-full h-2"
                style={{
                  width: `${((mockResources.filter((r) => r.status === "busy").length / mockResources.length) * 100).toFixed(0)}%`,
                }}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-card border border-border rounded-lg p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-base font-sans font-medium text-foreground">
            Resources
          </h2>
          <button
            onClick={() => onNavigate("/resources")}
            className="flex items-center gap-2 text-xs font-sans text-info hover:text-blue-600 transition-colors cursor-pointer"
          >
            View all <ArrowRight size={14} />
          </button>
        </div>
        <div className="space-y-3 max-h-64 overflow-y-auto">
          {mockResources.slice(0, 6).map((res) => (
            <div
              key={res.id}
              className="flex items-center justify-between p-3 bg-neutral-50 rounded border border-border hover:bg-neutral-100 transition-colors cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <Truck
                  size={16}
                  weight="regular"
                  className="text-muted-foreground"
                />
                <div>
                  <p className="text-sm font-medium text-foreground font-sans">
                    {res.name}
                  </p>
                  <p className="text-xs text-muted-foreground font-sans">
                    {res.type}
                  </p>
                </div>
              </div>
              <span
                className={`text-xs px-2 py-1 rounded font-sans ${resourceStatusColors[res.status] || "bg-muted/10 text-muted-foreground"}`}
              >
                {res.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default L2Dashboard;