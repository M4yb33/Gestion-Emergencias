import React from "react";
import { IncidentStatus } from "../../types";

interface StatusBadgeProps {
  status: IncidentStatus;
  size?: "sm" | "md";
}

const statusConfig: Record<
  IncidentStatus,
  { bg: string; text: string; label: string }
> = {
  Received: {
    bg: "bg-neutral-200",
    text: "text-neutral-800",
    label: "Received",
  },
  Validating: { bg: "bg-info", text: "text-neutral-50", label: "Validating" },
  Validated: { bg: "bg-info", text: "text-neutral-50", label: "Validated" },
  Dispatched: {
    bg: "bg-warning",
    text: "text-neutral-900",
    label: "Dispatched",
  },
  Closed: { bg: "bg-success", text: "text-neutral-50", label: "Closed" },
  Rejected: { bg: "bg-error", text: "text-neutral-50", label: "Rejected" },
};

const StatusBadge: React.FC<StatusBadgeProps> = ({ status, size = "md" }) => {
  const config = statusConfig[status];
  return (
    <span
      className={`inline-flex items-center rounded-md font-sans font-medium transition-colors duration-200 ${config.bg} ${config.text} ${size === "sm" ? "text-xs px-2 py-0.5" : "text-xs px-2.5 py-1"}`}
      aria-label={`Status: ${config.label}`}
    >
      {config.label}
    </span>
  );
};

export default StatusBadge;