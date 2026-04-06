import React from "react";

type Priority = "Low" | "Medium" | "High" | "Critical";

interface PriorityBadgeProps {
  priority: Priority;
}

const priorityConfig: Record<Priority, { bg: string; text: string }> = {
  Low: { bg: "bg-neutral-200", text: "text-neutral-700" },
  Medium: { bg: "bg-warning", text: "text-neutral-900" },
  High: { bg: "bg-secondary", text: "text-secondary-foreground" },
  Critical: { bg: "bg-error", text: "text-neutral-50" },
};

const PriorityBadge: React.FC<PriorityBadgeProps> = ({ priority }) => {
  const config = priorityConfig[priority];
  return (
    <span
      className={`inline-flex items-center text-xs px-2.5 py-1 rounded-md font-sans font-medium ${config.bg} ${config.text}`}
    >
      {priority}
    </span>
  );
};

export default PriorityBadge;