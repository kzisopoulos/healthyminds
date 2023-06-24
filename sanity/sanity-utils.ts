import { IBlog } from "@interfaces/IBlog";
import { createClient, groq } from "next-sanity";

export async function getBlogs(): Promise<IBlog[]> {
  const client = createClient({
    projectId: process.env.SANITY_PROJECT_ID,
    dataset: process.env.SANITY_DATASET,
    apiVersion: process.env.SANITY_API_VERSION,
  });

  return client.fetch(groq`*[_type == "blog"] | order(_createdAt desc) {
    _id,
    _createdAt,
    title,
    subtitle,
    "slug": slug.current,
    "imageUrl": image.asset->url,
    "imageAlt": image.alt,
    ttr,
    author,
    content
  }`);
}

export async function getBlog(slug: string): Promise<IBlog> {
  const client = createClient({
    projectId: process.env.SANITY_PROJECT_ID,
    dataset: process.env.SANITY_DATASET,
    apiVersion: process.env.SANITY_API_VERSION,
  });

  return client.fetch(
    groq`*[_type == "blog" && slug.current == $slug][0]{
    _id,
    _createdAt,
    title,
    subtitle,
    "slug": slug.current,
    "imageUrl": image.asset->url,
    "imageAlt": image.alt,
    ttr,
    author,
    content
  }`,
    { slug }
  );
}
