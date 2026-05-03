import { betterAuth } from "better-auth";
import Database from "better-sqlite3";
import path from "path";

// Define the absolute path for the SQLite database so it stays consistent
const dbPath = path.resolve(process.cwd(), "sqlite.db");
const db = new Database(dbPath);

export const auth = betterAuth({
    database: db,
    emailAndPassword: {
        enabled: true,
    },
    // We mock Google login config for demonstration without failing
    socialProviders: {
        google: {
            clientId: process.env.GOOGLE_CLIENT_ID || "mock-id",
            clientSecret: process.env.GOOGLE_CLIENT_SECRET || "mock-secret",
        }
    }
});
