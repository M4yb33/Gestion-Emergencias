import React, { useState } from "react";
import { ArrowRight } from "@phosphor-icons/react";
import { mockData } from "../data/mockData";
import StatusBadge from "../components/shared/StatusBadge";
import PriorityBadge from "../components/shared/PriorityBadge";

interface TicketsPageProps {
  onNavigate: (path: string) => void;
}

const TicketsPage: React.FC<TicketsPageProps> = ({ onNavigate }) => {
  const [statusFilter, setStatusFilter] = useState("All");
  const [categoryFilter, setCategoryFilter] = useState("All");

  const filtered = mockData.tickets.filter(
    (ticket) =>
      (statusFilter === "All" || ticket.status === statusFilter) &&
      (categoryFilter === "All" || ticket.category === categoryFilter)
  );

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-sans font-bold text-foreground">Tickets</h1>
        <p className="text-muted-foreground font-sans mt-1">Service requests and incident tickets</p>
      </div>

      <div className="flex gap-3 flex-wrap">
        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="text-sm text-foreground bg-neutral-100 border border-border rounded-lg px-3 py-2 font-sans outline-none cursor-pointer"
        >
          <option value="All">All Status</option>
          <option value="Open">Open</option>
          <option value="InProgress">In Progress</option>
          <option value="Resolved">Resolved</option>
        </select>

        <select
          value={categoryFilter}
          onChange={(e) => setCategoryFilter(e.target.value)}
          className="text-sm text-foreground bg-neutral-100 border border-border rounded-lg px-3 py-2 font-sans outline-none cursor-pointer"
        >
          <option value="All">All Categories</option>
          <option value="Medical">Medical</option>
          <option value="Fire">Fire</option>
          <option value="Police">Police</option>
          <option value="Other">Other</option>
        </select>
      </div>

      <div className="bg-card border border-border rounded-lg overflow-auto">
        <table className="w-full text-sm font-sans" aria-label="Tickets table">
          <thead>
            <tr className="bg-neutral-100 border-b border-border">
              <th className="text-left px-4 py-3 text-xs font-medium text-muted-foreground uppercase tracking-wide">ID</th>
              <th className="text-left px-4 py-3 text-xs font-medium text-muted-foreground uppercase tracking-wide">Title</th>
              <th className="text-left px-4 py-3 text-xs font-medium text-muted-foreground uppercase tracking-wide">Priority</th>
              <th className="text-left px-4 py-3 text-xs font-medium text-muted-foreground uppercase tracking-wide">Status</th>
              <th className="text-left px-4 py-3 text-xs font-medium text-muted-foreground uppercase tracking-wide">Category</th>
              <th className="text-left px-4 py-3 text-xs font-medium text-muted-foreground uppercase tracking-wide">Source</th>
              <th className="text-left px-4 py-3 text-xs font-medium text-muted-foreground uppercase tracking-wide">Created</th>
              <th className="text-left px-4 py-3 text-xs font-medium text-muted-foreground uppercase tracking-wide"></th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((ticket) => (
              <tr
                key={ticket.id}
                className="border-b border-border hover:bg-neutral-50 transition-colors cursor-pointer"
                onClick={() => onNavigate(`/tickets/${ticket.id}`)}
                onKeyDown={(e) => e.key === "Enter" && onNavigate(`/tickets/${ticket.id}`)}
                role="button"
              >
                <td className="px-4 py-4">
                  <span className="text-xs font-mono text-muted-foreground">{ticket.id}</span>
                </td>
                <td className="px-4 py-4">
                  <p className="text-sm font-sans font-medium text-foreground">{ticket.title}</p>
                  <p className="text-xs text-muted-foreground font-sans mt-0.5">{ticket.location}</p>
                </td>
                <td className="px-4 py-4">
                  <PriorityBadge priority={ticket.priority} />
                </td>
                <td className="px-4 py-4">
                  <StatusBadge status={ticket.status} />
                </td>
                <td className="px-4 py-4">
                  <span className="text-xs text-muted-foreground font-sans">{ticket.category}</span>
                </td>
                <td className="px-4 py-4">
                  <span className="text-xs text-muted-foreground font-sans">{ticket.source || "System"}</span>
                </td>
                <td className="px-4 py-4">
                  <span className="text-xs font-mono text-muted-foreground">
                    {new Date(ticket.createdAt).toLocaleDateString()} {new Date(ticket.createdAt).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                  </span>
                </td>
                <td className="px-4 py-4">
                  <ArrowRight size={14} weight="regular" className="text-muted-foreground" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {filtered.length === 0 && (
        <div className="py-16 text-center">
          <p className="text-muted-foreground font-sans text-sm">No tickets match your filters.</p>
        </div>
      )}
    </div>
  );
};

export default TicketsPage;
