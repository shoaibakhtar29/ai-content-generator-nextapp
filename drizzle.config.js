/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./utils/schema.tsx",
    dialect: 'postgresql',
    dbCredentials: {
      url: 'ppostgresql://Ai-Content-Generator_owner:VEC7dT8zsMwR@ep-lucky-credit-a5wipllj.us-east-2.aws.neon.tech/Ai-Content-Generator?sslmode=require',
    }
  };