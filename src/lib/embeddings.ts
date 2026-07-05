import os from "node:os";
import path from "node:path";
import { env, pipeline } from "@xenova/transformers";

// Serverless platforms like Vercel only allow writes to a temp directory
// (the rest of the filesystem is read-only). os.tmpdir() resolves to that
// writable temp directory in production and to a normal temp folder when
// running locally, so this works on both without hardcoding a Linux path.
env.cacheDir = path.join(os.tmpdir(), "transformers-cache");
env.allowLocalModels = false;

type FeatureExtractor = (
  text: string,
  options: { pooling: "mean"; normalize: boolean },
) => Promise<{ data: Float32Array }>;

let extractorPromise: Promise<FeatureExtractor> | null = null;

function getExtractor() {
  if (!extractorPromise) {
    extractorPromise = pipeline(
      "feature-extraction",
      "Xenova/all-MiniLM-L6-v2",
    ) as unknown as Promise<FeatureExtractor>;
  }

  return extractorPromise;
}

export async function embed(text: string): Promise<number[]> {
  const extractor = await getExtractor();
  const output = await extractor(text, { pooling: "mean", normalize: true });

  return Array.from(output.data);
}

export function toVectorLiteral(embedding: number[]): string {
  return `[${embedding.join(",")}]`;
}
