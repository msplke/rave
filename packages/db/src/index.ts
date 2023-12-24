import { connect } from "@planetscale/database";
import { drizzle } from "drizzle-orm/planetscale-serverless";

import * as community from "./schema/community";
import * as event from "./schema/event";
import * as post from "./schema/post";

export const schema = { ...community, ...event, ...post };

export { mySqlTable as tableCreator } from "./schema/_table";

export * from "drizzle-orm";

const connection = connect({
  host: process.env.DB_HOST!,
  username: process.env.DB_USERNAME!,
  password: process.env.DB_PASSWORD!,
});

export const db = drizzle(connection, { schema });
