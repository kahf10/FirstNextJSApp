import { loadEnvConfig } from "@next/env";

const projectDir = process.cwd();
loadEnvConfig(projectDir);

console.log("✅ Environment Variables Loaded from .env.local");
