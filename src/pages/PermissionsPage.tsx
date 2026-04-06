import React from "react";
      <div className="flex items-center gap-3">
        <Shield size={24} weight="regular" className="text-foreground" />
        <div>
          <h1 className="text-2xl font-sans font-medium text-foreground">
            Permission Matrix
          </h1>
          <p className="text-sm text-muted-foreground font-sans mt-1">
            Configure role-based access control
          </p>
        </div>
      </div>

      <div className="bg-card border border-border rounded-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full" aria-label="Permission matrix">
            <thead>
              <tr className="bg-neutral-100 border-b border-border">
                <th className="text-left text-xs font-sans font-medium text-muted-foreground uppercase tracking-wide px-6 py-3 w-48">
                  Module
                </th>
                {roles.map((role) => (
                  <th
                    key={role}
                    className="text-center text-xs font-sans font-medium text-muted-foreground uppercase tracking-wide px-6 py-3"
                  >
                    {role}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {modules.map((module) => (
                <tr
                  key={module}
                  className="hover:bg-neutral-50 transition-colors duration-150"
                >
                  <td className="px-6 py-4">
                    <span className="text-sm font-sans text-foreground">
                      {module}
                    </span>
                  </td>
                  {roles.map((role) => (
                    <td key={role} className="px-6 py-4 text-center">
                      <button
                        onClick={() => toggle(module, role)}
                        className={`relative inline-flex h-5 w-9 items-center rounded-full transition-colors duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-info focus:ring-offset-1 ${permissions[module][role] ? "bg-success" : "bg-neutral-300"}`}
                        role="switch"
                        aria-checked={permissions[module][role]}
                        aria-label={`${role} access to ${module}`}
                      >
                        <span
                          className={`inline-block h-3.5 w-3.5 transform rounded-full bg-neutral-50 transition-transform duration-200 ${permissions[module][role] ? "translate-x-4" : "translate-x-0.5"}`}
                        />
                      </button>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="flex justify-end">
        <button className="px-6 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-sans font-normal hover:bg-primary-hover transition-colors duration-150 cursor-pointer">
          Save Permissions
        </button>
      </div>
    </div>
  );
};

export default PermissionsPage;