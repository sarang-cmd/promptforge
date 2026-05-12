import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "../trpc";
import { TRPCError } from "@trpc/server";

export const publicRouter = createTRPCRouter({
  execute: publicProcedure
    .input(z.object({
      slug: z.string(),
      variables: z.record(z.any()).optional(),
      version: z.string().optional(),
    }))
    .mutation(async ({ ctx, input }) => {
      // 1. Verify API Key (would normally be in header via middleware)
      
      // 2. Find prompt by slug
      const prompt = await ctx.prisma.prompt.findFirst({
        where: { slug: input.slug },
        include: { currentVersion: true }
      });

      if (!prompt) {
        throw new TRPCError({
          code: "NOT_FOUND",
          message: "Prompt not found",
        });
      }

      // 3. Resolve version
      const version = input.version 
        ? await ctx.prisma.promptVersion.findFirst({ where: { promptId: prompt.id, versionNumber: input.version } })
        : prompt.currentVersion;

      if (!version) {
        throw new TRPCError({
          code: "NOT_FOUND",
          message: "Prompt version not found",
        });
      }

      // 4. In a real app, this would then call the execution service
      // For this demo, we return a mock success
      return {
        id: "exec_" + Math.random().toString(36).substr(2, 9),
        content: "This is a response generated via the Public API.",
        usage: {
          inputTokens: 42,
          outputTokens: 128,
          totalTokens: 170
        }
      };
    }),
});
