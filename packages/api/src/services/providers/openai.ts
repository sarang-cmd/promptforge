import OpenAI from "openai";
import { 
  type AIProvider, 
  type AICompletionOptions, 
  type AICompletionResult 
} from "../ai-provider";

export class OpenAIProvider implements AIProvider {
  name = "OpenAI";
  private client: OpenAI;

  constructor(apiKey: string) {
    this.client = new OpenAI({ apiKey });
  }

  async generateCompletion(options: AICompletionOptions): Promise<AICompletionResult> {
    const messages: OpenAI.Chat.ChatCompletionMessageParam[] = [];
    
    if (options.systemPrompt) {
      messages.push({ role: "system", content: options.systemPrompt });
    }
    
    messages.push({ role: "user", content: options.userPrompt });

    const response = await this.client.chat.completions.create({
      model: options.model,
      messages,
      temperature: options.temperature,
      max_tokens: options.maxTokens,
      top_p: options.topP,
      stop: options.stopSequences,
    });

    const choice = response.choices[0];
    
    return {
      content: choice?.message.content || "",
      usage: response.usage ? {
        inputTokens: response.usage.prompt_tokens,
        outputTokens: response.usage.completion_tokens,
        totalTokens: response.usage.total_tokens,
      } : undefined,
    };
  }
}
