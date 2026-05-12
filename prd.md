# Prompt Management Tool - Product Requirements Document (PRD)

---

## Table of Contents

1. [Executive Summary](#executive-summary)
2. [Product Overview](#product-overview)
3. [Problem Statement](#problem-statement)
4. [Goals & Objectives](#goals--objectives)
5. [Target Users & Personas](#target-users--personas)
6. [Tech Stack](#tech-stack)
7. [System Architecture](#system-architecture)
8. [Feature Requirements](#feature-requirements)
9. [Prompt Maker Module](#prompt-maker-module)
10. [Database Schema](#database-schema)
11. [API Design](#api-design)
12. [UI/UX Requirements](#uiux-requirements)
13. [Implementation Plan](#implementation-plan)
14. [Task Breakdown](#task-breakdown)
15. [Skills & Team Requirements](#skills--team-requirements)
16. [Testing Strategy](#testing-strategy)
17. [Security & Compliance](#security--compliance)
18. [Performance Requirements](#performance-requirements)
19. [Deployment Strategy](#deployment-strategy)
20. [Metrics & Success Criteria](#metrics--success-criteria)
21. [Risks & Mitigations](#risks--mitigations)
22. [Appendix](#appendix)

---

## 1. Executive Summary

The **Prompt Management Tool (PMT)** is a full-stack web application designed to help individuals, teams, and enterprises create, organize, version, test, and deploy AI prompts at scale. As AI becomes increasingly embedded in modern workflows, the need for a systematic, collaborative, and intelligent approach to prompt engineering has become critical.

This document outlines the complete product requirements for building a best-in-class prompt management platform that supports multiple AI providers (OpenAI, Anthropic, Google Gemini, Mistral, etc.), features a powerful **Prompt Maker** with dynamic variable injection, a library management system, skills tagging, version control, and a real-time prompt testing sandbox.

The PMT will serve as the single source of truth for all AI prompt assets within an organization, enabling reproducibility, collaboration, governance, and continuous improvement of AI interactions.

---

## 2. Product Overview

### 2.1 Product Name
**PromptForge** — *Build Better Prompts. Ship Smarter AI.*

### 2.2 Tagline
> "The GitHub for your AI Prompts."

### 2.3 Product Vision
To become the industry-standard tool for prompt engineering and management, enabling teams to treat prompts as first-class software assets with versioning, testing, collaboration, and deployment pipelines.

### 2.4 Product Mission
Empower developers, AI engineers, content creators, and business teams to craft high-quality, reusable, and version-controlled prompts that maximize the performance and reliability of AI-powered applications.

### 2.5 Core Value Propositions

| Value Prop | Description |
|---|---|
| 🗂️ **Centralized Library** | One place for all your prompts, organized and searchable |
| 🔧 **Visual Prompt Maker** | Drag-and-drop and form-based prompt construction |
| 🔄 **Version Control** | Git-like versioning for every prompt change |
| 🧪 **Live Testing Sandbox** | Test prompts against real AI models instantly |
| 👥 **Collaboration** | Team workspaces, comments, and review workflows |
| 📊 **Analytics** | Track prompt performance, cost, and quality over time |
| 🔌 **Integrations** | REST API, SDK, and webhooks for CI/CD pipeline use |
| 🏷️ **Skills & Tags** | Categorize prompts by skill, domain, and use case |

---

## 3. Problem Statement

### 3.1 Current Pain Points

#### For Individual Developers
- Prompts are scattered across Notion docs, text files, code comments, and Slack messages
- No way to track what changed between prompt versions and why performance changed
- Testing prompts requires manually copying and pasting into ChatGPT or Playground
- No templating system for reusing prompt components

#### For Teams
- No single source of truth for prompts used across multiple projects
- Knowledge silos — when an engineer leaves, their prompt knowledge goes with them
- No review or approval process for prompt changes in production
- Duplicate work across teams working on similar use cases
- No cost tracking per prompt or per team

#### For Enterprises
- Compliance and governance challenges with uncontrolled prompt proliferation
- Inability to audit what prompts are being sent to AI providers
- No role-based access control for sensitive prompts
- Lack of integration with existing CI/CD and deployment pipelines
- No observability into prompt performance degradation over time

### 3.2 Market Gap
While tools like LangChain Hub, PromptLayer, and Helicone exist, none provide a **complete**, **visual**, **team-focused** solution that combines prompt construction, management, testing, versioning, and analytics in a single unified platform with an intuitive prompt maker interface.

---

## 4. Goals & Objectives

### 4.1 Primary Goals

1. **Build a robust prompt library** with full CRUD, search, filter, and organization capabilities
2. **Create an advanced Prompt Maker** that supports dynamic variable injection, skill tagging, library imports, and model-specific configurations
3. **Implement version control** for all prompt changes with diff views and rollback capabilities
4. **Develop a real-time testing sandbox** connected to multiple AI providers
5. **Enable team collaboration** with workspaces, roles, comments, and review workflows
6. **Provide analytics and observability** on prompt usage, cost, and quality
7. **Expose a developer API and SDK** for programmatic prompt access in applications

### 4.2 Secondary Goals

- Reduce time-to-production for new AI features by 40%
- Reduce prompt-related bugs by 60% through structured testing
- Enable non-technical users to participate in prompt creation and refinement
- Establish a community marketplace for sharing public prompt templates

### 4.3 OKRs (Objectives and Key Results)

**Objective 1: Build a world-class prompt authoring experience**
- KR1: Prompt Maker supports 15+ configuration options
- KR2: Prompt creation time reduced to under 5 minutes for standard use cases
- KR3: Support for 6+ AI model providers at launch

**Objective 2: Drive team adoption and collaboration**
- KR1: 80% of registered teams have 3+ active collaborators
- KR2: Average prompt has 2+ versions within 30 days
- KR3: Comment/review feature used on 50% of prompts

**Objective 3: Deliver developer-friendly integrations**
- KR1: REST API with <200ms p95 response time
- KR2: SDK available for Python, JavaScript/TypeScript, and Go
- KR3: GitHub Action available for prompt deployment workflows

---

## 5. Target Users & Personas

### 5.1 Persona 1: Alex — The AI/ML Engineer

- **Age:** 28
- **Role:** Senior ML Engineer at a SaaS startup
- **Tech Savvy:** Very High
- **Goals:**
  - Manage 50+ prompts across different projects
  - Integrate prompt retrieval into CI/CD pipelines
  - A/B test prompt variations programmatically
- **Pain Points:**
  - Currently using YAML files in Git — no visual interface
  - No easy way to track which prompt version is in production
- **Key Features Needed:** API access, version control, testing sandbox, GitHub integration

### 5.2 Persona 2: Sarah — The Product Manager

- **Age:** 34
- **Role:** Senior PM at a fintech company
- **Tech Savvy:** Medium
- **Goals:**
  - Understand how AI features are performing
  - Participate in prompt refinement without coding
  - Get visibility into AI costs per feature
- **Pain Points:**
  - Completely dependent on engineers to make prompt changes
  - No visibility into what prompts look like or how they perform
- **Key Features Needed:** Visual prompt maker, analytics dashboard, commenting, no-code interface

### 5.3 Persona 3: Marcus — The Prompt Engineer

- **Age:** 26
- **Role:** Dedicated Prompt Engineer at an AI-first company
- **Tech Savvy:** High
- **Goals:**
  - Rapidly iterate on prompts with A/B testing
  - Build a personal library of reusable prompt components
  - Document prompt design decisions
- **Pain Points:**
  - No dedicated tooling for his role — cobbled together from multiple tools
  - Hard to share and collaborate with non-technical teammates
- **Key Features Needed:** Advanced Prompt Maker, component library, diff views, skill tagging

### 5.4 Persona 4: Linda — The Enterprise Architect

- **Age:** 45
- **Role:** Head of AI Governance at a Fortune 500
- **Tech Savvy:** Medium-High
- **Goals:**
  - Audit all prompts going to AI providers
  - Enforce approval workflows before production deployment
  - Ensure compliance with internal AI policies
- **Pain Points:**
  - No audit trail for prompt changes
  - No way to enforce review before production
- **Key Features Needed:** Audit logs, RBAC, approval workflows, enterprise SSO, compliance exports

---

## 6. Tech Stack

### 6.1 Frontend

| Technology | Version | Purpose |
|---|---|---|
| **Next.js** | 14.x (App Router) | Primary React framework with SSR/SSG support |
| **React** | 18.x | UI component library |
| **TypeScript** | 5.x | Type safety across the entire codebase |
| **Tailwind CSS** | 3.x | Utility-first CSS framework |
| **shadcn/ui** | Latest | Accessible, composable UI component system |
| **Radix UI** | Latest | Headless UI primitives |
| **Framer Motion** | 10.x | Animations and transitions |
| **CodeMirror** | 6.x | Rich code/prompt text editor with syntax highlighting |
| **Monaco Editor** | Latest | Advanced editor for JSON/YAML config |
| **React Hook Form** | 7.x | Form state management |
| **Zod** | 3.x | Schema validation (client + server) |
| **Zustand** | 4.x | Global state management |
| **TanStack Query** | 5.x | Server state, caching, and async data management |
| **TanStack Table** | 8.x | Powerful table component for prompt lists |
| **Recharts** | 2.x | Analytics charts and visualizations |
| **React DnD** | Latest | Drag-and-drop for prompt builder blocks |
| **date-fns** | 3.x | Date utilities |
| **Lucide React** | Latest | Icon library |
| **next-themes** | Latest | Dark/light mode support |
| **nuqs** | Latest | URL search params state management |

### 6.2 Backend

| Technology | Version | Purpose |
|---|---|---|
| **Node.js** | 20.x LTS | Runtime environment |
| **Next.js API Routes** | 14.x | Primary API layer (co-located with frontend) |
| **tRPC** | 11.x | End-to-end type-safe API layer |
| **Prisma** | 5.x | ORM and database toolkit |
| **PostgreSQL** | 16.x | Primary relational database |
| **Redis** | 7.x | Caching, session management, rate limiting, pub/sub |
| **BullMQ** | 5.x | Job queuing for async operations |
| **Zod** | 3.x | Server-side schema validation |
| **NextAuth.js (Auth.js)** | 5.x | Authentication and session management |
| **bcryptjs** | Latest | Password hashing |
| **jsonwebtoken** | 9.x | JWT token generation and validation |
| **Stripe** | Latest | Payment processing and subscription management |
| **Resend** | Latest | Transactional email delivery |
| **React Email** | Latest | Email template system |

### 6.3 AI Provider Integrations

| Provider | SDK | Models Supported |
|---|---|---|
| **OpenAI** | `openai` v4.x | GPT-4o, GPT-4, GPT-3.5-turbo, o1, o1-mini |
| **Anthropic** | `@anthropic-ai/sdk` | Claude 3.5 Sonnet, Claude 3 Opus, Haiku |
| **Google** | `@google/generative-ai` | Gemini 1.5 Pro, Gemini 1.5 Flash |
| **Mistral** | `@mistralai/mistralai` | Mistral Large, Mixtral 8x7B |
| **Cohere** | `cohere-ai` | Command R+, Command R |
| **Groq** | `groq-sdk` | Llama 3.1, Mixtral (ultra-fast inference) |
| **Ollama** | HTTP client | Local model support |
| **Custom/OpenAI-compatible** | HTTP client | Any OpenAI-compatible API endpoint |

### 6.4 Infrastructure & DevOps

| Technology | Purpose |
|---|---|
| **Vercel** | Frontend and API deployment (serverless) |
| **Supabase** | Managed PostgreSQL + real-time subscriptions |
| **Upstash Redis** | Serverless Redis for caching and rate limiting |
| **Cloudflare R2** | Object storage for exports, attachments |
| **Docker** | Local development containerization |
| **Docker Compose** | Multi-service local dev orchestration |
| **GitHub Actions** | CI/CD pipelines |
| **Terraform** | Infrastructure as Code (for self-hosted option) |

### 6.5 Monitoring & Observability

| Technology | Purpose |
|---|---|
| **Sentry** | Error tracking and performance monitoring |
| **PostHog** | Product analytics and feature flags |
| **Axiom** | Log management and querying |
| **Checkly** | Synthetic monitoring and uptime checks |
| **OpenTelemetry** | Distributed tracing |

### 6.6 Developer Tooling

| Technology | Purpose |
|---|---|
| **pnpm** | Fast, disk-efficient package manager |
| **Turborepo** | Monorepo build system |
| **ESLint** | Code linting |
| **Prettier** | Code formatting |
| **Husky** | Git hooks |
| **lint-staged** | Pre-commit linting |
| **Jest** | Unit and integration testing |
| **Playwright** | End-to-end testing |
| **Storybook** | Component documentation and development |
| **Conventional Commits** | Commit message standardization |
| **Changesets** | Changelog and versioning management |

### 6.7 Monorepo Structure

```
promptforge/
├── apps/
│   ├── web/                    # Next.js main application
│   ├── docs/                   # Documentation site (Nextra)
│   └── storybook/              # Component library docs
├── packages/
│   ├── ui/                     # Shared UI component library
│   ├── db/                     # Prisma schema + client
│   ├── api/                    # tRPC router definitions
│   ├── config/                 # Shared configs (ESLint, TS, Tailwind)
│   ├── sdk/                    # JavaScript/TypeScript SDK
│   └── types/                  # Shared TypeScript types
├── tooling/
│   ├── eslint/
│   ├── typescript/
│   └── tailwind/
├── .github/
│   └── workflows/
├── docker-compose.yml
├── turbo.json
└── package.json
```

---

## 7. System Architecture

### 7.1 High-Level Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                        CLIENT LAYER                             │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────────────┐  │
│  │  Next.js Web │  │  Mobile Web  │  │  SDK / API Clients   │  │
│  │  Application │  │  (Responsive)│  │  (Python, JS, Go)    │  │
│  └──────┬───────┘  └──────┬───────┘  └──────────┬───────────┘  │
└─────────┼─────────────────┼────────────────────  ┼─────────────┘
          │                 │                        │
          ▼                 ▼                        ▼
┌─────────────────────────────────────────────────────────────────┐
│                        API GATEWAY LAYER                        │
│         tRPC Routers + Next.js API Routes + REST API            │
│              Rate Limiting (Upstash) + Auth Middleware          │
└─────────────────────────────┬───────────────────────────────────┘
                              │
          ┌───────────────────┼──────────────────────┐
          ▼                   ▼                       ▼
┌──────────────────┐ ┌──────────────────┐ ┌─────────────────────┐
│   Prompt Service │ │   User Service   │ │  Analytics Service  │
│   - CRUD         │ │   - Auth         │ │  - Usage tracking   │
│   - Versioning   │ │   - Teams        │ │  - Cost calculation │
│   - Search       │ │   - Permissions  │ │  - Performance logs │
│   - Templates    │ │   - Billing      │ │  - Aggregations     │
└────────┬─────────┘ └────────┬─────────┘ └──────────┬──────────┘
         │                    │                        │
         ▼                    ▼                        ▼
┌─────────────────────────────────────────────────────────────────┐
│                       DATA LAYER                                │
│  ┌────────────────┐  ┌──────────────┐  ┌───────────────────┐   │
│  │  PostgreSQL    │  │    Redis     │  │   Cloudflare R2   │   │
│  │  (Supabase)    │  │  (Upstash)   │  │  (Object Storage) │   │
│  │  - Prompts     │  │  - Cache     │  │  - Exports        │   │
│  │  - Users       │  │  - Sessions  │  │  - Attachments    │   │
│  │  - Versions    │  │  - Rate Lmt  │  │  - Imports        │   │
│  │  - Analytics   │  │  - Queues    │  │                   │   │
│  └────────────────┘  └──────────────┘  └───────────────────┘   │
└─────────────────────────────────────────────────────────────────┘
         │
         ▼
┌─────────────────────────────────────────────────────────────────┐
│                    AI PROVIDER LAYER                            │
│  ┌──────────┐ ┌───────────┐ ┌────────┐ ┌────────┐ ┌─────────┐  │
│  │  OpenAI  │ │Anthropic  │ │ Google │ │Mistral │ │  Groq   │  │
│  │          │ │           │ │ Gemini │ │        │ │         │  │
│  └──────────┘ └───────────┘ └────────┘ └────────┘ └─────────┘  │
└─────────────────────────────────────────────────────────────────┘
```

### 7.2 Authentication Flow

```
User → Login → NextAuth.js → JWT Session → Redis Session Store
                    ↓
              OAuth Provider (Google, GitHub)
              OR
              Email/Password (bcrypt)
                    ↓
              User Record (PostgreSQL)
                    ↓
              Workspace/Team Context → RBAC Check → Feature Access
```

### 7.3 Prompt Execution Flow

```
User Configures Prompt in Maker
         ↓
Template Variables Resolved
         ↓
Prompt Compiled with Context
         ↓
Rate Limit Check (Redis)
         ↓
API Key Retrieved (encrypted from DB)
         ↓
Request Sent to AI Provider
         ↓
Response Streamed back to Client
         ↓
Execution Logged (usage, cost, latency, tokens)
         ↓
Analytics Updated
```

---

## 8. Feature Requirements

### 8.1 Authentication & User Management

#### 8.1.1 Registration & Login
- [ ] Email/password registration with email verification
- [ ] OAuth login (Google, GitHub, Microsoft)
- [ ] Magic link (passwordless) authentication
- [ ] Multi-factor authentication (TOTP)
- [ ] SSO with SAML 2.0 (Enterprise tier)
- [ ] Remember me / persistent sessions
- [ ] Account lockout after failed attempts

#### 8.1.2 User Profile
- [ ] Profile photo upload
- [ ] Display name and bio
- [ ] API key management (generate, revoke, view usage)
- [ ] Notification preferences
- [ ] Theme preference (light/dark/system)
- [ ] Default AI provider configuration
- [ ] Timezone settings

### 8.2 Workspace & Team Management

#### 8.2.1 Workspaces
- [ ] Create personal workspace (auto-created on signup)
- [ ] Create team workspaces
- [ ] Workspace settings (name, logo, description)
- [ ] Workspace-level API key management
- [ ] Usage and billing per workspace

#### 8.2.2 Team Collaboration
- [ ] Invite members via email
- [ ] Role assignment: Owner, Admin, Editor, Viewer, Billing
- [ ] Team member directory
- [ ] Activity feed (who changed what, when)
- [ ] Remove/transfer members
- [ ] Pending invitation management

#### 8.2.3 Roles & Permissions Matrix

| Permission | Owner | Admin | Editor | Viewer | Billing |
|---|---|---|---|---|---|
| Create prompts | ✅ | ✅ | ✅ | ❌ | ❌ |
| Edit prompts | ✅ | ✅ | ✅ | ❌ | ❌ |
| Delete prompts | ✅ | ✅ | ❌ | ❌ | ❌ |
| View prompts | ✅ | ✅ | ✅ | ✅ | ❌ |
| Run prompts | ✅ | ✅ | ✅ | ✅ | ❌ |
| Manage API keys | ✅ | ✅ | ❌ | ❌ | ❌ |
| Invite members | ✅ | ✅ | ❌ | ❌ | ❌ |
| Billing settings | ✅ | ❌ | ❌ | ❌ | ✅ |
| Approve prompts | ✅ | ✅ | ❌ | ❌ | ❌ |
| View analytics | ✅ | ✅ | ✅ | ✅ | ✅ |
| Delete workspace | ✅ | ❌ | ❌ | ❌ | ❌ |

### 8.3 Prompt Library

#### 8.3.1 Prompt Organization
- [ ] **Collections** — Group prompts into named folders/collections
- [ ] **Tags** — Multi-label tagging system
- [ ] **Skills** — Categorize by AI skill type (see Skills section)
- [ ] **Favorites** — Star/bookmark prompts for quick access
- [ ] **Recent** — Track recently viewed/edited prompts
- [ ] **Archived** — Soft-delete with restore capability
- [ ] **Pinned** — Pin important prompts to top of library

#### 8.3.2 Search & Discovery
- [ ] Full-text search across prompt content, title, and description
- [ ] Filter by: model, provider, tags, skills, author, date, status
- [ ] Sort by: date created, last modified, name, usage count, rating
- [ ] Semantic search (vector similarity via pgvector)
- [ ] Search history and saved searches
- [ ] Browse by category/skill
- [ ] Community template marketplace (public prompts)

#### 8.3.3 Prompt Card Display
- [ ] Prompt name and description
- [ ] Provider/model badge
- [ ] Skill tags
- [ ] Version number
- [ ] Last modified date and author
- [ ] Usage count
- [ ] Average quality rating
- [ ] Quick actions: edit, duplicate, test, share

### 8.4 Version Control

#### 8.4.1 Versioning System
- [ ] Automatic version creation on every save (semantic versioning: major.minor.patch)
- [ ] Manual version tagging with custom labels
- [ ] Version description/commit message requirement
- [ ] Version history timeline view
- [ ] Side-by-side diff viewer (content, parameters, metadata)
- [ ] Restore to any previous version
- [ ] Branch prompts (fork a version for experimentation)
- [ ] Tag versions as: Draft, Review, Staging, Production

#### 8.4.2 Diff View Features
- [ ] Syntax-highlighted diff
- [ ] Inline vs. split view options
- [ ] Show changed parameters (temperature, tokens, etc.)
- [ ] Show changed metadata (tags, description, skills)
- [ ] Author and timestamp for each version

### 8.5 Testing Sandbox

#### 8.5.1 Sandbox Features
- [ ] Real-time prompt execution against selected AI provider/model
- [ ] Streaming response display
- [ ] Variable injection UI (fill in template variables)
- [ ] Side-by-side comparison (run two prompt versions simultaneously)
- [ ] Chat mode (multi-turn conversation testing)
- [ ] Response history within session
- [ ] Export test results (JSON, CSV, Markdown)
- [ ] Share test session via URL
- [ ] Cost estimation before running
- [ ] Token count display (real-time as you type)

#### 8.5.2 Sandbox Configuration Panel
- [ ] Model selector (provider + model)
- [ ] Temperature slider (0.0 - 2.0)
- [ ] Max tokens input
- [ ] Top-P slider
- [ ] Frequency penalty
- [ ] Presence penalty
- [ ] Stop sequences
- [ ] System prompt override
- [ ] JSON mode toggle
- [ ] Seed for reproducibility

### 8.6 Analytics Dashboard

#### 8.6.1 Overview Metrics
- [ ] Total prompts in library
- [ ] Total executions (all time, 30d, 7d, 24h)
- [ ] Total tokens consumed
- [ ] Total estimated cost
- [ ] Active users
- [ ] Most used prompts
- [ ] Top-performing prompts (by quality rating)

#### 8.6.2 Per-Prompt Analytics
- [ ] Execution count over time (line chart)
- [ ] Average latency over time
- [ ] Token usage distribution
- [ ] Cost per execution
- [ ] Version performance comparison
- [ ] User satisfaction ratings
- [ ] Error rate

#### 8.6.3 Team Analytics
- [ ] Usage per team member
- [ ] Usage per collection
- [ ] Cost allocation per project
- [ ] Model usage distribution (pie chart)
- [ ] Time-series usage heatmap

---

## 9. Prompt Maker Module

> This is the centerpiece feature of PromptForge. The Prompt Maker is a rich, multi-panel interface for constructing, configuring, and testing prompts with full control over every aspect of the prompt design.

### 9.1 Prompt Maker Overview

The Prompt Maker consists of **six main panels**:

```
┌─────────────────────────────────────────────────────────────────────────┐
│  PROMPT MAKER                                              [Save] [Test] │
├──────────────┬──────────────────────────────────┬───────────────────────┤
│              │                                  │                       │
│   LEFT       │         EDITOR PANEL             │    RIGHT PANEL        │
│   SIDEBAR    │                                  │    (Config/Output)    │
│              │  ┌────────────────────────────┐  │  ┌─────────────────┐  │
│  📋 Meta     │  │   System Prompt Editor     │  │  │  Model Config   │  │
│  🏷️ Skills   │  │   (CodeMirror)             │  │  │                 │  │
│  📚 Library  │  └────────────────────────────┘  │  │  Provider ▼     │  │
│  🔧 Vars     │  ┌────────────────────────────┐  │  │  Model ▼        │  │
│  📦 Blocks   │  │   User Prompt Editor       │  │  │  Temperature    │  │
│  🌐 Context  │  │   (CodeMirror)             │  │  │  Max Tokens     │  │
│              │  └────────────────────────────┘  │  │  Top-P          │  │
│              │  ┌────────────────────────────┐  │  │  ...            │  │
│              │  │   Assistant Prefill        │  │  └─────────────────┘  │
│              │  │   (Optional)               │  │  ┌─────────────────┐  │
│              │  └────────────────────────────┘  │  │  Variables      │  │
│              │                                  │  │  Preview        │  │
│              │                                  │  └─────────────────┘  │
├──────────────┴──────────────────────────────────┴───────────────────────┤
│                         BOTTOM PANEL (Test Output / History)            │
└─────────────────────────────────────────────────────────────────────────┘
```

### 9.2 Prompt Maker Input Fields

#### 9.2.1 Meta Information Panel

```typescript
interface PromptMeta {
  // Basic Info
  name: string;                    // Required: Human-readable prompt name
  slug: string;                    // Auto-generated, editable URL slug
  description: string;             // Markdown-supported description
  version: string;                 // Semantic version (auto-incremented)
  versionMessage: string;          // Commit-style message for this version
  status: PromptStatus;            // draft | review | staging | production | archived

  // Classification
  skills: Skill[];                 // Multi-select from skills taxonomy
  tags: string[];                  // Free-form tags
  category: Category;              // High-level category
  useCase: string;                 // Short description of intended use
  domain: Domain;                  // Industry/domain classification
  language: string;                // Primary language (en, es, fr, etc.)

  // Visibility
  visibility: 'private' | 'team' | 'public';
  isTemplate: boolean;             // Mark as reusable template
  isFeatured: boolean;             // Admin-controlled feature flag

  // Ownership
  workspaceId: string;
  authorId: string;
  collaborators: string[];         // User IDs of collaborators
}
```

#### 9.2.2 Model Configuration Panel

```typescript
interface ModelConfig {
  // Provider Selection
  provider: AIProvider;            // openai | anthropic | google | mistral | cohere | groq | ollama | custom
  model: string;                   // Model identifier (e.g., "gpt-4o", "claude-3-5-sonnet-20241022")
  apiKeySource: 'workspace' | 'user' | 'custom';

  // Generation Parameters
  temperature: number;             // 0.0 - 2.0 (default: 1.0)
  maxTokens: number;               // 1 - 128000+ (model dependent)
  topP: number;                    // 0.0 - 1.0 (default: 1.0)
  topK: number;                    // 1 - 100 (for supported models)
  frequencyPenalty: number;        // -2.0 - 2.0 (OpenAI)
  presencePenalty: number;         // -2.0 - 2.0 (OpenAI)
  repetitionPenalty: number;       // 1.0 - 2.0 (Mistral, Cohere)
  stopSequences: string[];         // Up to 4 stop sequences
  seed: number | null;             // For reproducibility

  // Response Format
  responseFormat: 'text' | 'json_object' | 'json_schema';
  jsonSchema: object | null;       // For structured output
  stream: boolean;                 // Enable streaming responses

  // Context
  contextWindow: number;           // Auto-populated based on model
  estimatedCostPerRun: number;     // Calculated based on prompt + expected output tokens
}
```

#### 9.2.3 Prompt Content Editors

```typescript
interface PromptContent {
  // Core Sections
  systemPrompt: string;            // System-level instructions (Markdown + template vars)
  userPrompt: string;              // User message template (Markdown + template vars)
  assistantPrefill: string;        // Optional prefill for assistant response (Anthropic)

  // Few-Shot Examples
  examples: FewShotExample[];      // Array of input/output examples

  // Chain of Thought
  chainOfThought: boolean;         // Add CoT instruction
  chainOfThoughtStyle: 'none' | 'brief' | 'detailed' | 'xml-tags';

  // Output Instructions
  outputFormat: string;            // Instructions for output format
  outputConstraints: string[];     // List of constraints on the output
  tone: ToneOption;               // formal | casual | technical | friendly | professional
  persona: string;                 // Optional persona/role for the AI
}

interface FewShotExample {
  id: string;
  userInput: string;
  expectedOutput: string;
  description?: string;
  isActive: boolean;
}
```

#### 9.2.4 Variables & Template System

```typescript
interface TemplateVariable {
  id: string;
  name: string;                    // Variable name (used in {{variable_name}})
  displayName: string;             // Human-readable label
  description: string;             // Explain what this variable represents
  type: VariableType;              // text | number | boolean | select | multiselect | date | json | file
  defaultValue: any;              // Default value if not provided
  required: boolean;               // Whether this variable must be provided
  validation: VariableValidation;  // Validation rules
  options: string[];               // For select/multiselect types
  placeholder: string;             // Input placeholder text
  group: string;                   // Group related variables together
  order: number;                   // Display order
}

type VariableType =
  | 'text'
  | 'textarea'
  | 'number'
  | 'boolean'
  | 'select'
  | 'multiselect'
  | 'date'
  | 'datetime'
  | 'json'
  | 'code'
  | 'file_content'
  | 'url'
  | 'email';

interface VariableValidation {
  minLength?: number;
  maxLength?: number;
  min?: number;
  max?: number;
  pattern?: string;               // Regex pattern
  customMessage?: string;         // Custom error message
}
```

#### 9.2.5 Skills Taxonomy

```typescript
type SkillCategory =
  // Writing & Content
  | 'copywriting'
  | 'content_creation'
  | 'blog_writing'
  | 'technical_writing'
  | 'creative_writing'
  | 'email_writing'
  | 'social_media'
  | 'seo_writing'
  | 'scriptwriting'
  | 'storytelling'

  // Analysis & Research
  | 'data_analysis'
  | 'research'
  | 'summarization'
  | 'fact_checking'
  | 'sentiment_analysis'
  | 'competitive_analysis'
  | 'document_analysis'

  // Code & Engineering
  | 'code_generation'
  | 'code_review'
  | 'debugging'
  | 'code_documentation'
  | 'test_generation'
  | 'code_explanation'
  | 'refactoring'
  | 'api_design'
  | 'architecture_review'

  // Business & Productivity
  | 'meeting_notes'
  | 'project_planning'
  | 'task_extraction'
  | 'decision_making'
  | 'risk_assessment'
  | 'proposal_writing'
  | 'report_generation'

  // Customer Experience
  | 'customer_support'
  | 'faq_generation'
  | 'complaint_handling'
  | 'onboarding'
  | 'chatbot_dialog'

  // AI/ML Specific
  | 'prompt_chaining'
  | 'rag_query'
  | 'agent_system'
  | 'function_calling'
  | 'structured_output'
  | 'classification'
  | 'extraction'
  | 'translation'

  // Domain Specific
  | 'legal'
  | 'medical'
  | 'finance'
  | 'education'
  | 'marketing'
  | 'hr'
  | 'sales'
  | 'product_management'
  | 'design';
```

#### 9.2.6 Libraries & Dependencies Panel

```typescript
interface PromptLibrary {
  // Reusable Prompt Components
  components: PromptComponent[];   // Imported prompt blocks/snippets

  // External Context
  contextDocuments: ContextDocument[];  // Upload/link context documents

  // Prompt Chaining
  chainedPrompts: ChainedPrompt[];      // Other prompts this depends on

  // Functions/Tools
  tools: AITool[];                      // Function definitions for tool use
}

interface PromptComponent {
  id: string;
  name: string;
  content: string;                 // The reusable text block
  insertPosition: 'system' | 'user' | 'assistant' | 'examples';
  isActive: boolean;
  order: number;
}

interface AITool {
  name: string;
  description: string;
  parameters: JSONSchema;          // JSON Schema for tool parameters
  returnType: string;
  isRequired: boolean;
}

interface ContextDocument {
  id: string;
  name: string;
  type: 'url' | 'text' | 'file';
  content: string;
  maxChars: number;                // Truncation limit
  insertionStrategy: 'prepend' | 'append' | 'variable';
  variableName?: string;           // If inserting as a variable
}
```

### 9.3 Prompt Maker — Advanced Features

#### 9.3.1 Block-Based Editor Mode

The Prompt Maker supports a **Block Mode** where prompts are built from draggable blocks:

```
Available Blocks:
┌──────────────────┐  ┌──────────────────┐  ┌──────────────────┐
│  📝 Text Block   │  │  🔧 Variable     │  │  💡 Example      │
│  Static text     │  │  {{var_name}}    │  │  Input/Output    │
└──────────────────┘  └──────────────────┘  └──────────────────┘

┌──────────────────┐  ┌──────────────────┐  ┌──────────────────┐
│  📄 Context      │  │  🧩 Component    │  │  ⚙️ Instruction  │
│  Document insert │  │  Saved snippet   │  │  Task directive  │
└──────────────────┘  └──────────────────┘  └──────────────────┘

┌──────────────────┐  ┌──────────────────┐  ┌──────────────────┐
│  🎭 Persona      │  │  📊 Format Spec  │  │  ⛓️ Chain Step   │
│  Role definition │  │  Output format   │  │  Next prompt     │
└──────────────────┘  └──────────────────┘  └──────────────────┘

┌──────────────────┐  ┌──────────────────┐
│  🛑 Constraint   │  │  💭 CoT Trigger  │
│  Boundary rules  │  │  Think step-by-  │
│                  │  │  step...         │
└──────────────────┘  └──────────────────┘
```

#### 9.3.2 Prompt Generator (AI-Assisted Creation)

```
┌─────────────────────────────────────────────────────────┐
│  🤖 AI Prompt Generator                                 │
│                                                         │
│  Describe what you want the AI to do:                   │
│  ┌─────────────────────────────────────────────────┐   │
│  │ I want a prompt that analyzes customer feedback │   │
│  │ and extracts key themes, sentiment, and action  │   │
│  │ items in a structured JSON format...            │   │
│  └─────────────────────────────────────────────────┘   │
│                                                         │
│  Target Audience: [Developers ▼]                       │
│  Tone: [Professional ▼]                                │
│  Output Format: [JSON ▼]                               │
│  Complexity: [●●●○○] Intermediate                      │
│                                                         │
│  Advanced Options:
│  ✅ Include few-shot examples                          │
│  ✅ Add chain-of-thought                               │
│  ☐ Add XML tags                                        │
│  ✅ Include output constraints                         │
│                                                         │
│              [✨ Generate Prompt]                       │
└─────────────────────────────────────────────────────────┘
```

#### 9.3.3 Prompt Optimizer

```
┌─────────────────────────────────────────────────────────┐
│  🔍 Prompt Optimizer                                    │
│                                                         │
│  Optimization Goals:                                    │
│  ✅ Reduce token count           Current: 847 tokens    │
│  ✅ Improve instruction clarity                         │
│  ✅ Add better output constraints                       │
│  ☐  Convert to XML format (Anthropic)                   │
│  ☐  Add role/persona                                    │
│                                                         │
│  Target Model: [Claude 3.5 Sonnet ▼]                   │
│                                                         │
│  Suggestions:                                           │
│  ⚠️  Line 3: Ambiguous instruction - suggest rewrite    │
│  💡 Line 7: Can be condensed by 45 tokens              │
│  ✅ Line 12: Good specific instruction                  │
│  💡 Missing: Output format specification               │
│                                                         │
│  [Apply All Suggestions]  [Review Each]  [Ignore]      │
└─────────────────────────────────────────────────────────┘
```

### 9.4 Prompt Maker — Complete Form Specification

Below is the complete specification for every input the Prompt Maker accepts:

```markdown
## SECTION 1: BASIC INFORMATION
─────────────────────────────────────────────
Field: Prompt Name *
  Type: text input
  Placeholder: "e.g., Customer Support Reply Generator"
  Validation: 3-100 chars, required
  Help: "Give your prompt a clear, descriptive name"

Field: Slug *
  Type: text input (auto-generated from name)
  Placeholder: "customer-support-reply-generator"
  Validation: Lowercase, hyphens only, 3-60 chars
  Help: "Used in API calls: GET /api/prompts/{slug}"

Field: Description
  Type: textarea (Markdown)
  Placeholder: "Describe what this prompt does, when to use it, and any important notes..."
  Max: 2000 chars
  Help: "Supports Markdown formatting"

Field: Use Case
  Type: text input
  Placeholder: "e.g., Generate empathetic customer support replies from ticket data"
  Max: 200 chars

Field: Status *
  Type: select
  Options: Draft | Review | Staging | Production | Deprecated | Archived
  Default: Draft

Field: Visibility *
  Type: radio
  Options: 
    - Private (only you)
    - Team (workspace members)
    - Public (community marketplace)
  Default: Private

Field: Is Template
  Type: toggle
  Default: false
  Help: "Mark as reusable template others can duplicate"

## SECTION 2: CLASSIFICATION
─────────────────────────────────────────────
Field: Category *
  Type: select
  Options: 
    Content Creation | Code & Engineering | Data Analysis | 
    Business | Customer Experience | Research | Education |
    Creative | Automation | Other

Field: Skills *
  Type: multi-select with search (from SkillCategory taxonomy)
  Min: 1, Max: 10
  Placeholder: "Search and select skills..."

Field: Tags
  Type: tag input (free-form)
  Max: 20 tags, 30 chars each
  Placeholder: "Add tags and press Enter..."

Field: Domain
  Type: select
  Options:
    General | Technology | Finance | Healthcare | Legal | 
    Marketing | Education | E-commerce | Media | HR | 
    Real Estate | Manufacturing | Government | Other

Field: Language
  Type: select (ISO 639-1 codes)
  Default: English (en)
  Options: 50+ languages

## SECTION 3: MODEL CONFIGURATION
─────────────────────────────────────────────
Field: AI Provider *
  Type: select with logo icons
  Options:
    🟢 OpenAI
    🟣 Anthropic
    🔵 Google (Gemini)
    🟠 Mistral AI
    🩷 Cohere
    ⚡ Groq
    🏠 Ollama (Local)
    ⚙️  Custom (OpenAI-compatible)

Field: Model *
  Type: select (dynamically populated based on Provider)
  Options vary by provider (e.g., for OpenAI):
    - gpt-4o (128k context)
    - gpt-4o-mini (128k context)
    - gpt-4-turbo (128k context)
    - gpt-4 (8k context)
    - gpt-3.5-turbo (16k context)
    - o1-preview (128k context)
    - o1-mini (128k context)

Field: API Key Source
  Type: select
  Options:
    - Use workspace API key
    - Use my personal API key
    - Custom API key (input field appears)

Field: Temperature
  Type: slider + number input
  Range: 0.0 - 2.0
  Default: 1.0
  Step: 0.01
  Help: "Higher = more creative/random. Lower = more deterministic"

Field: Max Output Tokens
  Type: number input with slider
  Range: 1 - [model max]
  Default: 1024
  Help: "Maximum number of tokens in the response"

Field: Top-P (Nucleus Sampling)
  Type: slider + number input
  Range: 0.0 - 1.0
  Default: 1.0
  Step: 0.01
  Help: "Alternative to temperature. Only use one, not both."

Field: Top-K
  Type: number input
  Range: 1 - 100
  Default: null (disabled)
  Visibility: Show for: Google Gemini, Anthropic, Mistral
  Help: "Limits token selection to top K tokens"

Field: Frequency Penalty
  Type: slider + number input
  Range: -2.0 - 2.0
  Default: 0
  Visibility: Show for: OpenAI
  Help: "Penalizes tokens based on frequency in output"

Field: Presence Penalty
  Type: slider + number input
  Range: -2.0 - 2.0
  Default: 0
  Visibility: Show for: OpenAI

Field: Stop Sequences
  Type: tag input
  Max: 4 sequences
  Placeholder: "Add stop sequence..."

Field: Seed
  Type: number input
  Placeholder: "Leave empty for random"
  Help: "Use same seed for reproducible outputs"

Field: Response Format
  Type: select
  Options:
    - Text (default)
    - JSON Object
    - JSON Schema (with schema editor)

Field: JSON Schema (conditional)
  Type: Monaco Editor (JSON)
  Visibility: Show when Response Format = "JSON Schema"

Field: Enable Streaming
  Type: toggle
  Default: true

## SECTION 4: PROMPT CONTENT
─────────────────────────────────────────────
Field: System Prompt
  Type: CodeMirror editor (rich text + template syntax highlighting)
  Placeholder: "You are a helpful assistant that..."
  Features:
    - Template variable highlighting {{variable}}
    - Markdown preview toggle
    - Line numbers
    - Find/replace
    - Token counter (live)
    - AI assist (improve, shorten, expand)
    - Format button

Field: User Prompt Template
  Type: CodeMirror editor
  Placeholder: "{{user_input}}\n\nPlease help me with..."
  Features: Same as System Prompt

Field: Assistant Prefill
  Type: CodeMirror editor (smaller)
  Placeholder: "Here is my analysis:\n"
  Visibility: Show for Anthropic (recommended) and others optionally
  Help: "The AI will continue from this text"

Field: Enable Chain of Thought
  Type: toggle
  Default: false

Field: Chain of Thought Style (conditional)
  Type: select
  Options:
    - Brief ("Think step by step.")
    - Detailed ("Let's think through this carefully, step by step.")
    - XML Tags ("<thinking>...</thinking><answer>...</answer>")
    - Custom (text input)
  Visibility: Show when CoT enabled

Field: Output Format Instructions
  Type: textarea
  Placeholder: "Return a JSON object with keys: 'summary', 'sentiment', 'action_items'"
  Help: "Describe the expected format of the output"

Field: Output Constraints
  Type: tag input (each tag = one constraint)
  Placeholder: "e.g., Do not include personal information"
  Max: 20 constraints

Field: Tone
  Type: select with preview
  Options:
    Professional | Casual | Friendly | Formal | Technical | 
    Empathetic | Direct | Academic | Creative | Humorous

Field: Persona / Role
  Type: text input
  Placeholder: "e.g., You are a senior software engineer with 15 years of experience..."
  Help: "Define the AI's persona for this prompt"

## SECTION 5: FEW-SHOT EXAMPLES
─────────────────────────────────────────────
Field: Examples (repeatable)
  Type: dynamic form array
  Add/remove examples
  Per example:
    - Description (optional): text input
    - User Input *: textarea
    - Expected Output *: textarea
    - Active: toggle (include/exclude without deleting)

## SECTION 6: VARIABLES
─────────────────────────────────────────────
Field: Template Variables (auto-detected + manual)
  Type: dynamic form (auto-populated by scanning prompt content for {{var}})
  Per variable:
    - Name * (auto from {{...}})
    - Display Name *
    - Description
    - Type * (text|textarea|number|boolean|select|multiselect|date|json|code)
    - Required (toggle)
    - Default Value
    - Placeholder
    - Validation Rules:
        - Min/Max length (for text)
        - Min/Max value (for numbers)
        - Regex pattern
        - Custom error message
    - Options (for select/multiselect) - add/remove
    - Group (for organizing variables in UI)

## SECTION 7: LIBRARIES & COMPONENTS
─────────────────────────────────────────────
Field: Imported Components
  Type: searchable multi-select from component library
  Per component:
    - Component reference
    - Insertion position (system|user|prepend|append)
    - Order

Field: Context Documents
  Type: multi-item form
  Per document:
    - Name
    - Source (URL | Paste Text | Upload File)
    - Content (based on source)
    - Max Characters (slider)
    - Insertion Strategy (prepend|append|as variable)
    - Variable Name (if "as variable")

Field: Tool Definitions (Function Calling)
  Type: JSON editor (Monaco) + form hybrid
  Per tool:
    - Tool Name
    - Description
    - Parameters (JSON Schema editor)
    - Required parameters (multi-select from defined params)
  Tool Choice: auto | none | required | specific tool name

Field: Chained Prompts
  Type: searchable select from prompt library
  Per chain:
    - Prompt reference
    - Chain type (sequential | parallel | conditional)
    - Condition (for conditional chains)
    - Input mapping (how output maps to next prompt's variables)

## SECTION 8: ADVANCED SETTINGS
─────────────────────────────────────────────
Field: Retry Configuration
  Type: form group
  - Max Retries: number (0-5)
  - Retry On: multiselect (rate_limit|timeout|error|empty_response)
  - Backoff Strategy: select (linear|exponential|fixed)
  - Retry Delay (ms): number

Field: Timeout
  Type: number input
  Default: 30000 (30 seconds)
  Help: "Request timeout in milliseconds"

Field: Fallback Model
  Type: select (from available models)
  Help: "Use this model if primary model fails"

Field: Caching
  Type: toggle + config
  - Enable Response Caching: toggle
  - Cache TTL (seconds): number
  - Cache Key Strategy: select (exact_match|semantic_similarity)
  - Similarity Threshold: slider (0.0-1.0) [if semantic]

Field: Rate Limiting
  Type: form group
  - Max Calls Per Minute: number
  - Max Calls Per Hour: number
  - Max Calls Per Day: number

Field: Cost Controls
  Type: form group
  - Max Cost Per Run ($): number
  - Monthly Budget Limit ($): number
  - Alert At (% of budget): slider

Field: Logging Level
  Type: select
  Options: None | Basic | Detailed | Debug
  Help: "What data to log for each execution"

Field: PII Detection
  Type: toggle
  Help: "Scan inputs/outputs for PII and warn/block"

Field: Custom Headers
  Type: key-value pairs
  For custom/self-hosted model endpoints

Field: Custom Base URL
  Type: URL input
  Visibility: Show when Provider = "Custom"

## SECTION 9: COLLABORATION SETTINGS
─────────────────────────────────────────────
Field: Reviewers
  Type: user multi-select
  Help: "Users who must approve before status changes to Production"

Field: Review Required
  Type: toggle
  Help: "Require approval before publishing to Production"

Field: Notify On
  Type: multi-select
  Options: Version Created | Status Changed | Comment Added | Run Failed

Field: Collaborators
  Type: user multi-select with role
  Options per user: Editor | Viewer | Commenter

## SECTION 10: PROMPT TESTING CONFIGURATION
─────────────────────────────────────────────
Field: Test Cases
  Type: dynamic form array
  Per test case:
    - Name
    - Variable values (auto-generated form from defined variables)
    - Expected output (optional, for eval)
    - Evaluation criteria:
        * Contains text: list of expected strings
        * Not contains: list of forbidden strings
        * JSON valid: toggle
        * JSON matches schema: toggle
        * Max length: number
        * Min length: number
        * Sentiment: select (positive|negative|neutral|any)
        * Custom eval prompt: textarea
    - Tags

Field: Evaluation Model
  Type: select
  Help: "Model used to evaluate test output quality"
  Default: GPT-4o

Field: Run All Tests On Save
  Type: toggle
  Default: false
```

### 9.5 Prompt Maker — Keyboard Shortcuts

| Shortcut | Action |
|---|---|
| `Ctrl/Cmd + S` | Save current version |
| `Ctrl/Cmd + Enter` | Run prompt in sandbox |
| `Ctrl/Cmd + Shift + V` | Preview with variables |
| `Ctrl/Cmd + D` | Duplicate prompt |
| `Ctrl/Cmd + Z` | Undo |
| `Ctrl/Cmd + Shift + Z` | Redo |
| `Ctrl/Cmd + K` | Open command palette |
| `Ctrl/Cmd + /` | Toggle comment |
| `Ctrl/Cmd + Shift + T` | Run test suite |
| `Ctrl/Cmd + Shift + P` | Open prompt optimizer |
| `Ctrl/Cmd + B` | Toggle block mode |
| `F11` | Toggle fullscreen editor |

---

## 10. Database Schema

### 10.1 Core Tables

```sql
-- Users
CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email VARCHAR(255) UNIQUE NOT NULL,
  email_verified_at TIMESTAMPTZ,
  password_hash VARCHAR(255),
  display_name VARCHAR(100) NOT NULL,
  avatar_url TEXT,
  bio TEXT,
  timezone VARCHAR(50) DEFAULT 'UTC',
  theme VARCHAR(10) DEFAULT 'system',
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  last_login_at TIMESTAMPTZ,
  is_active BOOLEAN DEFAULT true,
  is_admin BOOLEAN DEFAULT false
);

-- OAuth Accounts
CREATE TABLE oauth_accounts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  provider VARCHAR(50) NOT NULL,
  provider_account_id VARCHAR(255) NOT NULL,
  access_token TEXT,
  refresh_token TEXT,
  expires_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(provider, provider_account_id)
);

-- Workspaces
CREATE TABLE workspaces (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name VARCHAR(100) NOT NULL,
  slug VARCHAR(60) UNIQUE NOT NULL,
  description TEXT,
  logo_url TEXT,
  owner_id UUID REFERENCES users(id),
  plan VARCHAR(20) DEFAULT 'free',
  stripe_customer_id VARCHAR(255),
  stripe_subscription_id VARCHAR(255),
  monthly_token_limit BIGINT DEFAULT 1000000,
  monthly_token_used BIGINT DEFAULT 0,
  settings JSONB DEFAULT '{}',
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Workspace Members
CREATE TABLE workspace_members (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  workspace_id UUID REFERENCES workspaces(id) ON DELETE CASCADE,
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  role VARCHAR(20) NOT NULL DEFAULT 'viewer',
  invited_by UUID REFERENCES users(id),
  invited_at TIMESTAMPTZ DEFAULT NOW(),
  joined_at TIMESTAMPTZ,
  UNIQUE(workspace_id, user_id)
);

-- API Keys (for workspace API access)
CREATE TABLE api_keys (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  workspace_id UUID REFERENCES workspaces(id) ON DELETE CASCADE,
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  name VARCHAR(100) NOT NULL,
  key_hash VARCHAR(255) UNIQUE NOT NULL,
  key_prefix VARCHAR(10) NOT NULL,
  last_used_at TIMESTAMPTZ,
  expires_at TIMESTAMPTZ,
  scopes TEXT[] DEFAULT '{"read","write"}',
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Provider API Keys (encrypted)
CREATE TABLE provider_api_keys (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  workspace_id UUID REFERENCES workspaces(id) ON DELETE CASCADE,
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  provider VARCHAR(50) NOT NULL,
  name VARCHAR(100),
  encrypted_key TEXT NOT NULL,
  is_default BOOLEAN DEFAULT false,
  is_verified BOOLEAN DEFAULT false,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Collections (Folders)
CREATE TABLE collections (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  workspace_id UUID REFERENCES workspaces(id) ON DELETE CASCADE,
  parent_id UUID REFERENCES collections(id),
  name VARCHAR(100) NOT NULL,
  description TEXT,
  color VARCHAR(7),
  icon VARCHAR(50),
  order_index INTEGER DEFAULT 0,
  created_by UUID REFERENCES users(id),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Prompts
CREATE TABLE prompts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  workspace_id UUID REFERENCES workspaces(id) ON DELETE CASCADE,
  collection_id UUID REFERENCES collections(id),
  author_id UUID REFERENCES users(id),
  
  -- Basic Info
  name VARCHAR(100) NOT NULL,
  slug VARCHAR(60) NOT NULL,
  description TEXT,
  use_case TEXT,
  
  -- Classification
  category VARCHAR(50),
  domain VARCHAR(50),
  language VARCHAR(10) DEFAULT 'en',
  skills TEXT[] DEFAULT '{}',
  tags TEXT[] DEFAULT '{}',
  
  -- Status & Visibility
  status VARCHAR(20) DEFAULT 'draft',
  visibility VARCHAR(20) DEFAULT 'private',
  is_template BOOLEAN DEFAULT false,
  is_featured BOOLEAN DEFAULT false,
  is_pinned BOOLEAN DEFAULT false,
  
  -- Current Version Reference
  current_version_id UUID,
  
  -- Stats
  execution_count INTEGER DEFAULT 0,
  fork_count INTEGER DEFAULT 0,
  star_count INTEGER DEFAULT 0,
  average_rating DECIMAL(3,2),
  
  -- Metadata
  forked_from UUID REFERENCES prompts(id),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  archived_at TIMESTAMPTZ,
  
  UNIQUE(workspace_id, slug)
);

-- Prompt Versions
CREATE TABLE prompt_versions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  prompt_id UUID REFERENCES prompts(id) ON DELETE CASCADE,
  version_number VARCHAR(20) NOT NULL,
  version_label VARCHAR(50),
  commit_message TEXT,
  status VARCHAR(20) DEFAULT 'draft',
  
  -- Model Config (JSONB for flexibility)
  provider VARCHAR(50),
  model VARCHAR(100),
  model_config JSONB DEFAULT '{}',
  
  -- Prompt Content
  system_prompt TEXT,
  user_prompt TEXT,
  assistant_prefill TEXT,
  
  -- Advanced Config
  variables JSONB DEFAULT '[]',
  examples JSONB DEFAULT '[]',
  tools JSONB DEFAULT '[]',
  chain_config JSONB DEFAULT '{}',
  output_config JSONB DEFAULT '{}',
  retry_config JSONB DEFAULT '{}',
  cache_config JSONB DEFAULT '{}',
  
  -- Stats
  token_count_system INTEGER,
  token_count_user INTEGER,
  estimated_cost_per_run DECIMAL(10,6),
  
  -- Metadata
  created_by UUID REFERENCES users(id),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  
  UNIQUE(prompt_id, version_number)
);

-- Add FK after both tables exist
ALTER TABLE prompts ADD CONSTRAINT fk_current_version 
  FOREIGN KEY (current_version_id) REFERENCES prompt_versions(id);

-- Prompt Executions (Logs)
CREATE TABLE prompt_executions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  prompt_id UUID REFERENCES prompts(id),
  version_id UUID REFERENCES prompt_versions(id),
  workspace_id UUID REFERENCES workspaces(id),
  user_id UUID REFERENCES users(id),
  
  -- Execution Details
  provider VARCHAR(50) NOT NULL,
  model VARCHAR(100) NOT NULL,
  resolved_system_prompt TEXT,
  resolved_user_prompt TEXT,
  response_content TEXT,
  
  -- Performance
  input_tokens INTEGER,
  output_tokens INTEGER,
  total_tokens INTEGER,
  latency_ms INTEGER,
  cost_usd DECIMAL(10,8),
  
  -- Status
  status VARCHAR(20) DEFAULT 'success',
  error_message TEXT,
  finish_reason VARCHAR(50),
  
  -- Context
  variable_values JSONB DEFAULT '{}',
  metadata JSONB DEFAULT '{}',
  
  -- Environment
  environment VARCHAR(20) DEFAULT 'sandbox',
  api_key_id UUID REFERENCES api_keys(id),
  
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Tags (normalized)
CREATE TABLE tags (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  workspace_id UUID REFERENCES workspaces(id),
  name VARCHAR(50) NOT NULL,
  color VARCHAR(7),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(workspace_id, name)
);

-- Prompt Stars/Favorites
CREATE TABLE prompt_stars (
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  prompt_id UUID REFERENCES prompts(id) ON DELETE CASCADE,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  PRIMARY KEY(user_id, prompt_id)
);

-- Comments
CREATE TABLE comments (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  prompt_id UUID REFERENCES prompts(id) ON DELETE CASCADE,
  version_id UUID REFERENCES prompt_versions(id),
  parent_id UUID REFERENCES comments(id),
  author_id UUID REFERENCES users(id),
  content TEXT NOT NULL,
  is_resolved BOOLEAN DEFAULT false,
  line_reference JSONB,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  deleted_at TIMESTAMPTZ
);

-- Prompt Components (Reusable blocks)
CREATE TABLE prompt_components (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  workspace_id UUID REFERENCES workspaces(id) ON DELETE CASCADE,
  name VARCHAR(100) NOT NULL,
  description TEXT,
  content TEXT NOT NULL,
  category VARCHAR(50),
  tags TEXT[] DEFAULT '{}',
  usage_count INTEGER DEFAULT 0,
  created_by UUID REFERENCES users(id),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Audit Log
CREATE TABLE audit_logs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  workspace_id UUID REFERENCES workspaces(id),
  user_id UUID REFERENCES users(id),
  action VARCHAR(100) NOT NULL,
  resource_type VARCHAR(50),
  resource_id UUID,
  changes JSONB,
  ip_address INET,
  user_agent TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Test Cases
CREATE TABLE test_cases (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  prompt_id UUID REFERENCES prompts(id) ON DELETE CASCADE,
  name VARCHAR(100) NOT NULL,
  description TEXT,
  variable_values JSONB DEFAULT '{}',
  expected_output TEXT,
  evaluation_criteria JSONB DEFAULT '{}',
  tags TEXT[] DEFAULT '{}',
  is_active BOOLEAN DEFAULT true,
  created_by UUID REFERENCES users(id),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Test Runs
CREATE TABLE test_runs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  prompt_id UUID REFERENCES prompts(id),
  version_id UUID REFERENCES prompt_versions(id),
  triggered_by UUID REFERENCES users(id),
  status VARCHAR(20) DEFAULT 'pending',
  total_cases INTEGER DEFAULT 0,
  passed_cases INTEGER DEFAULT 0,
  failed_cases INTEGER DEFAULT 0,
  total_cost_usd DECIMAL(10,6),
  total_tokens INTEGER,
  started_at TIMESTAMPTZ,
  completed_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Indexes
CREATE INDEX idx_prompts_workspace ON prompts(workspace_id);
CREATE INDEX idx_prompts_collection ON prompts(collection_id);
CREATE INDEX idx_prompts_skills ON prompts USING GIN(skills);
CREATE INDEX idx_prompts_tags ON prompts USING GIN(tags);
CREATE INDEX idx_prompts_status ON prompts(status);
CREATE INDEX idx_executions_prompt ON prompt_executions(prompt_id);
CREATE INDEX idx_executions_workspace ON prompt_executions(workspace_id);
CREATE INDEX idx_executions_created ON prompt_executions(created_at DESC);
CREATE INDEX idx_prompt_versions_prompt ON prompt_versions(prompt_id);

-- Full Text Search
CREATE INDEX idx_prompts_fts ON prompts USING GIN(
  to_tsvector('english', name || ' ' || COALESCE(description, '') || ' ' || COALESCE(use_case, ''))
);

-- Vector embeddings for semantic search
CREATE EXTENSION IF NOT EXISTS vector;
ALTER TABLE prompts ADD COLUMN embedding vector(1536);
CREATE INDEX idx_prompts_embedding ON prompts USING ivfflat(embedding vector_cosine_ops);
```

---

## 11. API Design

### 11.1 REST API Endpoints

```
Base URL: https://api.promptforge.io/v1

Authentication: Bearer {api_key} or Session Cookie

── PROMPTS ──────────────────────────────────────────
GET    /prompts                     # List prompts (paginated, filtered)
POST   /prompts                     # Create new prompt
GET    /prompts/:id                 # Get prompt by ID
GET    /prompts/slug/:slug          # Get prompt by slug
PATCH  /prompts/:id                 # Update prompt metadata
DELETE /prompts/:id                 # Archive prompt

── PROMPT VERSIONS ──────────────────────────────────
GET    /prompts/:id/versions        # List all versions
POST   /prompts/:id/versions        # Create new version
GET    /prompts/:id/versions/:ver   # Get specific version
GET    /prompts/:id/versions/diff   # Compare two versions
POST   /prompts/:id/versions/:ver/restore  # Restore to version

── PROMPT EXECUTION ─────────────────────────────────
POST   /prompts/:id/run             # Execute prompt
POST   /prompts/:id/run/stream      # Execute with streaming
POST   /prompts/:id/run/batch       # Batch execution (async)
GET    /prompts/:id/executions      # Get execution history
GET    /executions/:id              # Get specific execution

── COLLECTIONS ──────────────────────────────────────
GET    /collections                 # List collections
POST   /collections                 # Create collection
GET    /collections/:id             # Get collection with prompts
PATCH  /collections/:id             # Update collection
DELETE /collections/:id             # Delete collection

── COMPONENTS ───────────────────────────────────────
GET    /components                  # List reusable components
POST   /components                  # Create component
GET    /components/:id              # Get component
PATCH  /components/:id              # Update component
DELETE /components/:id              # Delete component

── ANALYTICS ────────────────────────────────────────
GET    /analytics/overview          # Workspace overview stats
GET    /analytics/prompts           # Prompt-level analytics
GET    /analytics/usage             # Usage over time
GET    /analytics/cost              # Cost breakdown
GET    /analytics/models            # Model usage stats

── WORKSPACE ────────────────────────────────────────
GET    /workspace                   # Get workspace info
PATCH  /workspace                   # Update workspace
GET    /workspace/members           # List members
POST   /workspace/invite            # Invite member
DELETE /workspace/members/:id       # Remove member
PATCH  /workspace/members/:id/role  # Update member role

── TEST CASES ───────────────────────────────────────
GET    /prompts/:id/tests           # List test cases
POST   /prompts/:id/tests           # Create test case
POST   /prompts/:id/tests/run       # Run all tests
GET    /test-runs/:id               # Get test run results
```

### 11.2 tRPC Router Structure

```typescript
// apps/web/src/server/api/root.ts
export const appRouter = createTRPCRouter({
  prompt: promptRouter,           // All prompt CRUD
  promptVersion: versionRouter,   // Version management
  collection: collectionRouter,   // Collection management
  component: componentRouter,     // Reusable components
  workspace: workspaceRouter,     // Workspace management
  member: memberRouter,           // Team member management
  execution: executionRouter,     // Prompt execution
  analytics: analyticsRouter,     // Analytics queries
  test: testRouter,               // Test case management
  apiKey: apiKeyRouter,           // API key management
  providerKey: providerKeyRouter, // AI provider key management
  search: searchRouter,           // Search and discovery
  comment: commentRouter,         // Comments and reviews
  notification: notificationRouter, // Notifications
  billing: billingRouter,         // Stripe billing
  audit: auditRouter,             // Audit logs
});
```

### 11.3 SDK Example (TypeScript)

```typescript
import { PromptForge } from '@promptforge/sdk';

const client = new PromptForge({
  apiKey: process.env.PROMPTFORGE_API_KEY,
  workspace: 'my-workspace',
});

// Get a prompt by slug
const prompt = await client.prompts.get('customer-support-reply');

// Run a prompt with variables
const result = await client.prompts.run('customer-support-reply', {
  variables: {
    customer_name: 'John Doe',
    issue_description: 'Unable to login to account',
    urgency_level: 'high',
  },
  model: 'gpt-4o',           // Override model (optional)
  version: '2.1.0',          // Specific version (optional)
});

console.log(result.content);
console.log(result.usage);   // { inputTokens, outputTokens, cost }

// Stream a response
const stream = await client.prompts.stream('blog-post-writer', {
  variables: { topic: 'AI in Healthcare', length: '1500 words' },
});

for await (const chunk of stream) {
  process.stdout.write(chunk.delta);
}
```

---

## 12. UI/UX Requirements

### 12.1 Design System

- **Design Language:** Clean, modern, developer-friendly
- **Color Palette:**
  - Primary: Indigo (#6366F1)
  - Secondary: Purple (#8B5CF6)
  - Success: Emerald (#10B981)
  - Warning: Amber (#F59E0B)
  - Danger: Red (#EF4444)
  - Neutral: Gray scale
- **Typography:** Inter (primary), JetBrains Mono (code)
- **Border Radius:** Moderate (8px default)
- **Spacing:** 4px base unit

### 12.2 Core Pages

| Route | Page | Description |
|---|---|---|
| `/` | Landing/Marketing | Product homepage |
| `/dashboard` | Dashboard | Overview and quick actions |
| `/library` | Prompt Library | Browse and manage all prompts |
| `/library/:id` | Prompt Detail | View prompt with version history |
| `/maker` | Prompt Maker | Create new prompt |
| `/maker/:id` | Edit Prompt | Edit existing prompt |
| `/maker/:id/versions` | Version History | Version list and diff viewer |
| `/sandbox` | Testing Sandbox | Ad-hoc prompt testing |
| `/collections` | Collections | Folder/collection view |
| `/components` | Components | Reusable prompt components |
| `/analytics` | Analytics | Usage and performance dashboards |
| `/settings` | Settings | Account and workspace settings |
| `/settings/members` | Team Members | Team management |
| `/settings/api-keys` | API Keys | Key management |
| `/settings/billing` | Billing | Subscription management |
| `/marketplace` | Marketplace | Community prompt templates |

### 12.3 Responsive Design
- **Desktop (1440px+):** Full feature set, multi-panel layout
- **Laptop (1024px-1440px):** Collapsible sidebars, full functionality
- **Tablet (768px-1024px):** Simplified layout, core features
- **Mobile (< 768px):** Read-only view, basic testing

### 12.4 Accessibility
- WCAG 2.1 AA compliance
- Full keyboard navigation
- Screen reader support (ARIA labels)
- Color contrast ratios met
- Focus management in modals
- Reduced motion option

---

## 13. Implementation Plan

### Phase 0: Foundation (Weeks 1-2)

**Goal:** Project scaffolding, infrastructure, and development environment

- [ ] Initialize Turborepo monorepo
- [ ] Configure all tooling (ESLint, Prettier, TypeScript, Husky)
- [ ] Set up Next.js app with App Router
- [ ] Install and configure Tailwind CSS + shadcn/ui
- [ ] Set up PostgreSQL (Supabase) and run initial migrations
- [ ] Configure Prisma with initial schema
- [ ] Set up Redis (Upstash)
- [ ] Configure Docker Compose for local development
- [ ] Set up GitHub Actions CI/CD pipeline
- [ ] Configure Sentry for error tracking
- [ ] Configure PostHog for analytics
- [ ] Set up Storybook for component development
- [ ] Configure environment variables management
- [ ] Set up Vercel deployment

**Deliverables:** Working local dev environment, deployable skeleton app

---

### Phase 1: Authentication & Core Infrastructure (Weeks 3-4)

**Goal:** Secure authentication system and workspace foundation

- [ ] Implement NextAuth.js with email/password
- [ ] Add Google OAuth provider
- [ ] Add GitHub OAuth provider
- [ ] Build email verification flow (Resend)
- [ ] Implement password reset flow
- [ ] Build user profile creation and editing
- [ ] Create workspace creation flow
- [ ] Implement workspace member invitation
- [ ] Build RBAC middleware
- [ ] Create API key generation and management
- [ ] Build user onboarding flow

**Deliverables:** Complete auth system, working workspaces

---

### Phase 2: Prompt Library Core (Weeks 5-7)

**Goal:** Core prompt CRUD and library functionality

- [ ] Build prompt data model and Prisma migrations
- [ ] Create tRPC routers for prompts (CRUD)
- [ ] Build Prompt Library page (list view, grid view)
- [ ] Implement search (full-text with PostgreSQL)
- [ ] Build filter and sort system
- [ ] Create collection/folder system
- [ ] Build prompt card component
- [ ] Implement tagging system
- [ ] Build prompt detail view
- [ ] Implement prompt starring/favorites
- [ ] Build prompt duplication
- [ ] Add soft-delete and archive functionality

**Deliverables:** Functional prompt library with organization

---

### Phase 3: Prompt Maker (Weeks 8-12)

**Goal:** The core Prompt Maker interface — the flagship feature

**Week 8: Editor Foundation**
- [ ] Set up CodeMirror 6 with custom extensions
- [ ] Build template variable syntax highlighting
- [ ] Implement live token counter
- [ ] Create multi-panel layout (left sidebar, editor, right config panel)
- [ ] Build meta information form (name, description, status, etc.)
- [ ] Implement auto-save draft functionality

**Week 9: Model Configuration**
- [ ] Build provider + model selector with dynamic model lists
- [ ] Implement parameter sliders (temperature, top-p, etc.)
- [ ] Build provider-specific parameter visibility logic
- [ ] Create response format selector with JSON schema editor (Monaco)
- [ ] Implement API key source selection
- [ ] Add cost estimation calculator

**Week 10: Content Editors**
- [ ] Build system prompt editor with full CodeMirror features
- [ ] Build user prompt template editor
- [ ] Build assistant prefill editor
- [ ] Implement few-shot examples manager (add/edit/remove/reorder)
- [ ] Build chain-of-thought configuration
- [ ] Create output format and constraints builder
- [ ] Implement tone and persona fields

**Week 11: Variables & Libraries**
- [ ] Build variable detection (auto-scan for {{var}} patterns)
- [ ] Create variable definition form with type system
- [ ] Build validation rule configuration
- [ ] Implement component library browser and importer
- [ ] Build context document uploader/linker
- [ ] Create tool definition editor for function calling
- [ ] Build prompt chain configurator

**Week 12: Advanced Features & Block Mode**
- [ ] Build drag-and-drop block mode editor (React DnD)
- [ ] Create all block types (text, variable, example, component, etc.)
- [ ] Build AI-assisted prompt generator panel
- [ ] Build prompt optimizer with suggestion UI
- [ ] Implement all keyboard shortcuts
- [ ] Add markdown preview toggle
- [ ] Build prompt metadata preview panel

**Deliverables:** Full-featured Prompt Maker with all form fields

---

### Phase 4: Version Control (Week 13-14)

**Goal:** Git-like versioning for prompts

- [ ] Implement version creation on save
- [ ] Build version history timeline component
- [ ] Create side-by-side diff viewer
- [ ] Implement version restore functionality
- [ ] Build version tagging (draft/review/staging/production)
- [ ] Add version commit message requirement
- [ ] Implement prompt forking/branching
- [ ] Build version comparison selector
- [ ] Add version status management UI

**Deliverables:** Complete version control system

---

### Phase 5: Testing Sandbox (Weeks 15-16)

**Goal:** Real-time prompt testing against AI providers

- [ ] Build AI provider integration layer (OpenAI, Anthropic, Google, Mistral, Cohere, Groq)
- [ ] Implement streaming response display
- [ ] Build variable injection UI for sandbox
- [ ] Create sandbox configuration panel
- [ ] Build side-by-side A/B testing view
- [ ] Implement chat mode for multi-turn testing
- [ ] Build response history within session
- [ ] Implement cost estimation before run
- [ ] Create test case runner
- [ ] Build test results display with evaluation scoring
- [ ] Add export test results functionality

**Deliverables:** Fully functional testing sandbox with all providers

---

### Phase 6: Collaboration Features (Week 17-18)

**Goal:** Team collaboration, comments, and review workflows

- [ ] Build comment system with threaded replies
- [ ] Implement comment resolution
- [ ] Build review request workflow
- [ ] Create approval flow before production status
- [ ] Build activity feed (real-time with Supabase subscriptions)
- [ ] Implement @mentions in comments
- [ ] Build notification system
- [ ] Create review notification emails

**Deliverables:** Full collaboration and review system

---

### Phase 7: Analytics Dashboard (Week 19-20)

**Goal:** Usage, cost, and performance analytics

- [ ] Build execution logging pipeline
- [ ] Create analytics aggregation jobs (BullMQ)
- [ ] Build workspace overview dashboard
- [ ] Implement per-prompt analytics page
- [ ] Build team usage analytics
- [ ] Create cost breakdown views
- [ ] Implement model usage charts
- [ ] Build time-series usage heatmaps
- [ ] Add CSV/PDF export for reports

**Deliverables:** Complete analytics system

---

### Phase 8: Developer API & SDK (Week 21-22)

**Goal:** Public REST API and client SDK

- [ ] Build public REST API with auth middleware
- [ ] Implement rate limiting (Upstash)
- [ ] Write OpenAPI/Swagger documentation
- [ ] Build JavaScript/TypeScript SDK
- [ ] Build Python SDK
- [ ] Create API reference documentation
- [ ] Build GitHub Action for prompt deployment
- [ ] Implement webhook system

**Deliverables:** Production-ready API and SDKs

---

### Phase 9: Marketplace & Community (Week 23-24)

**Goal:** Community prompt sharing and discovery

- [ ] Build public marketplace page
- [ ] Implement prompt publishing workflow
- [ ] Create marketplace browse and search
- [ ] Build prompt template import
- [ ] Add rating and review system for marketplace prompts
- [ ] Implement featured prompts curation
- [ ] Build usage statistics for public prompts

**Deliverables:** Community marketplace

---

### Phase 10: Polish, Performance & Launch (Weeks 25-26)

**Goal:** Production readiness

- [ ] Performance optimization (image optimization, code splitting, lazy loading)
- [ ] SEO optimization
- [ ] Accessibility audit and fixes
- [ ] Comprehensive error handling
- [ ] Rate limit and abuse protection
- [ ] Security audit
- [ ] Load testing
- [ ] Documentation completion
- [ ] Landing page creation
- [ ] Onboarding flow refinement
- [ ] Marketing site completion
- [ ] Beta user testing and feedback iteration

**Deliverables:** Production-ready application, public launch

---

## 14. Task Breakdown

### 14.1 Frontend Tasks

```
TASK-FE-001: Set up Next.js 14 App Router with TypeScript
TASK-FE-002: Configure Tailwind CSS and shadcn/ui component library
TASK-FE-003: Build design system (colors, typography, spacing tokens)
TASK-FE-004: Create base layout components (Header, Sidebar, Footer)
TASK-FE-005: Build authentication pages (Login, Register, Forgot Password)
TASK-FE-006: Create user onboarding flow (multi-step wizard)
TASK-FE-007: Build workspace creation wizard
TASK-FE-008: Develop Prompt Library page with grid/list toggle
TASK-FE-009: Create Prompt Card component with all metadata
TASK-FE-010: Build search and filter bar component
TASK-FE-011: Implement collection/folder tree navigation
TASK-FE-012: Build Prompt Detail view page
TASK-FE-013: Create Prompt Maker multi-panel layout
TASK-FE-014: Build Meta Information panel (all fields)
TASK-FE-015: Build Model Configuration panel (all providers/params)
TASK-FE-016: Set up CodeMirror 6 with custom extensions
TASK-FE-017: Build System Prompt editor with variable highlighting
TASK-FE-018: Build User Prompt template editor
TASK-FE-019: Create live token counter component
TASK-FE-020: Build Variable Detection and Definition Manager
TASK-FE-021: Create Variable type-specific input components
TASK-FE-022: Build Few-Shot Examples manager with drag-to-reorder
TASK-FE-023: Create Component Library browser sidebar
TASK-FE-024: Build Context Document uploader
TASK-FE-025: Create Tool Definition editor (JSON Schema + form)
TASK-FE-026: Build Prompt Chain configurator
TASK-FE-027: Implement block-based editor with React DnD
TASK-FE-028: Create all 12 block type components
TASK-FE-029: Build AI Prompt Generator panel
TASK-FE-030: Build Prompt Optimizer with suggestion UI
TASK-FE-031: Create Version History timeline component
TASK-FE-032: Build side-by-side diff viewer
TASK-FE-033: Create version status badge and management UI
TASK-FE-034: Build Testing Sandbox layout
TASK-FE-035: Create streaming response display component
TASK-FE-036: Build sandbox configuration panel
TASK-FE-037: Create side-by-side A/B test view
TASK-FE-038: Build test case creation and management UI
TASK-FE-039: Create comment system with threaded replies UI
TASK-FE-040: Build activity feed component
TASK-FE-041: Create Analytics Dashboard overview page
TASK-FE-042: Build prompt-level analytics page with charts
TASK-FE-043: Create team usage analytics view
TASK-FE-044: Build notification center
TASK-FE-045: Create Settings pages (profile, workspace, billing, API keys)
TASK-FE-046: Build API Key management UI
TASK-FE-047: Build Marketplace browse page
TASK-FE-048: Create dark mode support with next-themes
TASK-FE-049: Implement command palette (Ctrl+K)
TASK-FE-050: Keyboard shortcut system implementation
```

### 14.2 Backend Tasks

```
TASK-BE-001: Set up tRPC with Next.js App Router
TASK-BE-002: Configure Prisma with PostgreSQL (Supabase)
TASK-BE-003: Write all database migrations
TASK-BE-004: Implement NextAuth.js with all providers
TASK-BE-005: Build RBAC middleware system
TASK-BE-006: Create workspace service (CRUD, members)
TASK-BE-007: Build prompt service (CRUD with version creation)
TASK-BE-008: Implement semantic versioning for prompts
TASK-BE-009: Build collection service
TASK-BE-010: Create component service
TASK-BE-011: Implement full-text search with PostgreSQL
TASK-BE-012: Add pgvector for semantic search
TASK-BE-013: Build AI provider integration layer (abstraction)
TASK-BE-014: Implement OpenAI provider adapter
TASK-BE-015: Implement Anthropic provider adapter
TASK-BE-016: Implement Google Gemini adapter
TASK-BE-017: Implement Mistral adapter
TASK-BE-018: Implement Cohere adapter
TASK-BE-019: Implement Groq adapter
TASK-BE-020: Build streaming response proxy
TASK-BE-021: Create execution logging service
TASK-BE-022: Build cost calculation engine
TASK-BE-023: Implement template variable resolution engine
TASK-BE-024: Build analytics aggregation service
TASK-BE-025: Create BullMQ job queues for async operations
TASK-BE-026: Implement API key auth middleware
TASK-BE-027: Build rate limiting with Upstash Redis
TASK-BE-028: Create public REST API endpoints
TASK-BE-029: Build webhook system
TASK-BE-030: Implement audit logging middleware
TASK-BE-031: Create email service with Resend
TASK-BE-032: Build notification service
TASK-BE-033: Implement Stripe billing integration
TASK-BE-034: Create encrypted provider API key storage
TASK-BE-035: Build comment and review service
TASK-BE-036: Implement test runner service
TASK-BE-037: Create report export service
TASK-BE-038: Build marketplace service
TASK-BE-039: Implement prompt embedding generation (for semantic search)
TASK-BE-040: Write OpenAPI spec and generate SDK types
```

### 14.3 Infrastructure Tasks

```
TASK-INF-001: Configure Supabase project and database
TASK-INF-002: Set up Upstash Redis
TASK-INF-003: Configure Cloudflare R2 bucket
TASK-INF-004: Set up Vercel project and environment variables
TASK-INF-005: Configure CI/CD with GitHub Actions
TASK-INF-006: Set up Sentry for error tracking
TASK-INF-007: Configure PostHog
TASK-INF-008: Set up Axiom logging
TASK-INF-009: Configure Checkly synthetic monitoring
TASK-INF-010: Write Docker Compose for local development
TASK-INF-011: Create Terraform configs for self-hosted option
TASK-INF-012: Set up staging environment
TASK-INF-013: Configure database backups
TASK-INF-014: Set up security scanning in CI
TASK-INF-015: Configure DDOS protection (Vercel/Cloudflare)
```

---

## 15. Skills & Team Requirements

### 15.1 Required Technical Skills

#### Frontend Development
- **Expert Level:**
  - React 18 (hooks, context, concurrent features)
  - Next.js 14 (App Router, Server Components, Server Actions)
  - TypeScript (advanced generics, conditional types, utility types)
  - Tailwind CSS (custom configurations, responsive design)
  - CodeMirror 6 (extensions, custom syntax highlighting)
  
- **Proficient Level:**
  - TanStack Query (caching strategies, optimistic updates)
  - Zustand (state management patterns)
  - React Hook Form + Zod (complex form validation)
  - React DnD (drag and drop interfaces)
  - Recharts / D3.js (data visualization)
  - Framer Motion (complex animations)
  - shadcn/ui and Radix UI (composable components)
  - Monaco Editor (integration and configuration)

- **Familiar Level:**
  - WebSockets / SSE (streaming responses)
  - Web Workers (heavy computation off main thread)
  - Progressive Web App concepts

#### Backend Development
- **Expert Level:**
  - Node.js (async patterns, streams, performance)
  - tRPC (end-to-end type safety patterns)
  - Prisma ORM (complex queries, migrations, relations)
  - PostgreSQL (query optimization, indexing, full-text search)
  
- **Proficient Level:**
  - Redis (caching patterns, pub/sub, Lua scripts)
  - BullMQ (job queues, retry strategies)
  - NextAuth.js / Auth.js (OAuth, JWT, session management)
  - REST API design (OpenAPI, versioning)
  - Stripe API integration (subscriptions, webhooks)
  - Resend / email templating

- **Familiar Level:**
  - pgvector (vector embeddings, similarity search)
  - WebSockets (real-time features)
  - gRPC concepts

#### AI/ML Engineering
- **Expert Level:**
  - OpenAI API (chat completions, streaming, function calling, vision)
  - Prompt engineering techniques (CoT, few-shot, system prompts)
  - Token counting and cost optimization
  
- **Proficient Level:**
  - Anthropic API (Claude models, prompt caching)
  - Google Gemini API
  - Mistral AI API
  - Structured output / JSON mode
  - Function calling / tool use
  - Embeddings and vector similarity
  - RAG (Retrieval Augmented Generation) patterns

- **Familiar Level:**
  - Fine-tuning concepts
  - RLHF concepts
  - LangChain / LlamaIndex

#### DevOps & Infrastructure
- **Proficient Level:**
  - Docker and Docker Compose
  - GitHub Actions (complex workflows, caching)
  - Vercel deployment (edge functions, environment management)
  - Supabase (PostgreSQL, Auth, Storage, Realtime)
  
- **Familiar Level:**
  - Terraform (IaC)
  - CDN configuration
  - Security scanning (SAST, dependency auditing)

### 15.2 Team Composition

#### Recommended Team (MVP)

| Role | Count | Responsibilities |
|---|---|---|
| **Tech Lead / Full-Stack Engineer** | 1 | Architecture decisions, core infrastructure, code review |
| **Frontend Engineer (Senior)** | 2 | Prompt Maker UI, Library, Analytics |
| **Backend Engineer (Senior)** | 1 | API layer, database, AI integrations |
| **Full-Stack Engineer (Mid)** | 1 | Collaboration features, testing, SDK |
| **UI/UX Designer** | 1 | Design system, wireframes, user testing |
| **DevOps Engineer (Part-time)** | 0.5 | Infrastructure, CI/CD, monitoring |
| **Product Manager** | 1 | Roadmap, user research, stakeholder management |
| **QA Engineer** | 1 | Testing strategy, automation, bug tracking |

#### Extended Team (Post-Launch)

| Role | Count | Responsibilities |
|---|---|---|
| **AI/ML Engineer** | 1 | Prompt optimization features, evaluation, embeddings |
| **Developer Advocate** | 1 | SDK, docs, community, integrations |
| **Data Engineer** | 1 | Analytics pipeline, data warehouse, reporting |
| **Security Engineer** | 1 | Security audits, compliance, pen testing |

### 15.3 Skill Assessment Matrix

```
Domain                    | P1 (Must Have) | P2 (Important) | P3 (Nice to Have)
──────────────────────────|────────────────|────────────────|──────────────────
React + Next.js           |      ✅         |                |
TypeScript                |      ✅         |                |
PostgreSQL                |      ✅         |                |
AI API Integration        |      ✅         |                |
Prompt Engineering        |      ✅         |                |
CodeMirror                |      ✅         |                |
tRPC                      |      ✅         |                |
Authentication/Security   |      ✅         |                |
Redis                     |                |      ✅         |
Streaming / SSE           |                |      ✅         |
Stripe Integration        |                |      ✅         |
Data Visualization        |                |      ✅         |
Drag and Drop UI          |                |      ✅         |
pgvector / Embeddings     |                |                |       ✅
LangChain / Agents        |                |                |       ✅
Mobile Development        |                |                |       ✅
```

---

## 16. Testing Strategy

### 16.1 Testing Pyramid

```
                    ┌─────────────┐
                    │   E2E Tests  │  ~20 tests
                    │  (Playwright)│
                   ╱───────────────╲
                  ╱  Integration    ╲  ~100 tests
                 ╱  Tests (Jest +   ╲
                ╱   MSW + tRPC)      ╲
               ╱─────────────────────╲
              ╱    Unit Tests          ╲  ~500 tests
             ╱    (Jest + RTL)         ╲
            └──────────────────────────┘
```

### 16.2 Test Coverage Requirements

| Layer | Coverage Target |
|---|---|
| Business logic (services) | 90%+ |
| API routes / tRPC routers | 85%+ |
| UI components | 70%+ |
| E2E critical paths | 100% |
| Utility functions | 95%+ |

### 16.3 Critical E2E Test Paths

1. User registration → email verification → workspace creation
2. Create prompt with all Prompt Maker fields → save → verify in library
3. Run prompt in sandbox → verify response → check execution log
4. Create version → compare diff → restore previous version
5. Invite team member → accept invite → access shared prompt
6. Create test case → run tests → view results
7. Generate API key → use key to fetch prompt via REST API
8. Create prompt → publish to marketplace → browse and import

---

## 17. Security & Compliance

### 17.1 Security Requirements

- [ ] All API endpoints require authentication
- [ ] RBAC enforced at service layer (not just UI)
- [ ] Provider API keys encrypted at rest (AES-256)
- [ ] All database queries use parameterized statements (Prisma)
- [ ] Rate limiting on all public endpoints
- [ ] Input sanitization for all user content
- [ ] Content Security Policy headers
- [ ] CSRF protection
- [ ] SQL injection prevention (ORM + validation)
- [ ] XSS prevention (React + sanitize-html)
- [ ] Prompt injection risk warnings in UI
- [ ] PII detection for sensitive content
- [ ] Audit log for all data-modifying operations
- [ ] HTTPS enforced everywhere
- [ ] Security headers (HSTS, X-Frame-Options, etc.)

### 17.2 Data Privacy

- GDPR compliance (data export, deletion)
- CCPA compliance
- Data retention policies
- Privacy policy and terms of service
- Cookie consent management
- Prompt content never used for training (stated policy)

---

## 18. Performance Requirements

| Metric | Target |
|---|---|
| **Page Load (LCP)** | < 2.5s |
| **Time to Interactive** | < 3.5s |
| **API Response Time (p50)** | < 100ms |
| **API Response Time (p95)** | < 500ms |
| **API Response Time (p99)** | < 2000ms |
| **Search Response Time** | < 300ms |
| **Prompt Library Load (100 items)** | < 1s |
| **Sandbox First Token** | < 3s |
| **Uptime SLA** | 99.9% |
| **DB Query Time (p95)** | < 50ms |
| **Bundle Size (JS, gzipped)** | < 500KB initial |

---

## 19. Deployment Strategy

### 19.1 Environments

| Environment | URL | Purpose | Branch |
|---|---|---|---|
| Development | localhost:3000 | Local development | feature/* |
| Preview | pr-*.vercel.app | PR previews | pull_request |
| Staging | staging.promptforge.io | Pre-production testing | develop |
| Production | app.promptforge.io | Live application | main |

### 19.2 Deployment Pipeline

```
Developer Push
     ↓
GitHub Actions CI
  ├── Lint (ESLint, Prettier)
  ├── Type Check (tsc --noEmit)
  ├── Unit Tests (Jest)
  ├── Integration Tests
  └── Build check
     ↓
Deploy to Preview (Vercel)
  └── Playwright E2E tests run
     ↓
PR Approved + Merged to develop
     ↓
Deploy to Staging
  └── Smoke tests
  └── Manual QA
     ↓
Release PR to main
  └── Deploy to Production (Vercel)
  └── Database migrations (prisma migrate deploy)
  └── Post-deploy health checks (Checkly)
  └── Changelog generated (Changesets)
```

---

## 20. Metrics & Success Criteria

### 20.1 Launch Metrics (30 days post-launch)

| Metric | Target |
|---|---|
| Registered Users | 1,000+ |
| Active Workspaces | 200+ |
| Prompts Created | 5,000+ |
| Prompt Executions | 50,000+ |
| API Calls | 100,000+ |
| Community Templates | 100+ |
| Team Plans Subscribed | 50+ |

### 20.2 Product Health Metrics (Ongoing)

| Metric | Target |
|---|---|
| Monthly Active Users (MAU) | Growing 20% MoM |
| DAU/MAU Ratio | > 30% |
| Prompt Maker Completion Rate | > 60% |
| Average Session Duration | > 15 minutes |
| NPS Score | > 45 |
| Churn Rate (paid) | < 5% monthly |
| Support Ticket Volume | < 2% of MAU |

---

## 21. Risks & Mitigations

| Risk | Severity | Probability | Mitigation |
|---|---|---|---|
| AI provider API changes break integrations | High | Medium | Versioned adapters, automated API compatibility tests, fallback models |
| Database performance at scale | High | Medium | Query optimization, connection pooling, read replicas, caching |
| Prompt Maker complexity leads to poor UX | High | High | Extensive user testing, progressive disclosure, guided onboarding |
| Security breach exposing API keys | Critical | Low | Encryption at rest, key rotation, audit logs, penetration testing |
| Scope creep delays launch | Medium | High | Strict MVP definition, phased rollout, weekly sprint reviews |
| AI costs exceed projections | Medium | Medium | Usage limits, cost controls per workspace, accurate estimation |
| Low team adoption | Medium | Medium | Non-technical friendly UI, strong onboarding, template library |
| Competitor launches similar product | Medium | High | Focus on UX differentiation, move fast, build moat with data/community |
| Streaming not supported on all environments | Low | Medium | Polling fallback for non-streaming environments |
| GDPR violations | High | Low | Legal review, data minimization, consent management, DPA agreements |

---

## 22. Appendix

### Appendix A: Prompt Template Examples

```markdown
## Example 1: Customer Support Reply Generator

**Skill:** customer_support, email_writing
**Model:** GPT-4o
**Temperature:** 0.7

**System Prompt:**
You are {{company_name}}'s customer support specialist. Your role is to write 
empathetic, helpful, and professional responses to customer inquiries.

Guidelines:
- Always acknowledge the customer's frustration if present
- Use their first name: {{customer_first_name}}
- Tone: {{tone}}
- Keep responses under {{max_words}} words
- Always include a next step or resolution

**User Prompt:**
Customer ticket #{{ticket_id}}:

Inquiry type: {{inquiry_type}}

Customer message:
{{customer_message}}

Account status: {{account_status}}

Write a complete support reply email.

**Variables:**
- company_name: text, required
- customer_first_name: text, required
- tone: select [Professional, Empathetic, Friendly], default: Professional
- max_words: number, default: 200, range: 100-500
- ticket_id: text, required
- inquiry_type: select [...], required
- customer_message: textarea, required
- account_status: select [Active, Suspended, Trial], default: Active
```

### Appendix B: Glossary

| Term | Definition |
|---|---|
| **Prompt** | A set of instructions given to an AI model |
| **System Prompt** | Instructions that define AI behavior/persona |
| **Template Variable** | Placeholder ({{var}}) replaced at runtime |
| **Version** | A saved snapshot of a prompt's configuration |
| **Component** | A reusable snippet of prompt text |
| **Collection** | A folder grouping related prompts |
| **Skill** | A categorization label for prompt capability |
| **Execution** | A single run of a prompt against an AI model |
| **Token** | The basic unit of text processed by AI models |
| **Sandbox** | The testing environment for prompts |
| **Chain** | Multiple prompts executed in sequence |
| **Few-Shot** | Examples included in the prompt to guide AI |
| **Chain of Thought** | Technique prompting AI to reason step-by-step |

### Appendix C: Pricing Tiers

| Feature | Free | Pro ($29/mo) | Team ($99/mo) | Enterprise |
|---|---|---|---|---|
| Prompts | 25 | Unlimited | Unlimited | Unlimited |
| Executions/month | 100 | 5,000 | 25,000 | Custom |
| Team members | 1 | 1 | 10 | Unlimited |
| Version history | 5 versions | Unlimited | Unlimited | Unlimited |
| API access | ❌ | ✅ | ✅ | ✅ |
| Analytics | Basic | Full | Full | Custom |
| Community marketplace | Browse only | Publish | Publish | Private |
| SSO | ❌ | ❌ | ❌ | ✅ |
| Audit logs | ❌ | ❌ | 30 days | Unlimited |
| SLA | ❌ | ❌ | ❌ | 99.9% |
| Support | Community | Email | Priority | Dedicated |

---

*Document Version: 1.0.0*
*Last Updated: 2025*
*Status: Active*
*Owner: Product Team*

---

> **This PRD is a living document.** It will be updated as requirements evolve, user feedback is gathered, and technical constraints are discovered. All changes must be reviewed by the product owner and relevant engineering leads.