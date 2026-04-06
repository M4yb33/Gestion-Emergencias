import React, { useState } from "react";
          <thead>
            <tr className="bg-neutral-100 border-b border-border">
              {["Timestamp", "User", "Action", "Entity", "Details"].map(
                (col) => (
                  <th
                    key={col}
                    className="text-left text-xs font-sans font-medium text-muted-foreground uppercase tracking-wide px-4 py-3"
                  >
                    {col}
                  </th>
                ),
              )}
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {filtered.map((entry) => (
              <tr
                key={entry.id}
                className="hover:bg-neutral-50 transition-colors duration-150"
              >
                <td className="px-4 py-4">
                  <span className="text-xs font-mono text-muted-foreground whitespace-nowrap">
                    {new Date(entry.timestamp).toLocaleString()}
                  </span>
                </td>
                <td className="px-4 py-4">
                  <span className="text-sm font-sans text-foreground">
                    {entry.user}
                  </span>
                </td>
                <td className="px-4 py-4">
                  <span
                    className={`text-xs px-2 py-0.5 rounded font-sans ${actionColors[entry.action] || "bg-neutral-200 text-neutral-700"}`}
                  >
                    {entry.action.replace(/_/g, " ")}
                  </span>
                </td>
                <td className="px-4 py-4">
                  <div>
                    <p className="text-xs font-sans text-foreground">
                      {entry.entity}
                    </p>
                    <p className="text-xs font-mono text-muted-foreground">
                      {entry.entityId}
                    </p>
                  </div>
                </td>
                <td className="px-4 py-4">
                  <span className="text-xs text-muted-foreground font-sans">
                    {entry.details}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {filtered.length === 0 && (
          <div className="py-16 text-center">
            <ClipboardText
              size={32}
              weight="regular"
              className="text-muted-foreground mx-auto mb-2"
            />
            <p className="text-muted-foreground font-sans text-sm">
              No audit entries found.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AuditPage;