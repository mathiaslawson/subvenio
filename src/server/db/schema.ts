import { sql } from "drizzle-orm";
import {
  index,
  pgTableCreator,
  serial,
  timestamp,
  varchar,
  pgEnum,
  boolean,
  integer,
} from "drizzle-orm/pg-core";

export const createTable = pgTableCreator((name) => `${name}`);

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


export const collections = createTable(
  "collection",
  {
    id: serial("id").primaryKey(),
    name: varchar("name", { length: 256 }),
    description: varchar("description", { length: 512 }),
    isPaid: boolean("is_paid").default(false).notNull(),
    createdAt: timestamp("created_at", { withTimezone: true })
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
    updatedAt: timestamp("updated_at", { withTimezone: true }).$onUpdate(
      () => new Date(),
    ),
  },
  (collection) => ({
    nameIndex: index("collections_name_idx").on(collection.name),
  }),
);


export const cards = createTable(
  "card",
  {
    id: serial("id").primaryKey(),
    question: varchar("question", { length: 512 }),
    answer: varchar("answer", { length: 512 }),
    cardType: cardTypes("card_type").default("regular").notNull(),
    collectionId: integer("collection_id").references(() => collections.id),
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
