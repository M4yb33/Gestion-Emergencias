import React, { useState } from "react";
import { MapPin, Clock, X } from "@phosphor-icons/react";
import StatusBadge from "../components/shared/StatusBadge";
import { mockData } from "../data/mockData";

const MapPage: React.FC = () => {
  const [selectedTicket, setSelectedTicket] = useState<any>(null);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-sans font-bold text-foreground">Map</h1>
        <p className="text-muted-foreground font-sans mt-1">Geographic distribution of incidents and resources</p>
      </div>

      <div className="bg-card border border-border rounded-lg p-6" style={{ height: "500px" }}>
        <div className="w-full h-full bg-neutral-100 rounded-lg flex items-center justify-center">
          <div className="text-center">
            <span className="text-5xl mb-2 block">🗺️</span>
            <p className="text-muted-foreground font-sans">Map integration not configured</p>
            <p className="text-xs text-muted-foreground font-sans mt-1">Add your map provider (Google Maps, Mapbox, etc.)</p>
          </div>
        </div>
      </div>

      {selectedTicket && (
        <div className="bg-card border border-border rounded-lg p-6 fade-in">
          <div className="flex items-start justify-between mb-4">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs font-mono text-muted-foreground">{selectedTicket.id}</span>
                <StatusBadge status={selectedTicket.status} size="sm" />
              </div>
              <h2 className="text-base font-sans font-medium text-foreground">{selectedTicket.title}</h2>
            </div>
            <button
              onClick={() => setSelectedTicket(null)}
              className="p-1.5 text-muted-foreground hover:text-foreground hover:bg-neutral-100 rounded-md transition-colors duration-150 cursor-pointer"
              aria-label="Close incident details"
            >
              <X size={16} weight="regular" />
            </button>
          </div>
          <p className="text-sm text-foreground font-sans mb-4">{selectedTicket.description}</p>
          <div className="flex flex-wrap gap-4">
            <div>
              <p className="text-xs text-muted-foreground font-sans">Location</p>
              <p className="text-sm font-sans text-foreground">{selectedTicket.location}</p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground font-sans">Assigned</p>
              <p className="text-sm font-sans text-foreground">{selectedTicket.assignedTo || "Unassigned"}</p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground font-sans">Category</p>
              <p className="text-sm font-sans text-foreground">{selectedTicket.category}</p>
            </div>
          </div>
          <div className="mt-4 flex gap-2">
            <button className="px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-sans font-normal hover:bg-primary-hover transition-colors duration-150 cursor-pointer">
              View Full Details
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MapPage;
