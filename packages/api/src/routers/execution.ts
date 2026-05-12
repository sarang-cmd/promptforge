import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "../trpc";
import { OpenAIProvider } from "../services/providers/openai";
import { AnthropicProvider } from "../services/providers/anthropic";
import { TRPCError } from "@trpc/server";

export const executionRouter = createTRPCRouter({
  run: publicProcedure
    .input(z.object({
      promptId: z.string().optional(),
      versionId: z.string().optional(),
      provider: z.enum(["openai", "anthropic"]),
      model: z.string(),
      systemPrompt: z.string().optional(),
      userPrompt: z.string(),
      variables: z.record(z.string()).optional(),
      temperature: z.number().optional(),
      maxTokens: z.number().optional(),
    }))
    .mutation(async ({ ctx, input }) => {
      let apiKey = "";
      
      // In a real app, we would fetch the API key from the database (encrypted)
      if (input.provider === "openai") {
        apiKey = process.env.OPENAI_API_KEY || "";
      } else if (input.provider === "anthropic") {
        apiKey = process.env.ANTHROPIC_API_KEY || "";
      }

      if (!apiKey) {
        throw new TRPCError({
          code: "BAD_REQUEST",
          message: `API key for ${input.provider} not found.`,
        });
      }

      let provider;
      if (input.provider === "openai") {
        provider = new OpenAIProvider(apiKey);
      } else {
        provider = new AnthropicProvider(apiKey);
      }

      try {
        const result = await provider.generateCompletion({
          model: input.model,
          systemPrompt: input.systemPrompt,
          userPrompt: input.userPrompt,
          temperature: input.temperature,
          maxTokens: input.maxTokens,
        });

        // Log execution to DB if promptId is provided
        if (input.promptId) {
          await ctx.prisma.promptExecution.create({
            data: {
              promptId: input.promptId,
              versionId: input.versionId,
              workspaceId: "placeholder-workspace-id", // Should come from context
              provider: input.provider,
              model: input.model,
              resolvedSystemPrompt: input.systemPrompt,
              resolvedUserPrompt: input.userPrompt,
              responseContent: result.content,
              inputTokens: result.usage?.inputTokens,
              outputTokens: result.usage?.outputTokens,
              totalTokens: result.usage?.totalTokens,
              status: "success",
            },
          });
        }

        return result;
      } catch (error: any) {
        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: error.message || "Failed to generate completion",
        });
      }
    }),
});
