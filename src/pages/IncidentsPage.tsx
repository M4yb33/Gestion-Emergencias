import React, { useState } from "react";
import { mockData } from "../data/mockData";
import StatusBadge from "../components/shared/StatusBadge";
import PriorityBadge from "../components/shared/PriorityBadge";

interface IncidentsPageProps {
  onNavigate: (path: string) => void;
}

const IncidentsPage: React.FC<IncidentsPageProps> = ({ onNavigate }) => {
  const [statusFilter, setStatusFilter] = useState("All");
  const [priorityFilter, setPriorityFilter] = useState("All");

  const filtered = mockData.incidents.filter(
    (incident) =>
      (statusFilter === "All" || incident.status === statusFilter) &&
      (priorityFilter === "All" || incident.priority === priorityFilter)
  );

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-sans font-bold text-foreground">Incidents</h1>
        <p className="text-muted-foreground font-sans mt-1">Active incidents and emergency responses</p>
      </div>

      <div className="flex gap-3 flex-wrap">
        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="text-sm text-foreground bg-neutral-100 border border-border rounded-lg px-3 py-2 font-sans outline-none cursor-pointer"
        >
          <option value="All">All Status</option>
          <option value="Active">Active</option>
          <option value="InProgress">In Progress</option>
          <option value="Resolved">Resolved</option>
        </select>

        <select
          value={priorityFilter}
          onChange={(e) => setPriorityFilter(e.target.value)}
          className="text-sm text-foreground bg-neutral-100 border border-border rounded-lg px-3 py-2 font-sans outline-none cursor-pointer"
        >
          <option value="All">All Priority</option>
          <option value="Critical">Critical</option>
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filtered.map((incident, idx) => (
          <button
            key={`${incident.id}-${idx}`}
            className="bg-card border border-border rounded-lg p-4 hover:shadow-md transition-shadow cursor-pointer text-left"
            onClick={() => onNavigate(`/tickets/${incident.id}`)}
          >
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center gap-2">
                <span className="text-2xl">⚠️</span>
                <span className="text-xs font-mono text-muted-foreground">{incident.id}</span>
              </div>
              <StatusBadge status={incident.status} size="sm" />
            </div>
            <h3 className="text-sm font-sans font-medium text-foreground mb-2 leading-snug">{incident.title}</h3>
            <p className="text-xs text-muted-foreground font-sans mb-3 line-clamp-2">{incident.description}</p>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <span className="text-lg">📍</span>
                <span className="text-xs text-muted-foreground font-sans truncate max-w-32">{incident.location}</span>
              </div>
              <PriorityBadge priority={incident.priority} />
            </div>
            {incident.assignedTo && (
              <div className="flex items-center gap-1.5 mt-2 pt-2 border-t border-border">
                <span className="text-lg">🚚</span>
                <span className="text-xs text-muted-foreground font-sans">{incident.assignedTo}</span>
              </div>
            )}
            <div className="flex justify-end mt-3">
              <span className="text-muted-foreground text-lg">→</span>
            </div>
          </button>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="py-16 text-center bg-card border border-border rounded-lg">
          <p className="text-muted-foreground font-sans text-sm">No incidents match the selected filter.</p>
        </div>
      )}
    </div>
  );
};

export default IncidentsPage;
