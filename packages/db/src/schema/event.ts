import { relations, sql } from "drizzle-orm";
import {
  index,
  serial,
  text,
  timestamp,
  varchar,
} from "drizzle-orm/mysql-core";

import { mySqlTable } from "./_table";
import { communities } from "./community";

export const events = mySqlTable(
  "events",
  {
    id: serial("id").primaryKey(),
    title: varchar("name", { length: 255 }).notNull(),
    about: text("about"),
    createdAt: timestamp("created_at")
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
    updatedAt: timestamp("updated_at").onUpdateNow(),

    // An event must be tied to a Rave Community
    communityId: varchar("communityId", { length: 36 }),
  },
  (event) => ({
    communityIdIdx: index("communityId_idx").on(event.communityId),
  }),
);

export const eventsRelations = relations(events, ({ one }) => ({
  community: one(communities, {
    fields: [events.communityId],
    references: [communities.id],
  }),
}));
