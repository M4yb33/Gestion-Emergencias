import React from "react";
import { TrendUp, TrendDown, Minus } from "@phosphor-icons/react";
import { KPIData } from "../../types";

interface KPICardProps {
  data: KPIData;
}

const colorMap: Record<string, { bg: string; text: string; border: string }> = {
  primary: {
    bg: "bg-primary",
    text: "text-primary-foreground",
    border: "border-primary",
  },
  success: {
    bg: "bg-success",
    text: "text-neutral-50",
    border: "border-success",
  },
  warning: {
    bg: "bg-warning",
    text: "text-neutral-900",
    border: "border-warning",
  },
  error: { bg: "bg-error", text: "text-neutral-50", border: "border-error" },
  info: { bg: "bg-info", text: "text-neutral-50", border: "border-info" },
  tertiary: {
    bg: "bg-tertiary",
    text: "text-tertiary-foreground",
    border: "border-tertiary",
  },
};

const KPICard: React.FC<KPICardProps> = ({ data }) => {
  const colors = colorMap[data.color] || colorMap.info;
  const trendPositive = data.trend > 0;
  const trendNeutral = data.trend === 0;

  return (
    <div className="bg-card border border-border rounded-lg p-6 flex flex-col gap-3">
      <div className="flex items-center justify-between">
        <p className="text-sm text-muted-foreground font-sans font-medium uppercase tracking-wide">
          {data.label}
        </p>
        <span className={`w-2 h-2 rounded-full ${colors.bg}`}></span>
      </div>
      <div className="flex items-end justify-between">
        <span className="text-3xl font-sans font-medium text-foreground">
          {data.value}
        </span>
        <div
          className={`flex items-center gap-1 text-xs font-sans px-2 py-1 rounded-md ${
            trendNeutral
              ? "bg-neutral-200 text-neutral-700"
              : trendPositive
                ? "bg-success text-neutral-50"
                : "bg-error text-neutral-50"
          }`}
        >
          {trendNeutral ? (
            <Minus size={12} weight="regular" />
          ) : trendPositive ? (
            <TrendUp size={12} weight="regular" />
          ) : (
            <TrendDown size={12} weight="regular" />
          )}
          <span>{Math.abs(data.trend)}</span>
        </div>
      </div>
      <p className="text-xs text-muted-foreground font-sans">
        {data.trendLabel}
      </p>
    </div>
  );
};

export default KPICard;