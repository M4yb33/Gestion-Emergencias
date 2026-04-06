import React, { useState } from "react";
import { Plus } from "@phosphor-icons/react";

const CentersPage: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [centers] = useState([
    { id: "C001", name: "Central Operations", region: "Central", status: "Active", units: 12 },
    { id: "C002", name: "North District", region: "North", status: "Active", units: 8 },
    { id: "C003", name: "South District", region: "South", status: "Active", units: 7 },
  ]);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-sans font-bold text-foreground">Centers</h1>
          <p className="text-muted-foreground font-sans mt-1">Manage emergency response centers</p>
        </div>
        <button
          onClick={() => setShowModal(true)}
          className="px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-sans font-normal hover:bg-primary-hover transition-colors duration-150 cursor-pointer flex items-center gap-2"
        >
          <Plus size={16} />
          Add Center
        </button>
      </div>

      <div className="bg-card border border-border rounded-lg overflow-auto">
        <table className="w-full text-sm font-sans" aria-label="Centers table">
          <thead>
            <tr className="bg-neutral-100 border-b border-border">
              <th className="text-left px-4 py-3 text-xs font-medium text-muted-foreground uppercase tracking-wide">Name</th>
              <th className="text-left px-4 py-3 text-xs font-medium text-muted-foreground uppercase tracking-wide">Region</th>
              <th className="text-left px-4 py-3 text-xs font-medium text-muted-foreground uppercase tracking-wide">Status</th>
              <th className="text-left px-4 py-3 text-xs font-medium text-muted-foreground uppercase tracking-wide">Units</th>
            </tr>
          </thead>
          <tbody>
            {centers.map((center) => (
              <tr key={center.id} className="border-b border-border hover:bg-neutral-50 transition-colors">
                <td className="px-4 py-4">
                  <p className="text-sm font-sans font-medium text-foreground">{center.name}</p>
                </td>
                <td className="px-4 py-4">
                  <span className="text-xs text-muted-foreground font-sans">{center.region}</span>
                </td>
                <td className="px-4 py-4">
                  <span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded font-sans">{center.status}</span>
                </td>
                <td className="px-4 py-4">
                  <span className="text-xs text-muted-foreground font-sans">{center.units}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center" role="dialog" aria-modal="true" aria-label="Add center modal">
          <div className="absolute inset-0 bg-neutral-900 bg-opacity-50" onClick={() => setShowModal(false)} aria-hidden="true" />
          <div className="relative bg-card border border-border rounded-lg p-6 w-full max-w-md mx-4 fade-in">
            <h2 className="text-lg font-sans font-medium text-foreground mb-4">Add New Center</h2>
            <div className="space-y-4">
              {[
                { label: "Center Name", placeholder: "e.g. West District" },
                { label: "Region", placeholder: "e.g. West" },
              ].map((field) => (
                <div key={field.label}>
                  <label className="block text-sm font-medium text-foreground font-sans mb-1.5">{field.label}</label>
                  <input
                    type="text"
                    placeholder={field.placeholder}
                    className="w-full px-3 py-2.5 border border-border rounded-lg text-sm text-foreground bg-neutral-50 placeholder-neutral-400 font-sans focus:outline-none focus:ring-2 focus:ring-info"
                    aria-label={field.label}
                  />
                </div>
              ))}
              <div>
                <label className="block text-sm font-medium text-foreground font-sans mb-1.5">Status</label>
                <select className="w-full px-3 py-2.5 border border-border rounded-lg text-sm text-foreground bg-neutral-50 font-sans outline-none cursor-pointer" aria-label="Center status">
                  <option>Active</option>
                  <option>Inactive</option>
                  <option>Maintenance</option>
                </select>
              </div>
            </div>
            <div className="flex gap-3 justify-end mt-6">
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 bg-neutral-200 text-neutral-800 rounded-lg text-sm font-sans font-normal hover:bg-neutral-300 transition-colors duration-150 cursor-pointer"
              >
                Cancel
              </button>
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-sans font-normal hover:bg-primary-hover transition-colors duration-150 cursor-pointer"
              >
                Create Center
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CentersPage;
