import blog from "@sanity/schemas/blog-schema";
import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";

const config = defineConfig({
  projectId: "e6sn830x",
  dataset: "production",
  title: "HealthyMinds Blogs",
  apiVersion: "2023-06-17",
  token: process.env.SANITY_TOKEN,
  basePath: "/admin",
  plugins: [deskTool()],
  schema: { types: [blog] },
});

export default config;
