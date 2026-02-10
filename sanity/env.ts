const strip = (v?: string) => v?.replace(/^["']+|["']+$|\s+/g, "") ?? undefined;

export const apiVersion = strip(process.env.NEXT_PUBLIC_SANITY_API_VERSION) || "2024-10-14";

export const dataset = assertValue(
  strip(process.env.NEXT_PUBLIC_SANITY_DATASET),
  "Missing environment variable: NEXT_PUBLIC_SANITY_DATASET",
);

export const projectId = assertValue(
  (strip(process.env.NEXT_PUBLIC_SANITY_PROJECT_ID) || "").toLowerCase(),
  "Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID",
);

export const token = process.env.SANITY_WRITE_TOKEN ?? process.env.SANITY_TOKEN;

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage);
  }

  return v;
}
