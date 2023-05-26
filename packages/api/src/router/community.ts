import { z } from "zod";

import { createTRPCRouter, protectedProcedure, publicProcedure } from "../trpc";

export const communityRouter = createTRPCRouter({
  all: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.community.findMany({ orderBy: { id: "asc" } });
  }),

  byId: publicProcedure
    .input(z.object({ id: z.string() }))
    .query(({ ctx, input }) => {
      return ctx.prisma.community.findFirst({ where: { id: input.id } });
    }),

  create: protectedProcedure
    .input(
      z.object({
        name: z.string().min(3),
        about: z.string().min(16),
        handle: z.string().min(3).max(20),
      }),
    )
    .mutation(({ ctx, input }) => {
      const userId = ctx.auth.userId;

      return ctx.prisma.community.create({
        data: {
          handle: input.handle,
          name: input.name,
          about: input.about,
          ownerId: userId,
        },
      });
    }),

  delete: protectedProcedure.input(z.string()).mutation(({ ctx, input }) => {
    return ctx.prisma.community.delete({ where: { id: input } });
  }),
});
