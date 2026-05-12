"use client";

import React from "react";
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer, 
  LineChart, 
  Line,
  AreaChart,
  Area
} from "recharts";
import { 
  TrendingUp, 
  Users, 
  Zap, 
  DollarSign, 
  Clock, 
  ChevronDown,
  Calendar
} from "lucide-react";

const data = [
  { name: "Mon", tokens: 2400, cost: 0.12 },
  { name: "Tue", tokens: 1398, cost: 0.08 },
  { name: "Wed", tokens: 9800, cost: 0.45 },
  { name: "Thu", tokens: 3908, cost: 0.22 },
  { name: "Fri", tokens: 4800, cost: 0.28 },
  { name: "Sat", tokens: 3800, cost: 0.18 },
  { name: "Sun", tokens: 4300, cost: 0.20 },
];

export default function AnalyticsPage() {
  return (
    <div className="p-8 max-w-7xl mx-auto flex flex-col gap-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Analytics Dashboard</h1>
          <p className="text-muted-foreground mt-1">Monitor your prompt performance, usage, and costs.</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-4 py-2 rounded-lg border border-border bg-background text-sm font-medium hover:bg-muted transition-all">
            <Calendar className="h-4 w-4" />
            Last 7 Days
            <ChevronDown className="h-3 w-3" />
          </button>
          <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-white text-sm font-medium hover:bg-primary/90 transition-all shadow-lg shadow-primary/20">
            Export Report
          </button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="p-6 rounded-2xl bg-background border border-border shadow-sm flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-muted-foreground uppercase">Total Executions</span>
            <div className="p-2 rounded-lg bg-primary/10 text-primary">
              <Zap className="h-4 w-4" />
            </div>
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-bold">12,482</span>
            <span className="text-[10px] text-emerald-500 font-bold flex items-center gap-0.5">
              <TrendingUp className="h-3 w-3" /> +14%
            </span>
          </div>
        </div>
        
        <div className="p-6 rounded-2xl bg-background border border-border shadow-sm flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-muted-foreground uppercase">Total Tokens</span>
            <div className="p-2 rounded-lg bg-secondary/10 text-secondary">
              <Zap className="h-4 w-4" />
            </div>
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-bold">842.5K</span>
            <span className="text-[10px] text-emerald-500 font-bold flex items-center gap-0.5">
              <TrendingUp className="h-3 w-3" /> +8%
            </span>
          </div>
        </div>

        <div className="p-6 rounded-2xl bg-background border border-border shadow-sm flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-muted-foreground uppercase">Estimated Cost</span>
            <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-500">
              <DollarSign className="h-4 w-4" />
            </div>
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-bold">$42.18</span>
            <span className="text-[10px] text-red-500 font-bold flex items-center gap-0.5">
              <TrendingUp className="h-3 w-3" /> +21%
            </span>
          </div>
        </div>

        <div className="p-6 rounded-2xl bg-background border border-border shadow-sm flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-muted-foreground uppercase">Avg. Latency</span>
            <div className="p-2 rounded-lg bg-amber-500/10 text-amber-500">
              <Clock className="h-4 w-4" />
            </div>
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-bold">1.4s</span>
            <span className="text-[10px] text-emerald-500 font-bold flex items-center gap-0.5">
              <TrendingUp className="h-3 w-3 translate-y-[1px] rotate-180" /> -4%
            </span>
          </div>
        </div>
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="p-8 rounded-3xl bg-background border border-border shadow-sm flex flex-col gap-6">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-bold uppercase tracking-widest">Token Usage (Daily)</h3>
          </div>
          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data}>
                <defs>
                  <linearGradient id="colorTokens" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#6366F1" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#6366F1" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#333" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fontSize: 10}} />
                <YAxis axisLine={false} tickLine={false} tick={{fontSize: 10}} />
                <Tooltip 
                  contentStyle={{ backgroundColor: "#111", border: "1px solid #333", borderRadius: "8px", fontSize: "12px" }}
                  itemStyle={{ color: "#6366F1" }}
                />
                <Area type="monotone" dataKey="tokens" stroke="#6366F1" strokeWidth={2} fillOpacity={1} fill="url(#colorTokens)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="p-8 rounded-3xl bg-background border border-border shadow-sm flex flex-col gap-6">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-bold uppercase tracking-widest">Cost Analysis ($)</h3>
          </div>
          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#333" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fontSize: 10}} />
                <YAxis axisLine={false} tickLine={false} tick={{fontSize: 10}} />
                <Tooltip 
                  contentStyle={{ backgroundColor: "#111", border: "1px solid #333", borderRadius: "8px", fontSize: "12px" }}
                  itemStyle={{ color: "#10B981" }}
                />
                <Bar dataKey="cost" fill="#10B981" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Top Prompts Table */}
      <div className="p-8 rounded-3xl bg-background border border-border shadow-sm flex flex-col gap-6">
        <h3 className="text-sm font-bold uppercase tracking-widest">Top Performing Prompts</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="border-b border-border text-muted-foreground font-medium">
              <tr>
                <th className="pb-4">Prompt Name</th>
                <th className="pb-4">Provider</th>
                <th className="pb-4">Executions</th>
                <th className="pb-4">Total Tokens</th>
                <th className="pb-4">Avg. Cost</th>
                <th className="pb-4 text-right">Rating</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {[
                { name: "Customer Support Reply", provider: "OpenAI", runs: "4,281", tokens: "248K", cost: "$0.002", rating: "4.8/5" },
                { name: "Blog Post Writer", provider: "Anthropic", runs: "1,102", tokens: "512K", cost: "$0.012", rating: "4.6/5" },
                { name: "Code Reviewer", provider: "Google", runs: "842", tokens: "124K", cost: "$0.001", rating: "4.9/5" },
              ].map((row, i) => (
                <tr key={i} className="group hover:bg-muted/30 transition-colors">
                  <td className="py-4 font-medium">{row.name}</td>
                  <td className="py-4 text-muted-foreground">{row.provider}</td>
                  <td className="py-4">{row.runs}</td>
                  <td className="py-4">{row.tokens}</td>
                  <td className="py-4">{row.cost}</td>
                  <td className="py-4 text-right font-bold text-primary">{row.rating}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
