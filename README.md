# PromptForge

The industry-standard tool for prompt engineering and management. Build Better Prompts. Ship Smarter AI.

[![Live Demo](https://img.shields.io/badge/demo-live-brightgreen)](https://sarang-cmd.github.io/promptforge/)
[![Build Status](https://github.com/sarang-cmd/promptforge/actions/workflows/deploy.yml/badge.svg)](https://github.com/sarang-cmd/promptforge/actions)

## 🚀 Features

- **Prompt Maker**: Rich editor with CodeMirror 6, variable detection, and model tuning.
- **Testing Sandbox**: Real-time execution and streaming response simulation.
- **Analytics Dashboard**: Monitor token usage, costs, and performance metrics.
- **Library & Versioning**: Git-like version history and team organization.
- **Public API & SDK**: Integrate your prompts into any application with ease.

## 🏗️ Architecture

PromptForge is built as a high-performance **Turborepo monorepo**:

- **`apps/web`**: Next.js 16 application (App Router).
- **`packages/db`**: Prisma ORM with PostgreSQL.
- **`packages/api`**: Type-safe tRPC router.
- **`packages/sdk`**: TypeScript SDK for prompt execution.
- **`packages/ui`**: Shared component library (shadcn/ui-ready).

## 🛠️ Getting Started

1. **Install Dependencies**:
   ```sh
   npm install
   ```

2. **Setup Environment**:
   Create a `.env` file in `apps/web` (see `.env.example`).

3. **Run Development Server**:
   ```sh
   npm run dev
   ```

4. **Build for Production**:
   ```sh
   npm run build
   ```

## 🌐 Live Demo

You can view the static preview of the platform here: [https://sarang-cmd.github.io/promptforge/](https://sarang-cmd.github.io/promptforge/)

> [!NOTE]
> The live demo is a static export. Backend features like real LLM execution, authentication, and database persistence require a live runtime (e.g., Vercel or Firebase).

## 📄 License

MIT © [Sarang Batra](https://github.com/sarang-cmd)
