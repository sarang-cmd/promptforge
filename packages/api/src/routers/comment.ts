import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "../trpc";

export const commentRouter = createTRPCRouter({
  create: publicProcedure
    .input(z.object({
      promptId: z.string(),
      authorId: z.string(),
      content: z.string(),
      versionId: z.string().optional(),
      parentId: z.string().optional(),
    }))
    .mutation(({ ctx, input }) => {
      return ctx.prisma.comment.create({
        data: input,
      });
    }),

  listByPrompt: publicProcedure
    .input(z.object({ promptId: z.string() }))
    .query(({ ctx, input }) => {
      return ctx.prisma.comment.findMany({
        where: { promptId: input.promptId, deletedAt: null },
        include: { author: true, replies: true },
        orderBy: { createdAt: "desc" },
      });
    }),

  resolve: publicProcedure
    .input(z.object({ id: z.string() }))
    .mutation(({ ctx, input }) => {
      return ctx.prisma.comment.update({
        where: { id: input.id },
        data: { isResolved: true, updatedAt: new Date() },
      });
    }),
});
