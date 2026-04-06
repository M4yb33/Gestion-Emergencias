import React, { useState } from "react";
aria - hidden="true"
    />
    <div className="relative bg-card border border-border rounded-lg p-6 w-full max-w-md mx-4 fade-in">
        <h2 className="text-lg font-sans font-medium text-foreground mb-4">
            Escalate Ticket
        </h2>
        <div className="space-y-4">
            <div>
                <label className="block text-sm font-medium text-foreground font-sans mb-1.5">
                    Destination Center
                </label>
                <select
                    value={escalationCenter}
                    onChange={(e) => setEscalationCenter(e.target.value)}
                    className="w-full px-3 py-2.5 border border-border rounded-lg text-sm text-foreground bg-neutral-50 font-sans outline-none cursor-pointer"
                >
                    {[
                        "Central Operations",
                        "North District",
                        "South District",
                        "East District",
                        "West District",
                    ].map((c) => (
                        <option key={c} value={c}>
                            {c}
                        </option>
                    ))}
                </select>
            </div>
            <div>
                <label className="block text-sm font-medium text-foreground font-sans mb-1.5">
                    Escalation Reason
                </label>
                <textarea
                    rows={3}
                    placeholder="Describe the reason for escalation..."
                    className="w-full px-3 py-2.5 border border-border rounded-lg text-sm text-foreground bg-neutral-50 placeholder-neutral-400 font-sans focus:outline-none focus:ring-2 focus:ring-info resize-none"
                    aria-label="Escalation reason"
                />
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
        </div >
      )}
    </div >
  );
};

export default TicketDetailPage;