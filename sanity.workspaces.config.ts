// Multiple workspace configuration
import { defineConfig } from "sanity";
import { AsteriskIcon, RocketIcon } from "@sanity/icons";
import { structureTool } from "sanity/structure";
import { schema } from "@/sanity/schemas";

export default defineConfig([
    {
        name: "glowing-engine",
        title: "Glowing Engine",
        subtitle: "a lovely sandbox",
        icon: AsteriskIcon,
        basePath: studioUrl,
        projectId,
        dataset,
        schema: {
            types: schema.types,
        },

        // beta features
        beta: {
            create: {startInCreateEnabled: true},
        },

        // custom components
        // studio: {
        //   components: {
        //     navbar: CustomNavbar,
        //   },
        // },
    },
    {
        name: "staging-workspace",
        title: "Another Workspace!",
        subtitle: "staging",
        icon: RocketIcon,
        projectId,
        basePath: "/staging",
        dataset: "space-ghost",
        plugins: [structureTool()],
        schema: {
            types: schema.types,
        },

        beta: {
            create: { startInCreateEnabled: true },
        },
    },

]);
