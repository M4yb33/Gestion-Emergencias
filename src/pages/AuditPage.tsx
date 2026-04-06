import React, { useState } from "react";
import { ClipboardText } from "@phosphor-icons/react";

const AuditPage: React.FC = () => {
  const [filterAction, setFilterAction] = useState("All");
  const [auditLog] = useState([
    { id: "A001", timestamp: "2024-04-06T10:30:00", user: "admin@safealert.gov", action: "LOGIN", entity: "System", entityId: "SYS001", details: "Admin login from 192.168.1.1" },
    { id: "A002", timestamp: "2024-04-06T10:32:00", user: "john@safealert.gov", action: "CREATE_TICKET", entity: "Ticket", entityId: "TK001", details: "Medical emergency ticket created" },
    { id: "A003", timestamp: "2024-04-06T11:00:00", user: "admin@safealert.gov", action: "UPDATE_USER", entity: "User", entityId: "U002", details: "User role changed to L2" },
  ]);

  const filtered = filterAction === "All" ? auditLog : auditLog.filter((entry) => entry.action === filterAction);

  const actionColors: Record<string, string> = {
    LOGIN: "bg-blue-100 text-blue-700",
    LOGOUT: "bg-purple-100 text-purple-700",
    CREATE_TICKET: "bg-green-100 text-green-700",
    UPDATE_TICKET: "bg-yellow-100 text-yellow-700",
    DELETE_TICKET: "bg-red-100 text-red-700",
    UPDATE_USER: "bg-orange-100 text-orange-700",
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-sans font-bold text-foreground">Audit Log</h1>
        <p className="text-muted-foreground font-sans mt-1">System activity and user actions</p>
      </div>

      <select
        value={filterAction}
        onChange={(e) => setFilterAction(e.target.value)}
        className="text-sm text-foreground bg-neutral-100 border border-border rounded-lg px-3 py-2 font-sans outline-none cursor-pointer"
      >
        <option value="All">All Actions</option>
        <option value="LOGIN">Login</option>
        <option value="CREATE_TICKET">Create Ticket</option>
        <option value="UPDATE_TICKET">Update Ticket</option>
      </select>

      <div className="bg-card border border-border rounded-lg overflow-auto">
        <table className="w-full text-sm font-sans" aria-label="Audit log table">
          <thead>
            <tr className="bg-neutral-100 border-b border-border">
              {["Timestamp", "User", "Action", "Entity", "Details"].map((col) => (
                <th key={col} className="text-left text-xs font-sans font-medium text-muted-foreground uppercase tracking-wide px-4 py-3">
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {filtered.map((entry) => (
              <tr key={entry.id} className="hover:bg-neutral-50 transition-colors duration-150">
                <td className="px-4 py-4">
                  <span className="text-xs font-mono text-muted-foreground whitespace-nowrap">{new Date(entry.timestamp).toLocaleString()}</span>
                </td>
                <td className="px-4 py-4">
                  <span className="text-sm font-sans text-foreground">{entry.user}</span>
                </td>
                <td className="px-4 py-4">
                  <span className={`text-xs px-2 py-0.5 rounded font-sans ${actionColors[entry.action] || "bg-neutral-200 text-neutral-700"}`}>
                    {entry.action.replace(/_/g, " ")}
                  </span>
                </td>
                <td className="px-4 py-4">
                  <div>
                    <p className="text-xs font-sans text-foreground">{entry.entity}</p>
                    <p className="text-xs font-mono text-muted-foreground">{entry.entityId}</p>
                  </div>
                </td>
                <td className="px-4 py-4">
                  <span className="text-xs text-muted-foreground font-sans">{entry.details}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {filtered.length === 0 && (
        <div className="py-16 text-center">
          <ClipboardText size={32} weight="regular" className="text-muted-foreground mx-auto mb-2" />
          <p className="text-muted-foreground font-sans text-sm">No audit entries found.</p>
        </div>
      )}
    </div>
  );
};

export default AuditPage;
