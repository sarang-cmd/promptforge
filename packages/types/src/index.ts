export type PromptStatus = "draft" | "review" | "staging" | "production" | "archived";

export type AIProvider = 
  | "openai" 
  | "anthropic" 
  | "google" 
  | "mistral" 
  | "cohere" 
  | "groq" 
  | "ollama" 
  | "custom";

export interface TemplateVariable {
  id: string;
  name: string;
  displayName: string;
  description?: string;
  type: string;
  defaultValue?: any;
  required: boolean;
  options?: string[];
}
