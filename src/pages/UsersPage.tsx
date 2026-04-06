import React, { useState } from "react";
            </h2 >
            <div className="space-y-4">
              {[
                { label: "Full Name", type: "text", placeholder: "John Doe" },
                {
                  label: "Email",
                  type: "email",
                  placeholder: "john@safealert.gov",
                },
                {
                  label: "Password",
                  type: "password",
                  placeholder: "••••••••",
                },
              ].map((field) => (
                <div key={field.label}>
                  <label className="block text-sm font-medium text-foreground font-sans mb-1.5">
                    {field.label}
                  </label>
                  <input
                    type={field.type}
                    placeholder={field.placeholder}
                    className="w-full px-3 py-2.5 border border-border rounded-lg text-sm text-foreground bg-neutral-50 placeholder-neutral-400 font-sans focus:outline-none focus:ring-2 focus:ring-info"
                    aria-label={field.label}
                  />
                </div>
              ))}
              <div>
                <label className="block text-sm font-medium text-foreground font-sans mb-1.5">
                  Role
                </label>
                <select
                  className="w-full px-3 py-2.5 border border-border rounded-lg text-sm text-foreground bg-neutral-50 font-sans outline-none cursor-pointer"
                  aria-label="Select role"
                >
                  <option value="L1">Operator L1</option>
                  <option value="L2">Operator L2</option>
                  <option value="Admin">Administrator</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground font-sans mb-1.5">
                  Center
                </label>
                <select
                  className="w-full px-3 py-2.5 border border-border rounded-lg text-sm text-foreground bg-neutral-50 font-sans outline-none cursor-pointer"
                  aria-label="Select center"
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
                Create User
              </button>
            </div>
          </div >
        </div >
      )}
    </div >
  );
};

export default UsersPage;