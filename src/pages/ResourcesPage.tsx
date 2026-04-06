import React, { useState } from "react";
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="text-sm text-foreground bg-neutral-100 border border-border rounded-lg px-3 py-2 font-sans outline-none cursor-pointer"
          aria-label="Filter by status"
        >
          <option value="All">All Statuses</option>
          {["Available", "Dispatched", "Maintenance", "Offline"].map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {filtered.map((resource) => (
          <div
            key={resource.id}
            className="bg-card border border-border rounded-lg p-5"
          >
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center gap-3">
                {typeIcons[resource.type]}
                <div>
                  <p className="text-sm font-sans font-medium text-foreground">
                    {resource.name}
                  </p>
                  <p className="text-xs text-muted-foreground font-sans">
                    {resource.type}
                  </p>
                </div>
              </div>
              <span
                className={`text-xs px-2 py-0.5 rounded font-sans ${statusColors[resource.status]}`}
              >
                {resource.status}
              </span>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <MapPin
                  size={13}
                  weight="regular"
                  className="text-muted-foreground"
                />
                <span className="text-xs text-muted-foreground font-sans">
                  {resource.location}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Clock
                  size={13}
                  weight="regular"
                  className="text-muted-foreground"
                />
                <span className="text-xs font-mono text-muted-foreground">
                  {new Date(resource.lastUpdated).toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </span>
              </div>
            </div>
            <div className="mt-3 pt-3 border-t border-border flex items-center justify-between">
              <span className="text-xs text-muted-foreground font-sans">
                {resource.center}
              </span>
              <span className="text-xs font-mono text-muted-foreground">
                {resource.id}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResourcesPage;