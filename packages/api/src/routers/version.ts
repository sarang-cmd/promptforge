import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "../trpc";

export const versionRouter = createTRPCRouter({
  create: publicProcedure
    .input(z.object({
      promptId: z.string(),
      createdBy: z.string(),
      versionNumber: z.string(),
      commitMessage: z.string().optional(),
      systemPrompt: z.string().optional(),
      userPrompt: z.string().optional(),
      model: z.string().optional(),
      provider: z.string().optional(),
      modelConfig: z.any().optional(),
    }))
    .mutation(async ({ ctx, input }) => {
      const { promptId, ...versionData } = input;
      
      const newVersion = await ctx.prisma.promptVersion.create({
        data: {
          promptId,
          ...versionData,
          status: "draft",
        },
      });

      // Update the prompt's current version
      await ctx.prisma.prompt.update({
        where: { id: promptId },
        data: {
          currentVersionId: newVersion.id,
          updatedAt: new Date(),
        },
      });

      return newVersion;
    }),

  list: publicProcedure
    .input(z.object({ promptId: z.string() }))
    .query(({ ctx, input }) => {
      return ctx.prisma.promptVersion.findMany({
        where: { promptId: input.promptId },
        orderBy: { createdAt: "desc" },
      });
    }),
});
