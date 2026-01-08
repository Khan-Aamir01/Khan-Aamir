import dotenv from "dotenv";

dotenv.config();

/**
 * Helper to read required env variables
 */
function getEnv(key: string): string {
  const value = process.env[key];
  if (!value) {
    throw new Error(`❌ Environment variable ${key} is missing`);
  }
  return value;
}

/**
 * Export validated env variables
 */
export const ENV = {
  PORT: getEnv("PORT"),
  MONGO_URI: getEnv("MONGO_URI"),
  JWT_SECRET: getEnv("JWT_SECRET"),
  ADMIN_PASSWORD: getEnv("ADMIN_PASSWORD"),
};
