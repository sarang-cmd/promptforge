import Anthropic from "@anthropic-ai/sdk";
import { 
  type AIProvider, 
  type AICompletionOptions, 
  type AICompletionResult 
} from "../ai-provider";

export class AnthropicProvider implements AIProvider {
  name = "Anthropic";
  private client: Anthropic;

  constructor(apiKey: string) {
    this.client = new Anthropic({ apiKey });
  }

  async generateCompletion(options: AICompletionOptions): Promise<AICompletionResult> {
    const response = await this.client.messages.create({
      model: options.model,
      system: options.systemPrompt,
      max_tokens: options.maxTokens || 1024,
      messages: [{ role: "user", content: options.userPrompt }],
      temperature: options.temperature,
      top_p: options.topP,
      stop_sequences: options.stopSequences,
    });

    const content = response.content[0];
    const text = content?.type === 'text' ? content.text : "";

    return {
      content: text,
      usage: {
        inputTokens: response.usage.input_tokens,
        outputTokens: response.usage.output_tokens,
        totalTokens: response.usage.input_tokens + response.usage.output_tokens,
      },
    };
  }
}
