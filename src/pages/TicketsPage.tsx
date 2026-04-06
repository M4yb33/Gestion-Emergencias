import React, { useState } from "react";
                  onKeyDown={(e) =>
                    e.key === "Enter" && onNavigate(`/tickets/${ticket.id}`)
                  }
                  aria-label={`Ticket ${ticket.id}: ${ticket.title}`}
                >
                  <td className="px-4 py-4">
                    <span className="text-xs font-mono text-muted-foreground">
                      {ticket.id}
                    </span>
                  </td>
                  <td className="px-4 py-4">
                    <p className="text-sm font-sans font-medium text-foreground">
                      {ticket.title}
                    </p>
                    <p className="text-xs text-muted-foreground font-sans mt-0.5">
                      {ticket.location}
                    </p>
                  </td>
                  <td className="px-4 py-4">
                    <PriorityBadge priority={ticket.priority} />
                  </td>
                  <td className="px-4 py-4">
                    <StatusBadge status={ticket.status} />
                  </td>
                  <td className="px-4 py-4">
                    <span className="text-xs text-muted-foreground font-sans">
                      {ticket.category}
                    </span>
                  </td>
                  <td className="px-4 py-4">
                    <span className="text-xs text-muted-foreground font-sans">
                      {ticket.source}
                    </span>
                  </td>
                  <td className="px-4 py-4">
                    <span className="text-xs font-mono text-muted-foreground">
                      {new Date(ticket.createdAt).toLocaleDateString()}{" "}
                      {new Date(ticket.createdAt).toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </span>
                  </td>
                  <td className="px-4 py-4">
                    <ArrowRight
                      size={14}
                      weight="regular"
                      className="text-muted-foreground"
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {filtered.length === 0 && (
          <div className="py-16 text-center">
            <p className="text-muted-foreground font-sans text-sm">
              No tickets match your filters.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default TicketsPage;