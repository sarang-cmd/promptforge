"use client";

import React, { useState } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { oneDark } from "@codemirror/theme-one-dark";
import { 
  Save, 
  Play, 
  Settings2, 
  Variable, 
  Layers, 
  Sparkles, 
  History,
  ChevronRight,
  Info,
  Type,
  Maximize2
} from "lucide-react";
import { extractVariables } from "../../../../lib/prompt-utils";

export default function PromptMakerPage() {
  const [systemPrompt, setSystemPrompt] = useState("You are a helpful assistant.");
  const [userPrompt, setUserPrompt] = useState("Explain {{topic}} to a {{audience}}.");
  
  const systemVars = extractVariables(systemPrompt);
  const userVars = extractVariables(userPrompt);
  const allVars = Array.from(new Set([...systemVars, ...userVars]));

  return (
    <div className="h-full flex flex-col bg-background">
      {/* Header */}
      <div className="h-14 border-b border-border flex items-center justify-between px-4 bg-muted/20">
        <div className="flex items-center gap-4">
          <div className="flex flex-col">
            <h1 className="text-sm font-bold tracking-tight">Customer Support Reply Generator</h1>
            <span className="text-[10px] text-muted-foreground flex items-center gap-1">
              v2.1.0 • <span className="text-emerald-500 font-bold uppercase">Production</span>
            </span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button className="flex items-center gap-2 px-3 py-1.5 rounded-md border border-border text-xs font-medium hover:bg-muted transition-all">
            <History className="h-3.5 w-3.5" />
            History
          </button>
          <button className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-primary text-white text-xs font-medium hover:bg-primary/90 transition-all shadow-lg shadow-primary/20">
            <Save className="h-3.5 w-3.5" />
            Save Version
          </button>
          <button className="flex items-center gap-2 px-4 py-1.5 rounded-md bg-secondary text-white text-xs font-bold hover:bg-secondary/90 transition-all shadow-lg shadow-secondary/20 ml-2">
            <Play className="h-3.5 w-3.5" />
            Run Test
          </button>
        </div>
      </div>

      <div className="flex-1 flex overflow-hidden">
        {/* Left Sidebar - Meta & Nav */}
        <aside className="w-64 border-r border-border flex flex-col bg-muted/10">
          <div className="p-4 flex flex-col gap-6">
            <section>
              <h3 className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mb-3">Navigation</h3>
              <nav className="flex flex-col gap-1">
                <button className="flex items-center justify-between px-3 py-2 rounded-md bg-primary/10 text-primary text-xs font-medium">
                  <span className="flex items-center gap-2"><Info className="h-3.5 w-3.5" /> Meta Info</span>
                  <ChevronRight className="h-3 w-3" />
                </button>
                <button className="flex items-center justify-between px-3 py-2 rounded-md hover:bg-muted text-muted-foreground text-xs font-medium">
                  <span className="flex items-center gap-2"><Variable className="h-3.5 w-3.5" /> Variables</span>
                  <span className="bg-primary/20 text-primary px-1.5 rounded text-[9px] font-bold">{allVars.length}</span>
                </button>
                {allVars.length > 0 && (
                  <div className="flex flex-col gap-1 ml-6 mt-1">
                    {allVars.map(v => (
                      <span key={v} className="text-[10px] text-muted-foreground hover:text-foreground cursor-pointer flex items-center gap-1">
                        <span className="w-1 h-1 rounded-full bg-primary" /> {v}
                      </span>
                    ))}
                  </div>
                )}
                <button className="flex items-center justify-between px-3 py-2 rounded-md hover:bg-muted text-muted-foreground text-xs font-medium">
                  <span className="flex items-center gap-2"><Layers className="h-3.5 w-3.5" /> Components</span>
                </button>
                <button className="flex items-center justify-between px-3 py-2 rounded-md hover:bg-muted text-muted-foreground text-xs font-medium">
                  <span className="flex items-center gap-2"><Sparkles className="h-3.5 w-3.5" /> AI Optimizer</span>
                </button>
              </nav>
            </section>

            <section>
              <h3 className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mb-3">Classification</h3>
              <div className="flex flex-col gap-3">
                <div className="flex flex-col gap-1">
                  <label className="text-[10px] font-medium">Category</label>
                  <select className="bg-background border border-border rounded px-2 py-1 text-xs focus:ring-1 focus:ring-primary outline-none">
                    <option>Customer Experience</option>
                    <option>Engineering</option>
                  </select>
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-[10px] font-medium">Skills</label>
                  <div className="flex flex-wrap gap-1">
                    <span className="bg-primary/10 text-primary text-[9px] px-1.5 py-0.5 rounded-full border border-primary/20">copywriting</span>
                    <span className="bg-primary/10 text-primary text-[9px] px-1.5 py-0.5 rounded-full border border-primary/20">empathy</span>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </aside>

        {/* Center - Editors */}
        <main className="flex-1 overflow-auto bg-muted/5 flex flex-col gap-6 p-6">
          <div className="flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="bg-primary/20 text-primary text-[10px] font-bold px-2 py-0.5 rounded">SYSTEM</span>
                <h3 className="text-xs font-bold text-muted-foreground">System Instructions</h3>
              </div>
              <Maximize2 className="h-3.5 w-3.5 text-muted-foreground cursor-pointer" />
            </div>
            <div className="rounded-xl overflow-hidden border border-border bg-[#282c34] shadow-xl">
              <CodeMirror
                value={systemPrompt}
                height="150px"
                theme={oneDark}
                extensions={[javascript()]}
                onChange={(value) => setSystemPrompt(value)}
                className="text-sm"
              />
            </div>
            <div className="flex items-center justify-between px-2">
              <span className="text-[10px] text-muted-foreground">Approx. 42 tokens</span>
              <button className="text-[10px] text-primary hover:underline">Improve with AI</button>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="bg-secondary/20 text-secondary text-[10px] font-bold px-2 py-0.5 rounded">USER</span>
                <h3 className="text-xs font-bold text-muted-foreground">User Prompt Template</h3>
              </div>
              <Maximize2 className="h-3.5 w-3.5 text-muted-foreground cursor-pointer" />
            </div>
            <div className="rounded-xl overflow-hidden border border-border bg-[#282c34] shadow-xl">
              <CodeMirror
                value={userPrompt}
                height="300px"
                theme={oneDark}
                extensions={[javascript()]}
                onChange={(value) => setUserPrompt(value)}
                className="text-sm"
              />
            </div>
            <div className="flex items-center justify-between px-2">
              <span className="text-[10px] text-muted-foreground">Approx. 128 tokens</span>
              <div className="flex gap-4">
                <span className="text-[10px] text-muted-foreground flex items-center gap-1">
                  <Variable className="h-3 w-3" /> {allVars.length} variables detected
                </span>
                <button className="text-[10px] text-primary hover:underline font-bold">+ Add Examples</button>
              </div>
            </div>
          </div>
        </main>

        {/* Right Sidebar - Config */}
        <aside className="w-80 border-l border-border flex flex-col bg-muted/10">
          <div className="p-4 flex flex-col gap-8">
            <section>
              <div className="flex items-center gap-2 mb-4">
                <Settings2 className="h-4 w-4 text-primary" />
                <h3 className="text-xs font-bold uppercase tracking-widest">Model Config</h3>
              </div>
              
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] font-bold text-muted-foreground">Provider</label>
                  <div className="grid grid-cols-2 gap-2">
                    <button className="flex items-center gap-2 border border-primary bg-primary/5 rounded-md p-2 text-[11px] font-medium">
                      <div className="w-2 h-2 rounded-full bg-emerald-500" /> OpenAI
                    </button>
                    <button className="flex items-center gap-2 border border-border rounded-md p-2 text-[11px] font-medium text-muted-foreground hover:bg-muted">
                      <div className="w-2 h-2 rounded-full bg-purple-500" /> Anthropic
                    </button>
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] font-bold text-muted-foreground">Model</label>
                  <select className="w-full bg-background border border-border rounded-md px-3 py-2 text-xs focus:ring-1 focus:ring-primary outline-none appearance-none">
                    <option>gpt-4o</option>
                    <option>gpt-4o-mini</option>
                    <option>o1-preview</option>
                  </select>
                </div>

                <div className="flex flex-col gap-4 py-4 border-t border-border mt-2">
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center justify-between">
                      <label className="text-[10px] font-bold">Temperature</label>
                      <span className="text-[10px] font-mono bg-muted px-1 rounded">0.7</span>
                    </div>
                    <input type="range" className="w-full accent-primary h-1.5 bg-muted rounded-full appearance-none cursor-pointer" min="0" max="2" step="0.1" defaultValue="0.7" />
                  </div>

                  <div className="flex flex-col gap-3">
                    <div className="flex items-center justify-between">
                      <label className="text-[10px] font-bold">Max Tokens</label>
                      <span className="text-[10px] font-mono bg-muted px-1 rounded">2,048</span>
                    </div>
                    <input type="range" className="w-full accent-primary h-1.5 bg-muted rounded-full appearance-none cursor-pointer" min="1" max="4096" defaultValue="2048" />
                  </div>
                </div>

                <div className="flex flex-col gap-3 pt-4 border-t border-border">
                  <div className="flex items-center justify-between">
                    <label className="text-[10px] font-bold">JSON Mode</label>
                    <div className="w-8 h-4 bg-primary rounded-full relative cursor-pointer">
                       <div className="absolute right-0.5 top-0.5 w-3 h-3 bg-white rounded-full shadow-sm" />
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <label className="text-[10px] font-bold">Stream Response</label>
                    <div className="w-8 h-4 bg-muted rounded-full relative cursor-pointer">
                       <div className="absolute left-0.5 top-0.5 w-3 h-3 bg-white rounded-full shadow-sm" />
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="mt-auto bg-primary/5 border border-primary/20 rounded-xl p-4">
               <h4 className="text-[10px] font-bold uppercase mb-2 flex items-center gap-2">
                 <Zap className="h-3 w-3 text-primary" /> Cost Estimation
               </h4>
               <div className="flex flex-col gap-1">
                 <div className="flex items-center justify-between text-[11px]">
                   <span className="text-muted-foreground">Input</span>
                   <span className="font-mono text-foreground">$0.00064</span>
                 </div>
                 <div className="flex items-center justify-between text-[11px]">
                   <span className="text-muted-foreground">Output (est.)</span>
                   <span className="font-mono text-foreground">$0.00205</span>
                 </div>
                 <div className="border-t border-primary/20 mt-2 pt-2 flex items-center justify-between text-xs font-bold">
                   <span>Total / run</span>
                   <span className="text-primary font-mono">$0.00269</span>
                 </div>
               </div>
            </section>
          </div>
        </aside>
      </div>
    </div>
  );
}
