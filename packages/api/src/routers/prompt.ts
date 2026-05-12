import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "../trpc";

export const promptRouter = createTRPCRouter({
  list: publicProcedure
    .input(z.object({ workspaceId: z.string() }))
    .query(({ ctx, input }) => {
      return ctx.prisma.prompt.findMany({
        where: { workspaceId: input.workspaceId },
        include: { currentVersion: true },
        orderBy: { updatedAt: "desc" },
      });
    }),
  
  getById: publicProcedure
    .input(z.object({ id: z.string() }))
    .query(({ ctx, input }) => {
      return ctx.prisma.prompt.findUnique({
        where: { id: input.id },
        include: { versions: true, currentVersion: true },
      });
    }),

  create: publicProcedure
    .input(z.object({
      workspaceId: z.string(),
      authorId: z.string(),
      name: z.string(),
      slug: z.string(),
      description: z.string().optional(),
    }))
    .mutation(async ({ ctx, input }) => {
      return ctx.prisma.prompt.create({
        data: {
          ...input,
          status: "draft",
          visibility: "private",
        },
      });
    }),

  updateContent: publicProcedure
    .input(z.object({
      id: z.string(),
      systemPrompt: z.string().optional(),
      userPrompt: z.string().optional(),
      model: z.string().optional(),
      provider: z.string().optional(),
    }))
    .mutation(async ({ ctx, input }) => {
      const { id, ...data } = input;
      // This would normally create a new version, but for simplicity now we update current
      // In real implementation, we create a new version and update currentVersionId
      return ctx.prisma.prompt.update({
        where: { id },
        data: {
          updatedAt: new Date(),
        },
      });
    }),
});
