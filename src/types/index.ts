export type UserRole = "L1" | "L2" | "Admin";

export type IncidentStatus =
    | "Received"
    | "Validating"
    | "Validated"
    | "Dispatched"
    | "Closed"
    | "Rejected";

export interface User {
    id: string;
    name: string;
    email: string;
    role: UserRole;
    center: string;
    avatar?: string;
    active: boolean;
    lastLogin: string;
}

export interface Ticket {
    id: string;
    title: string;
    description: string;
    status: IncidentStatus;
    priority: "Low" | "Medium" | "High" | "Critical";
    source: string;
    location: string;
    lat: number;
    lng: number;
    createdAt: string;
    updatedAt: string;
    assignedTo?: string;
    center: string;
    category: string;
    attachments: number;
}

export interface Resource {
    id: string;
    name: string;
    type: "Ambulance" | "Fire Truck" | "Police" | "Helicopter" | "Rescue Team";
    status: "Available" | "Dispatched" | "Maintenance" | "Offline";
    location: string;
    lat: number;
    lng: number;
    center: string;
    lastUpdated: string;
}

export interface KPIData {
    label: string;
    value: string | number;
    trend: number;
    trendLabel: string;
    color: "primary" | "success" | "warning" | "error" | "info" | "tertiary";
}

export interface AuditEntry {
    id: string;
    timestamp: string;
    user: string;
    action: string;
    entity: string;
    entityId: string;
    details: string;
}

export interface Center {
    id: string;
    name: string;
    region: string;
    operatorsL1: number;
    operatorsL2: number;
    activeIncidents: number;
    status: "Active" | "Inactive" | "Maintenance";
}