import React, { useState } from "react";
      <MobileHeader title="Nuevo reporte" subtitle="Paso 1 de 4" onBack={() => navigate("dashboard")} />
      <div className="flex-1 px-5 pb-6 overflow-y-auto">
        <div className="mb-4">
          <div className="flex gap-1 mb-4">
            {[1,2,3,4].map((s) => (
              <div key={s} className={`flex-1 h-1 rounded-full ${s === 1 ? "bg-primary" : "bg-neutral-200"}`} />
            ))}
          </div>
        </div>

        <p className="text-sm font-semibold text-neutral-800 font-sans mb-3">Tipo de incidente <span className="text-error">*</span></p>
        <div className="grid grid-cols-4 gap-2 mb-5">
          {incidentTypes.map((t) => (
            <button
              key={t.id}
              onClick={() => setSelected(t.id)}
              className={`flex flex-col items-center gap-1.5 p-2 rounded-xl border-2 cursor-pointer transition-all ${
                selected === t.id ? "border-primary bg-primary/5" : "border-neutral-200 bg-white hover:border-neutral-300"
              }`}
            >
              <span className="text-xl">{t.emoji}</span>
              <span className="text-[9px] font-medium text-neutral-700 font-sans text-center leading-tight">{t.label}</span>
            </button>
          ))}
        </div>

        <p className="text-sm font-semibold text-neutral-800 font-sans mb-3">Nivel de riesgo <span className="text-error">*</span></p>
        <div className="grid grid-cols-2 gap-2 mb-5">
          {riskLevels.map((r) => (
            <button
              key={r.id}
              onClick={() => setRisk(r.id)}
              className={`border-2 rounded-xl py-2.5 text-xs font-medium font-sans cursor-pointer transition-all ${
                risk === r.id ? `${r.color} border-2` : "border-neutral-200 bg-white text-neutral-600 hover:border-neutral-300"
              }`}
            >
              {r.label}
            </button>
          ))}
        </div>

        <p className="text-sm font-semibold text-neutral-800 font-sans mb-2">Descripción breve <span className="text-error">*</span></p>
        <textarea
          placeholder="Describe brevemente lo que está ocurriendo..."
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
          rows={3}
          className="w-full px-3.5 py-3 border border-neutral-200 rounded-xl text-sm text-neutral-900 bg-neutral-50 placeholder-neutral-400 font-sans focus:outline-none focus:ring-2 focus:ring-primary resize-none mb-5"
        />

        <MobilePrimaryBtn
          label="Siguiente → Ubicación"
          onClick={() => navigate("location", { type: selected, risk, desc })}
          disabled={!selected || !risk || !desc}
        />
      </div>
    </div>
  );
};

export default MobileCreateReport;