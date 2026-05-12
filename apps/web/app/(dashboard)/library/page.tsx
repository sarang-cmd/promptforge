import React from "react";
import { 
  Search, 
  Filter, 
  Grid2X2, 
  List, 
  MoreVertical, 
  Star,
  Clock,
  Tag as TagIcon
} from "lucide-react";

const dummyPrompts = [
  {
    id: "1",
    name: "Customer Support Reply",
    description: "Generate empathetic and professional replies to customer inquiries.",
    provider: "OpenAI",
    model: "gpt-4o",
    lastModified: "2 hours ago",
    status: "production",
    tags: ["Support", "Email"],
  },
  {
    id: "2",
    name: "Blog Post Writer",
    description: "Create long-form SEO optimized blog posts from a few keywords.",
    provider: "Anthropic",
    model: "claude-3-5-sonnet",
    lastModified: "1 day ago",
    status: "staging",
    tags: ["Content", "SEO"],
  },
  {
    id: "3",
    name: "Code Review Assistant",
    description: "Analyze pull requests for security vulnerabilities and style issues.",
    provider: "Google",
    model: "gemini-1.5-pro",
    lastModified: "3 days ago",
    status: "review",
    tags: ["Engineering", "Review"],
  },
];

export default function LibraryPage() {
  return (
    <div className="p-8 max-w-7xl mx-auto flex flex-col gap-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Prompt Library</h1>
          <p className="text-muted-foreground mt-1">Manage and organize your team's AI prompts.</p>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex items-center border border-border rounded-md overflow-hidden bg-background">
            <button className="p-2 bg-muted text-foreground"><Grid2X2 className="h-4 w-4" /></button>
            <button className="p-2 text-muted-foreground hover:bg-muted/50"><List className="h-4 w-4" /></button>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <input 
            type="text" 
            placeholder="Search prompts by name, tag, or model..." 
            className="w-full bg-background border border-border rounded-lg pl-10 pr-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-primary transition-all"
          />
        </div>
        <button className="flex items-center gap-2 px-4 py-2 rounded-lg border border-border bg-background text-sm font-medium hover:bg-muted transition-all">
          <Filter className="h-4 w-4" />
          Filters
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {dummyPrompts.map((prompt) => (
          <div 
            key={prompt.id}
            className="group relative flex flex-col gap-4 p-5 rounded-2xl bg-background border border-border shadow-sm hover:shadow-md hover:border-primary/50 transition-all cursor-pointer"
          >
            <div className="flex items-start justify-between">
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2">
                  <h3 className="font-bold text-lg group-hover:text-primary transition-colors">{prompt.name}</h3>
                  <span className={`text-[10px] uppercase font-bold px-1.5 py-0.5 rounded ${
                    prompt.status === 'production' ? 'bg-emerald-500/10 text-emerald-500' :
                    prompt.status === 'staging' ? 'bg-amber-500/10 text-amber-500' :
                    'bg-blue-500/10 text-blue-500'
                  }`}>
                    {prompt.status}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground line-clamp-2">{prompt.description}</p>
              </div>
              <button className="p-1 hover:bg-muted rounded text-muted-foreground">
                <MoreVertical className="h-4 w-4" />
              </button>
            </div>

            <div className="flex flex-wrap gap-2 mt-auto">
              {prompt.tags.map(tag => (
                <span key={tag} className="flex items-center gap-1 text-[11px] font-medium bg-muted px-2 py-1 rounded-full text-muted-foreground">
                  <TagIcon className="h-3 w-3" />
                  {tag}
                </span>
              ))}
            </div>

            <div className="pt-4 border-t border-border flex items-center justify-between">
              <div className="flex items-center gap-3 text-[11px] text-muted-foreground">
                <div className="flex items-center gap-1">
                  <div className={`w-2 h-2 rounded-full ${
                    prompt.provider === 'OpenAI' ? 'bg-emerald-500' :
                    prompt.provider === 'Anthropic' ? 'bg-purple-500' :
                    'bg-blue-500'
                  }`} />
                  {prompt.model}
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  {prompt.lastModified}
                </div>
              </div>
              <button className="text-muted-foreground hover:text-amber-500 transition-colors">
                <Star className="h-4 w-4" />
              </button>
            </div>
          </div>
        ))}
        
        {/* Empty State / Add Card */}
        <div className="flex flex-col items-center justify-center gap-4 p-8 rounded-2xl border-2 border-dashed border-border hover:border-primary/50 hover:bg-muted/30 transition-all cursor-pointer group">
          <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center group-hover:bg-primary/10 group-hover:text-primary transition-all">
            <PlusCircle className="h-6 w-6" />
          </div>
          <div className="text-center">
            <p className="font-bold">Create New Prompt</p>
            <p className="text-xs text-muted-foreground">Start building your next AI assistant</p>
          </div>
        </div>
      </div>
    </div>
  );
}

import { PlusCircle } from "lucide-react";
