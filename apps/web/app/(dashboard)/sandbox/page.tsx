"use client";

import React, { useState } from "react";
import { 
  Send, 
  Trash2, 
  Copy, 
  Settings, 
  Variable, 
  Clock, 
  Zap,
  RotateCcw,
  Download
} from "lucide-react";

export default function SandboxPage() {
  const [output, setOutput] = useState("Response will appear here...");
  const [isStreaming, setIsStreaming] = useState(false);

  const simulateStream = () => {
    setIsStreaming(true);
    setOutput("");
    const text = "Quantum computing is a type of computing that uses quantum-mechanical phenomena, such as superposition and entanglement. Unlike classical computers which use bits (0 or 1), quantum computers use qubits. This allows them to perform certain calculations much faster than classical computers... Imagine you have a library with millions of books. A classical computer would check every book one by one. A quantum computer could check all of them at once!";
    let i = 0;
    const interval = setInterval(() => {
      setOutput(prev => prev + text[i]);
      i++;
      if (i >= text.length) {
        clearInterval(interval);
        setIsStreaming(false);
      }
    }, 20);
  };

  return (
    <div className="h-full flex bg-background">
      {/* Left Panel - Inputs */}
      <div className="w-1/3 border-r border-border flex flex-col bg-muted/10">
        <div className="p-6 border-b border-border bg-background">
          <h1 className="text-xl font-bold tracking-tight">Testing Sandbox</h1>
          <p className="text-xs text-muted-foreground mt-1">Test prompts with dynamic variables.</p>
        </div>
        
        <div className="flex-1 overflow-auto p-6 flex flex-col gap-8">
          <section>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xs font-bold uppercase tracking-widest flex items-center gap-2">
                <Variable className="h-3.5 w-3.5 text-primary" /> Variables
              </h3>
              <button className="text-[10px] text-primary hover:underline">Clear All</button>
            </div>
            
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] font-bold">customer_name</label>
                <input type="text" placeholder="John Doe" className="bg-background border border-border rounded-md px-3 py-2 text-xs focus:ring-1 focus:ring-primary outline-none" />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] font-bold">issue_description</label>
                <textarea rows={4} placeholder="I cannot log into my account..." className="bg-background border border-border rounded-md px-3 py-2 text-xs focus:ring-1 focus:ring-primary outline-none resize-none" />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] font-bold">urgency_level</label>
                <select className="bg-background border border-border rounded-md px-3 py-2 text-xs focus:ring-1 focus:ring-primary outline-none">
                  <option>High</option>
                  <option>Medium</option>
                  <option>Low</option>
                </select>
              </div>
            </div>
          </section>

          <section className="mt-auto">
            <button 
              onClick={simulateStream}
              disabled={isStreaming}
              className="w-full flex items-center justify-center gap-2 bg-primary text-white rounded-xl py-3 text-sm font-bold hover:bg-primary/90 transition-all shadow-lg shadow-primary/20 disabled:opacity-50"
            >
              <Send className="h-4 w-4" />
              {isStreaming ? "Generating..." : "Run Prompt"}
            </button>
          </section>
        </div>
      </div>

      {/* Right Panel - Output */}
      <div className="flex-1 flex flex-col bg-muted/5">
        <div className="h-14 border-b border-border flex items-center justify-between px-6 bg-background/50 backdrop-blur">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 text-[11px] text-muted-foreground border-r border-border pr-4">
              <Zap className="h-3.5 w-3.5 text-emerald-500" />
              gpt-4o
            </div>
            <div className="flex items-center gap-2 text-[11px] text-muted-foreground">
              <Clock className="h-3.5 w-3.5" />
              Latency: <span className="text-foreground font-mono">1.2s</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button className="p-2 hover:bg-muted rounded-md text-muted-foreground" title="Copy"><Copy className="h-4 w-4" /></button>
            <button className="p-2 hover:bg-muted rounded-md text-muted-foreground" title="Reset"><RotateCcw className="h-4 w-4" /></button>
            <button className="p-2 hover:bg-muted rounded-md text-muted-foreground" title="Download"><Download className="h-4 w-4" /></button>
          </div>
        </div>

        <div className="flex-1 p-8 overflow-auto">
          <div className="max-w-3xl mx-auto">
            <div className="p-8 rounded-3xl bg-background border border-border shadow-xl min-h-[400px] relative">
              <div className="prose prose-sm dark:prose-invert max-w-none">
                <p className="whitespace-pre-wrap leading-relaxed text-foreground">
                  {output}
                  {isStreaming && <span className="inline-block w-2 h-4 bg-primary animate-pulse ml-1 align-middle" />}
                </p>
              </div>
              
              {!isStreaming && output !== "" && (
                 <div className="absolute bottom-4 right-4 flex items-center gap-2">
                   <span className="text-[10px] text-muted-foreground bg-muted px-2 py-1 rounded-full border border-border">142 tokens</span>
                   <span className="text-[10px] text-muted-foreground bg-muted px-2 py-1 rounded-full border border-border">$0.0028</span>
                 </div>
              )}
            </div>
            
            <div className="mt-8 flex items-center justify-center gap-4">
              <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-background shadow-sm">
                <span className="text-[10px] font-bold text-muted-foreground uppercase">Rate this response</span>
                <div className="flex gap-1">
                   <button className="hover:text-primary transition-colors">👍</button>
                   <button className="hover:text-primary transition-colors">👎</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
