import { createClient } from "@sanity/client";

// Get data set
const dataset_ = process.env.SANITY_DATA_SET || "production"

export const client = createClient({
  projectId: "qfsk5hf2",
  dataset: dataset_,
  apiVersion: "2024-01-01",
  useCdn: false,
});