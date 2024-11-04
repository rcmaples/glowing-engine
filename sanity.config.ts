"use client";
/**
 * This config is used to set up Sanity Studio that's mounted on the `app/(sanity)/studio/[[...tool]]/page.tsx` route
 */
import { visionTool } from "@sanity/vision";
import {
  PluginOptions,
  defineConfig,
  defineLocaleResourceBundle,
} from "sanity";
import { unsplashImageAsset } from "sanity-plugin-asset-source-unsplash";
import {
  presentationTool,
  defineDocuments,
  defineLocations,
  type DocumentLocation,
} from "sanity/presentation";
import { structureTool } from "sanity/structure";

import { apiVersion, dataset, projectId, studioUrl } from "@/sanity/lib/api";
import { pageStructure, singletonPlugin } from "@/sanity/plugins/settings";
import { assistWithPresets } from "@/sanity/plugins/assist";
import { schema } from "@/sanity/schemas";
import { settings } from "@/sanity/schemas/singletons/settings";
import { resolveHref } from "@/sanity/lib/utils";

const homeLocation = {
  title: "Home",
  href: "/",
} satisfies DocumentLocation;

let previewBaseURL = "";

switch (process.env.NODE_ENV) {
  case "development":
    previewBaseURL = "http://localhost:3000";
    break;
  case "production":
    previewBaseURL = "https://glowing-engine.netlify.app";
    break;
  default:
    break;
}

export default defineConfig({
  basePath: studioUrl,
  projectId,
  dataset,
  schema,
  plugins: [
    presentationTool({
      resolve: {
        mainDocuments: defineDocuments([
          {
            route: "/posts/:slug",
            filter: `_type == "post" && slug.current == $slug`,
          },
        ]),
        locations: {
          settings: defineLocations({
            locations: [homeLocation],
            message: "This document is used on all pages",
            tone: "caution",
          }),
          post: defineLocations({
            select: {
              title: "title",
              slug: "slug.current",
            },
            resolve: (doc) => ({
              locations: [
                {
                  title: doc?.title || "Untitled",
                  href: resolveHref("post", doc?.slug)!,
                },
                homeLocation,
              ],
            }),
          }),
        },
      },
      previewUrl: {
        previewMode: {
          enable: `${previewBaseURL}/api/draft-mode/enable`,
        },
      },
    }),
    structureTool({ structure: pageStructure([settings]) }),
    singletonPlugin([settings.name]),
    unsplashImageAsset(),
    assistWithPresets(),
    visionTool({ defaultApiVersion: apiVersion }),
  ].filter(Boolean) as PluginOptions[],
  i18n: {
    bundles: [
      {
        locale: "en-US",
        namespace: "studio",
        resources: {
          "inputs.boolean.disabled": "This toggle is read-only",
        },
      },
    ],
  },
});
