import React, { useState } from "react";
      </div>

      {showModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center"
          role="dialog"
          aria-modal="true"
          aria-label="Add center modal"
        >
          <div
            className="absolute inset-0 bg-neutral-900 bg-opacity-50"
            onClick={() => setShowModal(false)}
            aria-hidden="true"
          />
          <div className="relative bg-card border border-border rounded-lg p-6 w-full max-w-md mx-4 fade-in">
            <h2 className="text-lg font-sans font-medium text-foreground mb-4">
              Add New Center
            </h2>
            <div className="space-y-4">
              {[
                { label: "Center Name", placeholder: "e.g. West District" },
                { label: "Region", placeholder: "e.g. West" },
              ].map((field) => (
                <div key={field.label}>
                  <label className="block text-sm font-medium text-foreground font-sans mb-1.5">
                    {field.label}
                  </label>
                  <input
                    type="text"
                    placeholder={field.placeholder}
                    className="w-full px-3 py-2.5 border border-border rounded-lg text-sm text-foreground bg-neutral-50 placeholder-neutral-400 font-sans focus:outline-none focus:ring-2 focus:ring-info"
                    aria-label={field.label}
                  />
                </div>
              ))}
              <div>
                <label className="block text-sm font-medium text-foreground font-sans mb-1.5">
                  Status
                </label>
                <select
                  className="w-full px-3 py-2.5 border border-border rounded-lg text-sm text-foreground bg-neutral-50 font-sans outline-none cursor-pointer"
                  aria-label="Center status"
                >
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