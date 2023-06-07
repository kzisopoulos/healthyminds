export default async function sitemap() {
  // for dynamic urls we can add fetch logic here e.g get the articles map over them and return an array of objects with the same structure

  const routes = ["", "/about", "/services", "/blog", "/contact"].map(
    (route) => {
      return {
        url: `http://healthyminds.gr${route}`,
        lastModified: new Date().toISOString(),
      };
    }
  );
  return routes;
}
