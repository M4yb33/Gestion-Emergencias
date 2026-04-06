import React, { useState } from "react";
e.key === "Enter" && onNavigate(`/tickets/${incident.id}`)
            }
role = "button"
aria - label={ `Incident ${incident.id}: ${incident.title}` }
          >
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center gap-2">
                <Warning
                  size={16}
                  weight="regular"
                  className="text-muted-foreground"
                />
                <span className="text-xs font-mono text-muted-foreground">
                  {incident.id}
                </span>
              </div>
              <StatusBadge status={incident.status} size="sm" />
            </div>
            <h3 className="text-sm font-sans font-medium text-foreground mb-2 leading-snug">
              {incident.title}
            </h3>
            <p className="text-xs text-muted-foreground font-sans mb-3 line-clamp-2">
              {incident.description}
            </p>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <MapPin
                  size={12}
                  weight="regular"
                  className="text-muted-foreground"
                />
                <span className="text-xs text-muted-foreground font-sans truncate max-w-32">
                  {incident.location}
                </span>
              </div>
              <PriorityBadge priority={incident.priority} />
            </div>
{
    incident.assignedTo && (
        <div className="flex items-center gap-1.5 mt-2 pt-2 border-t border-border">
            <Truck
                size={12}
                weight="regular"
                className="text-muted-foreground"
            />
            <span className="text-xs text-muted-foreground font-sans">
                {incident.assignedTo}
            </span>
        </div>
    )
}
<div className="flex justify-end mt-3">
    <ArrowRight
        size={14}
        weight="regular"
        className="text-muted-foreground"
    />
</div>
          </div >
        ))}
      </div >

{
    filtered.length === 0 && (
        <div className="py-16 text-center bg-card border border-border rounded-lg">
            <p className="text-muted-foreground font-sans text-sm">
                No incidents match the selected filter.
            </p>
        </div>
    )
}
    </div >
  );
};

export default IncidentsPage;