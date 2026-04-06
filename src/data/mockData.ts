import { Ticket, Resource, User, AuditEntry, Center, KPIData } from "../types";
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