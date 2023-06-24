import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getBlogs } from "@sanity/sanity-utils";
import { FaCalendar, FaClock } from "react-icons/fa";
import { formatDistance } from "date-fns";
import { el } from "date-fns/locale";

const Blog = async () => {
  const blogs = await getBlogs();
  return (
    <section className="grid grid-cols-1 gap-2 place-items-center md:grid-cols-2">
      {blogs.map((blog) => {
        const preview =
          // @ts-ignore
          blog.content[0]?.children[0].text.substring(0, 100) + "...";
        return (
          <Link
            href={`/blog/${blog.slug}`}
            key={blog._id}
            className="flex flex-col items-center w-full max-w-md md:max-w-xl glassmorphism gap-4 relative"
          >
            <p className="absolute text-primary-teal-dark flex items-center gap-1 top-3 left-3">
              <FaCalendar className=" h-4 w-4" />
              {formatDistance(new Date(blog._createdAt), new Date(), {
                addSuffix: true,
                locale: el,
              })}
            </p>
            <p className="absolute text-primary-teal-dark flex items-center gap-1 top-3 right-3">
              <FaClock className=" h-4 w-4" />
              <span>{blog.ttr}</span>
            </p>
            <Image
              src={blog.imageUrl}
              alt={blog.imageAlt}
              width={100}
              height={100}
              className="object-cover aspect-square rounded-full"
            />
            <div>
              <h1 className="md:text-lg font-semibold text-2xl text-center text-teal-shade-3 mb-2">
                {blog.title}
              </h1>
              <p>{preview}</p>
            </div>
            <span className="uppercase orange_background mt-4 text-white font-semibold py-2 px-4 text-sm shrink-0 rounded-md lg:mt-auto">
              Περισσοτερα
            </span>
          </Link>
        );
      })}
    </section>
  );
};
export const metadata: Metadata = {
  title:
    "Healthyminds | Άρθρα - Blog | Γραφείο Ψυχολόγου Μιχάλη Βαζούρα | Νεα Φιλαδέλφεια",
  description:
    "Healthyminds | Αρθρογραφία - Blogs | Διαβάστε πρώτοι τα νέα άρθρα του κλινικού ψυχολόγου Μιχάλη Βαζούρα.",
};

export default Blog;
