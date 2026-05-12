import axios from 'axios';

export interface PromptForgeConfig {
  apiKey: string;
  baseUrl?: string;
}

export interface ExecuteOptions {
  slug: string;
  variables?: Record<string, any>;
  version?: string;
}

export class PromptForge {
  private apiKey: string;
  private baseUrl: string;

  constructor(config: PromptForgeConfig) {
    this.apiKey = config.apiKey;
    this.baseUrl = config.baseUrl || 'https://api.promptforge.ai/v1';
  }

  async execute(options: ExecuteOptions) {
    const response = await axios.post(`${this.baseUrl}/execute`, {
      slug: options.slug,
      variables: options.variables,
      version: options.version
    }, {
      headers: {
        'Authorization': `Bearer ${this.apiKey}`,
        'Content-Type': 'application/json'
      }
    });
    
    return response.data;
  }
}
