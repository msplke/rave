import { relations, sql } from "drizzle-orm";
import {
  index,
  serial,
  text,
  timestamp,
  varchar,
} from "drizzle-orm/mysql-core";

import { mySqlTable } from "./_table";
import { events } from "./event";

export const communities = mySqlTable(
  "communities",
  {
    id: serial("id").primaryKey(),
    name: varchar("name", { length: 255 }).notNull(),
    bio: varchar("bio", { length: 255 }),
    about: text("about"),
    createdAt: timestamp("created_at")
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),

    // A community must be tied to a Clerk  Organization
    organizationId: varchar("organizationId", { length: 36 }),
  },
  (community) => ({
    organizationIdIdx: index("organizationId_idx").on(community.organizationId),
  }),
);

export const communitiesRelations = relations(communities, ({ many }) => ({
  events: many(events),
}));
