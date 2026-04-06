import React, { useState } from "react";
import { Users } from "@phosphor-icons/react";

const UsersPage: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [users] = useState([
    { id: "U001", name: "John Doe", email: "john@safealert.gov", role: "L1", center: "Central", status: "Active" },
    { id: "U002", name: "Jane Smith", email: "jane@safealert.gov", role: "L2", center: "North District", status: "Active" },
    { id: "U003", name: "Admin User", email: "admin@safealert.gov", role: "Admin", center: "Central", status: "Active" },
  ]);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-sans font-bold text-foreground">Users</h1>
          <p className="text-muted-foreground font-sans mt-1">Manage system users and permissions</p>
        </div>
        <button
          onClick={() => setShowModal(true)}
          className="px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-sans font-normal hover:bg-primary-hover transition-colors duration-150 cursor-pointer"
        >
          Add User
        </button>
      </div>

      <div className="bg-card border border-border rounded-lg overflow-auto">
        <table className="w-full text-sm font-sans" aria-label="Users table">
          <thead>
            <tr className="bg-neutral-100 border-b border-border">
              <th className="text-left px-4 py-3 text-xs font-medium text-muted-foreground uppercase tracking-wide">Name</th>
              <th className="text-left px-4 py-3 text-xs font-medium text-muted-foreground uppercase tracking-wide">Email</th>
              <th className="text-left px-4 py-3 text-xs font-medium text-muted-foreground uppercase tracking-wide">Role</th>
              <th className="text-left px-4 py-3 text-xs font-medium text-muted-foreground uppercase tracking-wide">Center</th>
              <th className="text-left px-4 py-3 text-xs font-medium text-muted-foreground uppercase tracking-wide">Status</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id} className="border-b border-border hover:bg-neutral-50 transition-colors">
                <td className="px-4 py-4">
                  <p className="text-sm font-sans font-medium text-foreground">{user.name}</p>
                </td>
                <td className="px-4 py-4">
                  <span className="text-xs text-muted-foreground font-sans">{user.email}</span>
                </td>
                <td className="px-4 py-4">
                  <span className="px-2 py-1 bg-neutral-100 text-neutral-700 text-xs rounded font-sans">{user.role}</span>
                </td>
                <td className="px-4 py-4">
                  <span className="text-xs text-muted-foreground font-sans">{user.center}</span>
                </td>
                <td className="px-4 py-4">
                  <span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded font-sans">{user.status}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center" role="dialog" aria-modal="true" aria-label="Add user modal">
          <div className="absolute inset-0 bg-neutral-900 bg-opacity-50" onClick={() => setShowModal(false)} aria-hidden="true" />
          <div className="relative bg-card border border-border rounded-lg p-6 w-full max-w-md mx-4 fade-in">
            <h2 className="text-lg font-sans font-medium text-foreground mb-4">Add New User</h2>
            <div className="space-y-4">
              {[
                { label: "Full Name", type: "text", placeholder: "John Doe" },
                { label: "Email", type: "email", placeholder: "john@safealert.gov" },
                { label: "Password", type: "password", placeholder: "••••••••" },
              ].map((field) => (
                <div key={field.label}>
                  <label className="block text-sm font-medium text-foreground font-sans mb-1.5">{field.label}</label>
                  <input
                    type={field.type}
                    placeholder={field.placeholder}
                    className="w-full px-3 py-2.5 border border-border rounded-lg text-sm text-foreground bg-neutral-50 placeholder-neutral-400 font-sans focus:outline-none focus:ring-2 focus:ring-info"
                    aria-label={field.label}
                  />
                </div>
              ))}
              <div>
                <label className="block text-sm font-medium text-foreground font-sans mb-1.5">Role</label>
                <select className="w-full px-3 py-2.5 border border-border rounded-lg text-sm text-foreground bg-neutral-50 font-sans outline-none cursor-pointer" aria-label="Select role">
                  <option value="L1">Operator L1</option>
                  <option value="L2">Operator L2</option>
                  <option value="Admin">Administrator</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground font-sans mb-1.5">Center</label>
                <select className="w-full px-3 py-2.5 border border-border rounded-lg text-sm text-foreground bg-neutral-50 font-sans outline-none cursor-pointer" aria-label="Select center">
                  {["Central Operations", "North District", "South District", "East District", "West District"].map((c) => (
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
          </div>
        </div>
      )}
    </div>
  );
};

export default UsersPage;
