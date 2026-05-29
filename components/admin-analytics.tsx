"use client";

import { Area, AreaChart, Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { CalendarCheck, DollarSign, Hotel, Percent, type LucideIcon } from "lucide-react";
import { analytics } from "@/lib/data";

export function AdminAnalytics() {
  const stats: Array<[LucideIcon, string, string]> = [
    [CalendarCheck, "Total Reservations", analytics.totalReservations.toLocaleString()],
    [DollarSign, "Revenue", `$${analytics.revenue.toLocaleString()}`],
    [Percent, "Occupancy", `${analytics.occupancy}%`],
    [Hotel, "Top Room", "Andean Suite"]
  ];

  return (
    <div className="grid gap-6">
      <div className="grid gap-4 md:grid-cols-4">
        {stats.map(([Icon, label, value]) => (
          <div key={String(label)} className="glass p-5">
            <Icon className="text-[#d7b56d]" size={20} />
            <p className="mt-5 text-xs uppercase tracking-[0.2em] text-white/42">{label}</p>
            <p className="mt-2 font-display text-4xl text-white">{value}</p>
          </div>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-[1fr_0.8fr]">
        <div className="glass p-6">
          <p className="text-xs uppercase tracking-[0.28em] text-[#d7b56d]">Revenue</p>
          <div className="mt-6 h-80">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={analytics.revenueTrend}>
                <defs>
                  <linearGradient id="goldRevenue" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="5%" stopColor="#d7b56d" stopOpacity={0.55} />
                    <stop offset="95%" stopColor="#d7b56d" stopOpacity={0.03} />
                  </linearGradient>
                </defs>
                <CartesianGrid stroke="rgba(255,255,255,.08)" vertical={false} />
                <XAxis dataKey="month" stroke="rgba(255,255,255,.45)" />
                <YAxis stroke="rgba(255,255,255,.45)" />
                <Tooltip contentStyle={{ background: "#080808", border: "1px solid rgba(215,181,109,.25)", color: "#fff" }} />
                <Area type="monotone" dataKey="revenue" stroke="#d7b56d" fill="url(#goldRevenue)" strokeWidth={2} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="glass p-6">
          <p className="text-xs uppercase tracking-[0.28em] text-[#d7b56d]">Most Popular Rooms</p>
          <div className="mt-6 h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={analytics.popularRooms}>
                <CartesianGrid stroke="rgba(255,255,255,.08)" vertical={false} />
                <XAxis dataKey="name" stroke="rgba(255,255,255,.45)" />
                <YAxis stroke="rgba(255,255,255,.45)" />
                <Tooltip contentStyle={{ background: "#080808", border: "1px solid rgba(215,181,109,.25)", color: "#fff" }} />
                <Bar dataKey="reservations" fill="#d7b56d" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      <div className="glass p-6">
        <p className="text-xs uppercase tracking-[0.28em] text-[#d7b56d]">Upcoming Arrivals</p>
        <div className="mt-5 grid gap-3">
          {analytics.arrivals.map((arrival) => (
            <div key={arrival.guest} className="grid gap-2 border border-white/10 bg-white/5 p-4 text-sm text-white/70 md:grid-cols-3">
              <p className="font-semibold text-white">{arrival.guest}</p>
              <p>{arrival.room}</p>
              <p className="text-[#d7b56d]">{arrival.date}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
