import {
  Ticket,
  Resource,
  User,
  AuditEntry,
  Center,
  KPIData,
} from "../types";

export const l1KPIs: KPIData[] = [
  {
    label: "Pending Tickets",
    value: 7,
    trend: 2,
    trendLabel: "since last hour",
    color: "error",
  },
  {
    label: "Resources Deployed",
    value: 12,
    trend: 4,
    trendLabel: "currently active",
    color: "warning",
  },
  {
    label: "Avg. Response Time",
    value: "8.5m",
    trend: -1.2,
    trendLabel: "improvement",
    color: "success",
  },
  {
    label: "Incidents Closed",
    value: 23,
    trend: 8,
    trendLabel: "today",
    color: "info",
  },
];

export const l2KPIs: KPIData[] = [
  {
    label: "Active Resources",
    value: 45,
    trend: 5,
    trendLabel: "operational",
    color: "success",
  },
  {
    label: "Response Units",
    value: 18,
    trend: 2,
    trendLabel: "en route",
    color: "warning",
  },
  {
    label: "Resource Efficiency",
    value: "92%",
    trend: 3,
    trendLabel: "vs target",
    color: "info",
  },
  {
    label: "Incidents Resolved",
    value: 56,
    trend: 12,
    trendLabel: "this week",
    color: "primary",
  },
];

export const adminKPIs: KPIData[] = [
  {
    label: "Total Users",
    value: 47,
    trend: 3,
    trendLabel: "this month",
    color: "tertiary",
  },
  {
    label: "Active Centers",
    value: 5,
    trend: 0,
    trendLabel: "no change",
    color: "success",
  },
  {
    label: "Total Incidents",
    value: 156,
    trend: 12,
    trendLabel: "this week",
    color: "primary",
  },
  {
    label: "Resource Readiness",
    value: "87%",
    trend: 2,
    trendLabel: "vs last week",
    color: "info",
  },
];

export const incidentTrendData = [
  { time: "00:00", received: 2, dispatched: 1, closed: 0 },
  { time: "02:00", received: 1, dispatched: 1, closed: 1 },
  { time: "04:00", received: 0, dispatched: 0, closed: 1 },
  { time: "06:00", received: 3, dispatched: 2, closed: 1 },
  { time: "08:00", received: 8, dispatched: 5, closed: 3 },
  { time: "10:00", received: 12, dispatched: 9, closed: 6 },
  { time: "12:00", received: 10, dispatched: 8, closed: 7 },
  { time: "14:00", received: 7, dispatched: 6, closed: 5 },
  { time: "16:00", received: 9, dispatched: 7, closed: 4 },
  { time: "18:00", received: 11, dispatched: 8, closed: 6 },
  { time: "20:00", received: 6, dispatched: 5, closed: 4 },
  { time: "22:00", received: 4, dispatched: 3, closed: 3 },
];

export const categoryData = [
  { name: "Medical", value: 35 },
  { name: "Traffic", value: 25 },
  { name: "Fire", value: 18 },
  { name: "Security", value: 12 },
  { name: "Hazmat", value: 6 },
  { name: "Other", value: 4 },
];

export const mockTickets: Ticket[] = [
  {
    id: "TK-001",
    status: "Received",
    priority: "high",
    description: "Medical emergency at downtown center",
    createdAt: new Date("2026-04-06T10:15:00"),
    location: "Downtown District",
  },
  {
    id: "TK-002",
    status: "Validating",
    priority: "critical",
    description: "Traffic incident on main highway",
    createdAt: new Date("2026-04-06T10:30:00"),
    location: "Highway 101",
  },
  {
    id: "TK-003",
    status: "Dispatched",
    priority: "medium",
    description: "Security alert at commercial area",
    createdAt: new Date("2026-04-06T10:45:00"),
    location: "Commercial District",
  },
  {
    id: "TK-004",
    status: "In Progress",
    priority: "high",
    description: "Fire alarm activation",
    createdAt: new Date("2026-04-06T11:00:00"),
    location: "Residential Area",
  },
  {
    id: "TK-005",
    status: "Closed",
    priority: "low",
    description: "Parking violation report",
    createdAt: new Date("2026-04-06T09:00:00"),
    location: "Downtown",
  },
];

export const mockResources: Resource[] = [
  {
    id: "RES-001",
    name: "Ambulance Unit 1",
    type: "Medical",
    status: "available",
    location: "Station A",
    capacity: 2,
  },
  {
    id: "RES-002",
    name: "Fire Truck 1",
    type: "Fire",
    status: "busy",
    location: "Residential Area",
    capacity: 6,
  },
  {
    id: "RES-003",
    name: "Police Unit 1",
    type: "Security",
    status: "available",
    location: "Station B",
    capacity: 2,
  },
  {
    id: "RES-004",
    name: "Ambulance Unit 2",
    type: "Medical",
    status: "available",
    location: "Station A",
    capacity: 2,
  },
  {
    id: "RES-005",
    name: "Hazmat Team",
    type: "Hazmat",
    status: "busy",
    location: "Downtown",
    capacity: 4,
  },
  {
    id: "RES-006",
    name: "Traffic Control Unit",
    type: "Traffic",
    status: "available",
    location: "Highway Station",
    capacity: 3,
  },
];

export const mockUsers: User[] = [
  {
    id: "USR-001",
    name: "Carlos Rodriguez",
    role: "L1",
    email: "carlos@emergencias.gov",
    active: true,
  },
  {
    id: "USR-002",
    name: "Maria Garcia",
    role: "L2",
    email: "maria@emergencias.gov",
    active: true,
  },
  {
    id: "USR-003",
    name: "Juan Martinez",
    role: "Admin",
    email: "juan@emergencias.gov",
    active: true,
  },
  {
    id: "USR-004",
    name: "Ana Lopez",
    role: "L1",
    email: "ana@emergencias.gov",
    active: false,
  },
  {
    id: "USR-005",
    name: "Pedro Sanchez",
    role: "L2",
    email: "pedro@emergencias.gov",
    active: true,
  },
];

export const mockCenters: Center[] = [
  {
    id: "CTR-001",
    name: "Downtown Emergency Center",
    address: "123 Main St, Downtown",
    phone: "+34 911 555 0001",
    active: true,
  },
  {
    id: "CTR-002",
    name: "North District Center",
    address: "456 North Ave, North District",
    phone: "+34 911 555 0002",
    active: true,
  },
  {
    id: "CTR-003",
    name: "South District Center",
    address: "789 South Blvd, South District",
    phone: "+34 911 555 0003",
    active: true,
  },
  {
    id: "CTR-004",
    name: "East Command Center",
    address: "101 East Rd, East District",
    phone: "+34 911 555 0004",
    active: false,
  },
  {
    id: "CTR-005",
    name: "West Response Center",
    address: "202 West Ave, West District",
    phone: "+34 911 555 0005",
    active: true,
  },
];

export const mockAuditEntries: AuditEntry[] = [
  {
    id: "AUD-001",
    user: "Carlos Rodriguez",
    action: "Ticket TK-001 validated",
    timestamp: new Date("2026-04-06T10:16:00"),
    details: "Status changed to Dispatched",
  },
  {
    id: "AUD-002",
    user: "Maria Garcia",
    action: "Resource RES-002 deployed",
    timestamp: new Date("2026-04-06T10:20:00"),
    details: "Fire Truck assigned to TK-004",
  },
  {
    id: "AUD-003",
    user: "Juan Martinez",
    action: "User permissions updated",
    timestamp: new Date("2026-04-06T09:30:00"),
    details: "Added L2 role to Ana Lopez",
  },
  {
    id: "AUD-004",
    user: "Carlos Rodriguez",
    action: "Incident TK-005 closed",
    timestamp: new Date("2026-04-06T11:45:00"),
    details: "Low priority parking violation resolved",
  },
];

// Compatibility dataset consumed by legacy pages (`IncidentsPage`, `TicketsPage`, `MapPage`).
export const mockData = {
  tickets: mockTickets.map((ticket, index) => ({
    id: ticket.id,
    title: ticket.description,
    description: ticket.description,
    status: ticket.status,
    priority:
      ticket.priority === "critical"
        ? "Critical"
        : ticket.priority === "high"
          ? "High"
          : ticket.priority === "medium"
            ? "Medium"
            : "Low",
    category: ["Medical", "Traffic", "Security", "Fire", "Other"][index % 5],
    source: "Citizen App",
    location: ticket.location,
    createdAt:
      ticket.createdAt instanceof Date
        ? ticket.createdAt.toISOString()
        : String(ticket.createdAt),
    assignedTo: index % 2 === 0 ? "Unidad Alfa" : undefined,
  })),
  incidents: mockTickets.map((ticket, index) => ({
    id: ticket.id,
    title: ticket.description,
    description: ticket.description,
    status:
      ticket.status === "In Progress"
        ? "Dispatched"
        : ticket.status === "Validating"
          ? "Validating"
          : ticket.status === "Received"
            ? "Received"
            : "Closed",
    priority:
      ticket.priority === "critical"
        ? "Critical"
        : ticket.priority === "high"
          ? "High"
          : ticket.priority === "medium"
            ? "Medium"
            : "Low",
    category: ["Medical", "Traffic", "Security", "Fire", "Other"][index % 5],
    location: ticket.location,
    assignedTo: index % 2 === 0 ? "Unidad Bravo" : undefined,
  })),
};