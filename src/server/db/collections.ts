import { sql } from "drizzle-orm";
import {
  text,
  varchar,
  timestamp,
  pgTable,
  pgEnum,
  integer,
  boolean, // Add this line to import the boolean function
} from "drizzle-orm/pg-core";
import { createSelectSchema } from "drizzle-zod";
import { z } from "zod";

import { nanoid } from "~/lib/utils";



export const collections = pgTable("collections", {
  id: varchar("id", { length: 191 })
    .primaryKey()
    .$defaultFn(() => nanoid()),
  name: varchar("name", { length: 256 }),
  description: varchar("description", { length: 512 }),
  isPaid: boolean("is_paid").default(false).notNull(),
  createdAt: timestamp("created_at", { withTimezone: true })
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
  updatedAt: timestamp("updated_at", { withTimezone: true }).$onUpdate(
    () => new Date(),
  ),
});


export const insertResourceSchema = createSelectSchema(collections).extend({}).omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});


export type NewResourceParams = z.infer<typeof insertResourceSchema>;
