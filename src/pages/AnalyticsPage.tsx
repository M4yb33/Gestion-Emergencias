import React from "react";
{
    categoryData.map((_, index) => (
        <Cell
            key={index}
            fill={CHART_COLORS[index % CHART_COLORS.length]}
        />
    ))
}
              </Bar >
            </BarChart >
          </ResponsiveContainer >
        </div >

    <div className="bg-card border border-border rounded-lg p-6">
        <h2 className="text-base font-sans font-medium text-foreground mb-4">
            Resource Utilization
        </h2>
        <div className="space-y-4">
            {[
                { label: "Ambulances", available: 3, total: 5, color: "bg-info" },
                {
                    label: "Fire Trucks",
                    available: 2,
                    total: 4,
                    color: "bg-error",
                },
                {
                    label: "Police Units",
                    available: 5,
                    total: 8,
                    color: "bg-tertiary",
                },
                {
                    label: "Helicopters",
                    available: 0,
                    total: 2,
                    color: "bg-warning",
                },
                {
                    label: "Rescue Teams",
                    available: 2,
                    total: 3,
                    color: "bg-success",
                },
            ].map((item) => (
                <div key={item.label}>
                    <div className="flex justify-between text-xs font-sans mb-1.5">
                        <span className="text-foreground">{item.label}</span>
                        <span className="text-muted-foreground font-mono">
                            {item.available}/{item.total} available
                        </span>
                    </div>
                    <div className="h-2 bg-neutral-200 rounded-full overflow-hidden">
                        <div
                            className={`h-full ${item.color} rounded-full transition-all duration-500`}
                            style={{ width: `${(item.available / item.total) * 100}%` }}
                        ></div>
                    </div>
                </div>
            ))}
        </div>
    </div>
      </div >
    </div >
  );
};

export default AnalyticsPage;