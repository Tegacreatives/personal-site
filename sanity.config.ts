import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./deeppink-lobster/schemas";

export default defineConfig({
  name: "default",
  title: "deeppink-lobster",

  projectId: "cv1zk67h",
  dataset: "production",

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
});
