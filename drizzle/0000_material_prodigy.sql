DO $$ BEGIN
 CREATE TYPE "public"."card_type" AS ENUM('regular', 'paid');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 CREATE TYPE "public"."subscription" AS ENUM('regular', 'low', 'mid', 'high');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "card" (
	"id" serial PRIMARY KEY NOT NULL,
	"question" varchar(512),
	"answer" varchar(512),
	"card_type" "card_type" DEFAULT 'regular' NOT NULL,
	"collection_id" integer,
	"created_at" timestamp with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
	"updated_at" timestamp with time zone
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "collection" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(256),
	"description" varchar(512),
	"is_paid" boolean DEFAULT false NOT NULL,
	"created_at" timestamp with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
	"updated_at" timestamp with time zone
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "post" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(256),
	"created_at" timestamp with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
	"updated_at" timestamp with time zone
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "user" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(256),
	"subscription" "subscription",
	"created_at" timestamp with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
	"updated_at" timestamp with time zone
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "card" ADD CONSTRAINT "card_collection_id_collection_id_fk" FOREIGN KEY ("collection_id") REFERENCES "public"."collection"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "cards_question_idx" ON "card" ("question");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "cards_collection_id_idx" ON "card" ("collection_id");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "collections_name_idx" ON "collection" ("name");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "posts_name_idx" ON "post" ("name");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "users_name_idx" ON "user" ("name");