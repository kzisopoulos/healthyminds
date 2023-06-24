import { getBlog } from "@sanity/sanity-utils";
import { PortableText } from "@portabletext/react";
import { comps } from "@sanity/sanity-serializer";
import Spacer from "@components/Spacer";
import Image from "next/image";
import { FaCalendar, FaClock, FaPencilAlt } from "react-icons/fa";
import { formatDistance } from "date-fns";
import { el } from "date-fns/locale";
import Link from "next/link";

interface slugProps {
  params: { slug: string };
}

const slug = async ({ params }: slugProps) => {
  const slug = params.slug;
  const blog = await getBlog(slug);
  return (
    <article>
      <header className="pb-8">
        <h1 className="head_text capitalize text-center mx-auto green_gradient p-4 max-w-xl">
          {blog.title}
        </h1>
        <h2 className="text-center text-2xl p-4 green_gradient">
          {blog.subtitle}
        </h2>
      </header>
      <div className="text-primary-teal-dark flex flex-col md:flex-row gap-2 items-center justify-center md:gap-10 ">
        <p className="  flex items-center gap-1 top-3 right-3">
          <FaPencilAlt className=" h-4 w-4" />
          <span>{blog.author}</span>
        </p>
        <p className="  flex items-center gap-1 top-3 left-3">
          <FaCalendar className=" h-4 w-4" />
          {formatDistance(new Date(blog._createdAt), new Date(), {
            addSuffix: true,
            locale: el,
          })}
        </p>
        <p className="  flex items-center gap-1 top-3 right-3">
          <FaClock className=" h-4 w-4" />
          <span>{blog.ttr}</span>
        </p>
      </div>
      <Spacer />
      <figure className="relative w-full h-[30vh] sm:h-[70vh]">
        <Image
          src={blog.imageUrl}
          alt={blog.imageAlt}
          fill
          className="object-cover aspect-video"
        />
      </figure>

      <Spacer />
      <div className="text-left max-w-2xl mx-auto">
        <PortableText value={blog.content} components={comps} />
      </div>
      <div className="text-center">
        <Link
          href="/blog"
          className="uppercase inline-block orange_background mt-8 text-white font-semibold py-2 px-4 text-base rounded-md"
        >
          Πισω στα blog
        </Link>
      </div>
    </article>
  );
};

export default slug;
