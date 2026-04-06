import React from "react";
            { icon: "🎁", label: "Incentivos", screen: "incentives" as const },
          ].map((item) => (
            <button
              key={item.label}
              onClick={() => navigate(item.screen)}
              className="bg-white rounded-2xl p-3.5 flex flex-col items-center gap-2 cursor-pointer hover:shadow-md transition-shadow border border-neutral-100"
            >
              <span className="text-2xl">{item.icon}</span>
              <span className="text-xs font-medium text-neutral-700 font-sans text-center leading-tight">{item.label}</span>
            </button>
          ))}
        </div>

        <div className="mb-2">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-sm font-semibold text-neutral-800 font-sans">Reportes recientes</h2>
            <span
              className="text-xs text-primary font-medium cursor-pointer font-sans"
              onClick={() => navigate("reportList")}
            >
              Ver todos
            </span>
          </div>
          <div className="space-y-2">
            {recentReports.map((r) => (
              <button
                key={r.id}
                onClick={() => navigate("reportDetail")}
                className="w-full bg-white rounded-xl p-3.5 flex items-center gap-3 cursor-pointer hover:shadow-sm transition-shadow border border-neutral-100 text-left"
              >
                <div className="w-9 h-9 bg-neutral-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-base">🚦</span>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-semibold text-neutral-900 font-sans truncate">{r.type}</p>
                  <p className="text-[10px] text-neutral-400 font-sans flex items-center gap-1 mt-0.5">
                    <MapPin size={9} weight="fill" /> {r.location}
                  </p>
                </div>
                <MobileStatusBadge status={r.status} />
              </button>
            ))}
          </div>
        </div>

        <button
          onClick={() => navigate("whatsapp")}
          className="w-full mt-4 bg-green-50 border border-green-200 rounded-xl p-3.5 flex items-center gap-3 cursor-pointer hover:bg-green-100 transition-colors"
        >
          <span className="text-2xl">💬</span>
          <div className="flex-1 text-left">
            <p className="text-xs font-semibold text-green-800 font-sans">Vincular WhatsApp</p>
            <p className="text-[10px] text-green-600 font-sans">Reporta también por WhatsApp</p>
          </div>
          <span className="text-green-600 text-xs font-sans">→</span>
        </button>
      </div>

      <MobileBottomNav active="dashboard" navigate={navigate} />
    </div>
  );
};

export default MobileDashboard;