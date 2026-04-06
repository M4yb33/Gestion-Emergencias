import React, { useState } from "react";
import { X } from "@phosphor-icons/react";
import StatusBadge from "../components/shared/StatusBadge";
import PriorityBadge from "../components/shared/PriorityBadge";

const TicketDetailPage: React.FC = () => {
  const [escalationOpen, setEscalationOpen] = useState(false);
  const [escalationCenter, setEscalationCenter] = useState("Central Operations");
  const [currentStatus, setCurrentStatus] = useState("Open");

  const ticket = {
    id: "TK001",
    title: "Medical Emergency - Heart Attack",
    description: "Patient experiencing chest pain and shortness of breath. Requires immediate medical attention.",
    location: "123 Main St, Downtown",
    status: currentStatus,
    priority: "Critical",
    category: "Medical",
    assignedTo: "Ambulance 01",
    createdAt: new Date(),
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-sans font-bold text-foreground">Ticket Details</h1>
        <p className="text-muted-foreground font-sans mt-1">View and manage ticket information</p>
      </div>

      <div className="bg-card border border-border rounded-lg p-6">
        <div className="flex items-start justify-between mb-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-sm font-mono text-muted-foreground">{ticket.id}</span>
              <StatusBadge status={ticket.status} size="md" />
            </div>
            <h2 className="text-2xl font-sans font-bold text-foreground">{ticket.title}</h2>
          </div>
          <PriorityBadge priority={ticket.priority} />
        </div>

        <p className="text-base text-foreground font-sans mb-6">{ticket.description}</p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <div>
            <p className="text-xs text-muted-foreground font-sans uppercase">Location</p>
            <p className="text-sm font-sans text-foreground mt-1">{ticket.location}</p>
          </div>
          <div>
            <p className="text-xs text-muted-foreground font-sans uppercase">Category</p>
            <p className="text-sm font-sans text-foreground mt-1">{ticket.category}</p>
          </div>
          <div>
            <p className="text-xs text-muted-foreground font-sans uppercase">Assigned To</p>
            <p className="text-sm font-sans text-foreground mt-1">{ticket.assignedTo}</p>
          </div>
          <div>
            <p className="text-xs text-muted-foreground font-sans uppercase">Created</p>
            <p className="text-sm font-sans text-foreground mt-1">{ticket.createdAt.toLocaleDateString()}</p>
          </div>
        </div>

        <div className="flex gap-2">
          <button className="px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-sans font-normal hover:bg-primary-hover transition-colors duration-150 cursor-pointer">
            Mark Resolved
          </button>
          <button
            onClick={() => setEscalationOpen(true)}
            className="px-4 py-2 bg-warning text-neutral-900 rounded-lg text-sm font-sans font-normal hover:bg-yellow-500 transition-colors duration-150 cursor-pointer"
          >
            Escalate
          </button>
        </div>
      </div>

      {escalationOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center" role="dialog" aria-modal="true">
          <div className="absolute inset-0 bg-neutral-900 bg-opacity-50" onClick={() => setEscalationOpen(false)} aria-hidden="true" />
          <div className="relative bg-card border border-border rounded-lg p-6 w-full max-w-md mx-4 fade-in">
            <h2 className="text-lg font-sans font-medium text-foreground mb-4">Escalate Ticket</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-foreground font-sans mb-1.5">Destination Center</label>
                <select
                  value={escalationCenter}
                  onChange={(e) => setEscalationCenter(e.target.value)}
                  className="w-full px-3 py-2.5 border border-border rounded-lg text-sm text-foreground bg-neutral-50 font-sans outline-none cursor-pointer"
                >
                  {["Central Operations", "North District", "South District", "East District", "West District"].map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground font-sans mb-1.5">Escalation Reason</label>
                <textarea rows={3} placeholder="Describe the reason for escalation..." className="w-full px-3 py-2.5 border border-border rounded-lg text-sm text-foreground bg-neutral-50 placeholder-neutral-400 font-sans focus:outline-none focus:ring-2 focus:ring-info resize-none" aria-label="Escalation reason" />
              </div>
              <div className="flex gap-3 justify-end">
                <button
                  onClick={() => setEscalationOpen(false)}
                  className="px-4 py-2 bg-neutral-200 text-neutral-800 rounded-lg text-sm font-sans font-normal hover:bg-neutral-300 transition-colors duration-150 cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  onClick={() => {
                    setCurrentStatus("Validated");
                    setEscalationOpen(false);
                  }}
                  className="px-4 py-2 bg-warning text-neutral-900 rounded-lg text-sm font-sans font-normal hover:bg-yellow-500 transition-colors duration-150 cursor-pointer"
                >
                  Confirm Escalation
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TicketDetailPage;
