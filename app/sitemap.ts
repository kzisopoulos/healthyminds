import { getBlogs } from "@sanity/sanity-utils";

export default async function sitemap() {
  // for dynamic urls we can add fetch logic here e.g get the articles map over them and return an array of objects with the same structure
  const blogs = await getBlogs();

  const blogRoutes = blogs.map((blog) => {
    return {
      url: `http://healthyminds.gr/blog/${blog.slug}`,
      lastModified: new Date().toISOString,
    };
  });

  const routes = ["", "/about", "/services", "/blog", "/contact"].map(
    (route) => {
      return {
        url: `http://healthyminds.gr${route}`,
        lastModified: new Date().toISOString(),
      };
    }
  );
  return [...routes, ...blogRoutes];
}
