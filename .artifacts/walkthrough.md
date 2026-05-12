# PromptForge Walkthrough

Welcome to **PromptForge**, the industry-standard tool for prompt engineering and management. This document provides a tour of the codebase and the platform features.

## 🏗️ Architecture Overview

PromptForge is built as a **Turborepo monorepo**, ensuring a clean separation of concerns and high-performance builds.

- **`apps/web`**: A Next.js 16 application (App Router) serving as the main dashboard and landing page.
- **`packages/db`**: The data layer using **Prisma** and **PostgreSQL**.
- **`packages/api`**: A type-safe **tRPC** server defining the core business logic.
- **`packages/ui`**: A shared component library ready for **shadcn/ui**.
- **`packages/sdk`**: A lightweight TypeScript SDK for integrating PromptForge into any application.

## 🚀 Key Features

### 1. The Prompt Maker
Located in `apps/web/app/(dashboard)/maker/[id]`, this is the flagship feature.
- **Rich Editing**: Powered by **CodeMirror 6** for system and user prompts.
- **Variable Detection**: Automatically detects `{{variables}}` as you type and displays them in the sidebar.
- **Model Tuning**: Configure temperature, max tokens, and provider-specific settings.
- **Cost Estimation**: Real-time pricing calculation based on current model selection and prompt length.

### 2. Testing Sandbox
Located in `apps/web/app/(dashboard)/sandbox`, this allows for rapid testing.
- **Dynamic Inputs**: Automatically generates form fields for detected variables.
- **Streaming UI**: Simulates the streaming experience of modern LLMs.
- **Performance Metrics**: Tracks latency, token counts, and costs per run.

### 3. Analytics & Monitoring
Located in `apps/web/app/(dashboard)/analytics`.
- **Usage Charts**: Visualizes token consumption and execution frequency using **Recharts**.
- **Cost Tracking**: Monitors spending across different providers (OpenAI, Anthropic).
- **Quality Metrics**: Tracks average ratings and performance of each prompt.

### 4. Versioning & Collaboration
PromptForge implements a Git-like versioning system.
- **Versions**: Each save creates a new immutable `PromptVersion`.
- **Comments**: Threaded discussions on specific versions of a prompt.
- **Workspaces**: Multi-tenant support for teams.

## 🛠️ Developer Guide

### Environment Setup
Create a `.env` file in `apps/web` (see `.env.example`):
```bash
DATABASE_URL="..."
AUTH_SECRET="..."
OPENAI_API_KEY="..."
ANTHROPIC_API_KEY="..."
```

### Running Locally
```bash
npm install
npm run dev
```

### Database Migrations
```bash
cd packages/db
npx prisma migrate dev
```

### Using the SDK
```typescript
import { PromptForge } from '@repo/sdk';

const forge = new PromptForge({ apiKey: 'pf_...' });
const result = await forge.execute({
  slug: 'customer-support-reply',
  variables: { customer_name: 'John' }
});
```
