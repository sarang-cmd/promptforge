import React from "react";
import { 
  Library, 
  PlusCircle, 
  LayoutDashboard, 
  Settings, 
  Zap,
  Layers,
  FlaskConical,
  BarChart3,
  Users,
  ChevronDown
} from "lucide-react";

const sidebarItems = [
  { icon: LayoutDashboard, label: "Dashboard", href: "/dashboard" },
  { icon: Library, label: "Library", href: "/library" },
  { icon: FlaskConical, label: "Sandbox", href: "/sandbox" },
  { icon: Layers, label: "Components", href: "/components" },
  { icon: BarChart3, label: "Analytics", href: "/analytics" },
  { icon: Users, label: "Team", href: "/settings/members" },
  { icon: Settings, label: "Settings", href: "/settings" },
];

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen bg-background">
      {/* Sidebar */}
      <aside className="w-64 border-r border-border flex flex-col">
        <div className="p-6 flex flex-col gap-4 border-b border-border">
          <div className="flex items-center gap-2">
            <Zap className="h-6 w-6 text-primary fill-primary" />
            <span className="text-xl font-bold tracking-tight">PromptForge</span>
          </div>
          
          <div className="flex flex-col gap-1">
             <label className="text-[9px] font-bold text-muted-foreground uppercase tracking-widest px-1">Workspace</label>
             <button className="flex items-center justify-between w-full p-2 rounded-md border border-border bg-background hover:bg-muted transition-all text-xs font-medium group">
               <div className="flex items-center gap-2">
                 <div className="w-4 h-4 rounded bg-primary/20 flex items-center justify-center text-[8px] text-primary font-bold">P</div>
                 Personal
               </div>
               <ChevronDown className="h-3 w-3 text-muted-foreground group-hover:text-foreground transition-colors" />
             </button>
          </div>
        </div>
        
        <nav className="flex-1 p-4 flex flex-col gap-2">
          <button className="flex items-center gap-2 w-full bg-primary text-white rounded-md px-3 py-2 text-sm font-medium hover:bg-primary/90 transition-all mb-4 shadow-lg shadow-primary/20">
            <PlusCircle className="h-4 w-4" />
            New Prompt
          </button>
          
          {sidebarItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted transition-all"
            >
              <item.icon className="h-4 w-4" />
              {item.label}
            </a>
          ))}
        </nav>
        
        <div className="p-4 border-t border-border">
          <div className="flex items-center gap-3 px-2">
            <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-xs">
              JD
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-medium">John Doe</span>
              <span className="text-[10px] text-muted-foreground">Free Plan</span>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col overflow-hidden">
        <header className="h-16 border-b border-border flex items-center justify-between px-8 bg-background/50 backdrop-blur">
          <h2 className="text-sm font-semibold text-muted-foreground">Workspace / <span className="text-foreground">Personal</span></h2>
          <div className="flex items-center gap-4">
            <div className="relative">
              <input 
                type="text" 
                placeholder="Search prompts..." 
                className="bg-muted/50 border border-border rounded-md px-4 py-1.5 text-xs w-64 focus:outline-none focus:ring-1 focus:ring-primary transition-all"
              />
            </div>
            <div className="w-8 h-8 rounded-md border border-border flex items-center justify-center">
              <Settings className="h-4 w-4 text-muted-foreground" />
            </div>
          </div>
        </header>
        
        <div className="flex-1 overflow-auto">
          {children}
        </div>
      </main>
    </div>
  );
}
