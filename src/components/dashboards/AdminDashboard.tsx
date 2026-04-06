import React from "react";
import { ArrowRight } from "@phosphor-icons/react";
import { mockUsers } from "../../data/mockData";

interface AdminDashboardProps {
  onNavigate: (path: string) => void;
}

const getRoleClass = (role: string): string => {
  if (role === "L1") return "bg-error text-neutral-50";
  if (role === "L2") return "bg-tertiary text-tertiary-foreground";
  return "bg-neutral-700 text-neutral-50";
};

const AdminDashboard: React.FC<AdminDashboardProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-6">
      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-base font-sans font-medium text-foreground">
            Recent Users
          </h2>
          <button
            onClick={() => onNavigate("/users")}
            className="flex items-center gap-1.5 text-sm text-primary hover:text-primary-hover font-sans transition-colors duration-150 cursor-pointer"
          >
            Manage{" "}
            <ArrowRight
              size={14}
              weight="regular"
              className="text-primary"
            />
          </button>
        </div>
        <div className="divide-y divide-border">
          {mockUsers.map((user) => (
            <button
              key={user.id}
              className="w-full px-6 py-4 flex items-center gap-4 hover:bg-neutral-50 transition-colors duration-150 cursor-pointer text-left bg-transparent border-none"
              onClick={() => onNavigate("/users")}
            >
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                <span className="text-xs font-medium text-primary-foreground font-sans">
                  {user.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </span>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-sans font-medium text-foreground">
                  {user.name}
                </p>
                <p className="text-xs text-muted-foreground font-sans truncate">
                  {user.email}
                </p>
              </div>
              <div className="flex flex-col items-end gap-1">
                <span className={`text-xs px-2 py-0.5 rounded font-sans ${getRoleClass(user.role)}`}>
                  {user.role}
                </span>
                <span
                  className={`text-xs font-sans ${
                    user.active
                      ? "text-success"
                      : "text-muted-foreground"
                  }`}
                >
                  {user.active ? "Active" : "Inactive"}
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;