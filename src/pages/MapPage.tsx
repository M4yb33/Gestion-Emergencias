import React, { useState, Suspense, lazy } from "react";

      {selected && (
        <div className="bg-card border border-border rounded-lg p-6 fade-in">
          <div className="flex items-start justify-between mb-4">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs font-mono text-muted-foreground">
                  {selected.id}
                </span>
                <StatusBadge status={selected.status} size="sm" />
              </div>
              <h2 className="text-base font-sans font-medium text-foreground">
                {selected.title}
              </h2>
            </div>
            <button
              onClick={() => setSelectedTicket(null)}
              className="p-1.5 text-muted-foreground hover:text-foreground hover:bg-neutral-100 rounded-md transition-colors duration-150 cursor-pointer"
              aria-label="Close incident details"
            >
              <X size={16} weight="regular" />
            </button>
          </div>
          <p className="text-sm text-foreground font-sans mb-4">
            {selected.description}
          </p>
          <div className="flex flex-wrap gap-4">
            <div>
              <p className="text-xs text-muted-foreground font-sans">
                Location
              </p>
              <p className="text-sm font-sans text-foreground">
                {selected.location}
              </p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground font-sans">
                Assigned
              </p>
              <p className="text-sm font-sans text-foreground">
                {selected.assignedTo || "Unassigned"}
              </p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground font-sans">
                Category
              </p>
              <p className="text-sm font-sans text-foreground">
                {selected.category}
              </p>
            </div>
          </div>
          <div className="mt-4 flex gap-2">
            <button
              onClick={() => onNavigate(`/tickets/${selected.id}`)}
              className="px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-sans font-normal hover:bg-primary-hover transition-colors duration-150 cursor-pointer"
            >
              View Full Details
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MapPage;