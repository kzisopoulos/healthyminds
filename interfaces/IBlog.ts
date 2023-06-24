import { PortableTextBlock } from "sanity";

export interface IBlog {
  _id: string;
  _createdAt: string;
  title: string;
  subtitle: string;
  slug: string;
  imageUrl: string;
  imageAlt: string;
  ttr: string;
  author: string;
  content: PortableTextBlock[];
}
