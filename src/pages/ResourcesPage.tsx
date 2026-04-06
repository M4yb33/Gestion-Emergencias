import React, { useState } from "react";
import { Ambulance, Truck, Shield, Airplane } from "@phosphor-icons/react";
import { MapPin, Clock } from "@phosphor-icons/react";

const ResourcesPage: React.FC = () => {
  const [statusFilter, setStatusFilter] = useState("All");

  const resources = [
    { id: "R001", name: "Ambulance 01", type: "Ambulance", status: "Available", location: "Central Station", lastUpdated: new Date() },
    { id: "R002", name: "Fire Truck 01", type: "Fire Truck", status: "Dispatched", location: "North District", lastUpdated: new Date() },
    { id: "R003", name: "Police Unit 01", type: "Police", status: "Available", location: "East District", lastUpdated: new Date() },
  ];

  const filtered = statusFilter === "All" ? resources : resources.filter((r) => r.status === statusFilter);

  const typeIcons: Record<string, React.ReactNode> = {
    Ambulance: <Ambulance size={20} weight="regular" className="text-info" />,
    "Fire Truck": <Truck size={20} weight="regular" className="text-error" />,
    Police: <Shield size={20} weight="regular" className="text-tertiary" />,
    Helicopter: <Airplane size={20} weight="regular" className="text-warning" />,
  };

  const statusColors: Record<string, string> = {
    Available: "bg-green-100 text-green-700",
    Dispatched: "bg-yellow-100 text-yellow-700",
    Maintenance: "bg-gray-100 text-gray-700",
    Offline: "bg-red-100 text-red-700",
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-sans font-bold text-foreground">Resources</h1>
        <p className="text-muted-foreground font-sans mt-1">Available emergency response units</p>
      </div>

      <select
        value={statusFilter}
        onChange={(e) => setStatusFilter(e.target.value)}
        className="text-sm text-foreground bg-neutral-100 border border-border rounded-lg px-3 py-2 font-sans outline-none cursor-pointer"
      >
        <option value="All">All Statuses</option>
        {["Available", "Dispatched", "Maintenance", "Offline"].map((s) => (
          <option key={s} value={s}>
            {s}
          </option>
        ))}
      </select>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {filtered.map((resource) => (
          <div key={resource.id} className="bg-card border border-border rounded-lg p-5">
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center gap-3">
                {typeIcons[resource.type]}
                <div>
                  <p className="text-sm font-sans font-medium text-foreground">{resource.name}</p>
                  <p className="text-xs text-muted-foreground font-sans">{resource.type}</p>
                </div>
              </div>
              <span className={`text-xs px-2 py-0.5 rounded font-sans ${statusColors[resource.status]}`}>{resource.status}</span>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <MapPin size={13} weight="regular" className="text-muted-foreground" />
                <span className="text-xs text-muted-foreground font-sans">{resource.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={13} weight="regular" className="text-muted-foreground" />
                <span className="text-xs font-mono text-muted-foreground">{resource.lastUpdated.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}</span>
              </div>
            </div>
            <div className="mt-3 pt-3 border-t border-border flex items-center justify-between">
              <span className="text-xs text-muted-foreground font-sans">Central</span>
              <span className="text-xs font-mono text-muted-foreground">{resource.id}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResourcesPage;
