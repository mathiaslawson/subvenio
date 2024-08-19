import { type Config } from "drizzle-kit";

import { env } from "~/env";

export default {
  schema: "./src/app/neondb/schema.ts",
  dialect: "postgresql",
  dbCredentials: {
    url: env.DATABASE_URL,
  },
  tablesFilter: ["*"],
} satisfies Config;
