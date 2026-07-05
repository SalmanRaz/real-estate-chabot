import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  // @xenova/transformers loads onnxruntime-node's native binary via a
  // computed path (bin/napi-v3/<platform>/<arch>/...), which Vercel's
  // automatic file-tracing can miss. Force it into the deployed function
  // bundle explicitly so the chat route doesn't crash on first request.
  outputFileTracingIncludes: {
    "/api/chat/route": ["./node_modules/onnxruntime-node/bin/**/*"],
  },
};

export default nextConfig;
