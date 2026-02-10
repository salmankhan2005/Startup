import "server-only";

import { defineLive } from "next-sanity";
import { client } from "@/sanity/lib/client";
import { token } from "@/sanity/env";

const liveConfig = { 
  client,
  ...(token && { serverToken: token, browserToken: token })
};

export const { sanityFetch, SanityLive } = defineLive(liveConfig);
