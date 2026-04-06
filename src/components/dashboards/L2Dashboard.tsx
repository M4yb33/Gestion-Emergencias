import React from "react";
fontSize: 10,
    fill: "hsl(0, 0%, 45%)",
        fontFamily: "IBM Plex Mono",
                  }}
axisLine = { false}
tickLine = { false}
    />
                <Tooltip
                  contentStyle={{
                    background: "hsl(0, 0%, 100%)",
                    border: "1px solid hsl(0, 0%, 90%)",
                    borderRadius: "8px",
                    fontSize: "12px",
                    fontFamily: "DM Sans",
                  }}
                  labelStyle={{ color: "hsl(220, 15%, 20%)", fontWeight: 500 }}
                />
                <Bar dataKey="value" radius={[4, 4, 0, 0]}>
                  {categoryData.map((_, index) => (
                    <Cell
                      key={index}
                      fill={CHART_COLORS[index % CHART_COLORS.length]}
                    />
                  ))}
                </Bar>
              </BarChart >
            </ResponsiveContainer >
          </div >

    <div className="bg-card border border-border rounded-lg p-6">
        <div className="flex items-center justify-between mb-4">
            <h2 className="text-base font-sans font-medium text-foreground">
                Resources
            </h2>
            <button
                onClick={() => onNavigate("/resources")}
                className="text-xs text-primary hover:text-primary-hover font-sans transition-colors duration-150 cursor-pointer"
            >
                View all
            </button>
        </div>
        <div className="space-y-3">
            {mockResources.slice(0, 4).map((res) => (
                <div key={res.id} className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <Truck
                            size={14}
                            weight="regular"
                            className="text-muted-foreground"
                        />
                        <div>
                            <p className="text-xs font-sans text-foreground">
                                {res.name}
                            </p>
                            <p className="text-xs text-muted-foreground font-sans">
                                {res.type}
                            </p>
                        </div>
                    </div>
                    <span
                        className={`text-xs px-2 py-0.5 rounded font-sans ${resourceStatusColors[res.status]}`}
                    >
                        {res.status}
                    </span>
                </div>
            ))}
        </div>
    </div>
        </div >
      </div >
    </div >
  );
};

export default L2Dashboard;