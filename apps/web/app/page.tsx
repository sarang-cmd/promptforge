import React from "react";
import { Hero } from "../components/marketing/hero";
import { Sparkles, Library, Zap, Shield } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between mx-auto px-6">
          <div className="flex items-center gap-2">
            <Zap className="h-6 w-6 text-primary fill-primary" />
            <span className="text-xl font-bold tracking-tight">PromptForge</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            <a href="#" className="hover:text-primary transition-colors">Library</a>
            <a href="#" className="hover:text-primary transition-colors">Sandbox</a>
            <a href="#" className="hover:text-primary transition-colors">Pricing</a>
            <a href="#" className="hover:text-primary transition-colors">Docs</a>
          </nav>
          <div className="flex items-center gap-4">
            <button className="text-sm font-medium hover:text-primary transition-colors">Sign In</button>
            <button className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-white hover:bg-primary/90 transition-all shadow-lg shadow-primary/20">
              Get Started
            </button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        <Hero />
        
        {/* Features Section */}
        <section className="py-24 bg-muted/30">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="flex flex-col gap-4 p-6 rounded-2xl bg-background border border-border shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                  <Library className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold">Centralized Library</h3>
                <p className="text-muted-foreground">One place for all your prompts, organized, searchable, and shared across your team.</p>
              </div>
              <div className="flex flex-col gap-4 p-6 rounded-2xl bg-background border border-border shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary">
                  <Sparkles className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold">Advanced Prompt Maker</h3>
                <p className="text-muted-foreground">Visual builder with dynamic variables, few-shot examples, and model-specific tuning.</p>
              </div>
              <div className="flex flex-col gap-4 p-6 rounded-2xl bg-background border border-border shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-500">
                  <Shield className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold">Enterprise Grade</h3>
                <p className="text-muted-foreground">Version control, audit logs, RBAC, and approval workflows for production-ready AI.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border/40 py-12 bg-background">
        <div className="container mx-auto px-6 text-center">
          <p className="text-sm text-muted-foreground">© 2026 PromptForge. Built for the AI-first world.</p>
        </div>
      </footer>
    </div>
  );
}
