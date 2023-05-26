import { z } from "zod";

import { createTRPCRouter, protectedProcedure, publicProcedure } from "../trpc";

export const eventRouter = createTRPCRouter({
  all: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.event.findMany({ orderBy: { id: "desc" } });
  }),

  byId: publicProcedure
    .input(z.object({ id: z.string() }))
    .query(({ ctx, input }) => {
      return ctx.prisma.event.findFirst({ where: { id: input.id } });
    }),

  create: protectedProcedure
    .input(
      z.object({
        title: z.string().min(1),
        content: z.string().min(1),
        communityId: z.string(),
      }),
    )
    .mutation(({ ctx, input }) => {
      const userId = ctx.auth.userId;

      return ctx.prisma.event.create({
        data: {
          title: input.title,
          content: input.content,
          community: {
            connect: {
              id: input.communityId,
            },
          },
          creatorId: userId,
        },
      });
    }),

  delete: protectedProcedure.input(z.string()).mutation(({ ctx, input }) => {
    return ctx.prisma.event.delete({ where: { id: input } });
  }),
});
