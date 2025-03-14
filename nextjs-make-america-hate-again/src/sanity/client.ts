import { createClient } from "@sanity/client";

// Get run env
const runENV = process.env.NODE_ENV;

export const client = createClient({
  projectId: "qfsk5hf2",
  dataset: runENV === "development" ? "development" : "production",
  apiVersion: "2024-01-01",
  useCdn: false,
});