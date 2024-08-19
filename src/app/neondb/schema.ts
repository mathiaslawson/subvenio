// file: src/app/db/schema.ts
import { pgTable, text, timestamp } from "drizzle-orm/pg-core";
import { sql } from "drizzle-orm";
import {
  index,
  pgTableCreator,
  serial,
  varchar,
  pgEnum,
  boolean,
  integer,
  uuid
} from "drizzle-orm/pg-core";

export const createTable = pgTableCreator((name) => `${name}`);
import { collections } from "~/server/db/collections";
import { nanoid } from "~/lib/utils";


/**
 * This table stores quotes submitted by users.
 */
export const UserMessages = pgTable("user_messages", {
  // This will be the user ID provided by Clerk
  user_id: text("user_id").primaryKey().notNull(),
  createTs: timestamp("create_ts").defaultNow().notNull(),
  message: text("message").notNull(),
});


export { collections };

export const posts = createTable(
  "post",
  {
    id: serial("id").primaryKey(),
    name: varchar("name", { length: 256 }),
    createdAt: timestamp("created_at", { withTimezone: true })
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
    updatedAt: timestamp("updated_at", { withTimezone: true }).$onUpdate(
      () => new Date(),
    ),
  },
  (example) => ({
    nameIndex: index("posts_name_idx").on(example.name),
  }),
);

export const subscriptions = pgEnum("subscription", [
  "regular",
  "low",
  "mid",
  "high",
]);

export const users = createTable(
  "user",
  {
    id: serial("id").primaryKey(),
    name: varchar("name", { length: 256 }),
    status: subscriptions("subscription"),
    createdAt: timestamp("created_at", { withTimezone: true })
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
    updatedAt: timestamp("updated_at", { withTimezone: true }).$onUpdate(
      () => new Date(),
    ),
  },
  (example) => ({
    nameIndex: index("users_name_idx").on(example.name),
  }),
);

export const cardTypes = pgEnum("card_type", ["regular", "paid"]);

export const cards = createTable(
  "card",
  {
    id: varchar("id", { length: 191 })
      .primaryKey()
      .$defaultFn(() => nanoid()),
    question: varchar("question", { length: 512 }),
    userId: varchar("userId"),
    answer: varchar("answer", { length: 512 }),
    cardType: cardTypes("card_type").default("regular").notNull(),
    collectionId: varchar("collectionId", { length: 191 }).references(
      () => collections.id,
      { onDelete: "cascade" },
    ),
    createdAt: timestamp("created_at", { withTimezone: true })
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
    updatedAt: timestamp("updated_at", { withTimezone: true }).$onUpdate(
      () => new Date(),
    ),
  },
  (card) => ({
    questionIndex: index("cards_question_idx").on(card.question),
    collectionIdIndex: index("cards_collection_id_idx").on(card.collectionId),
  }),
);
