import Link from "next/link";
import { FC } from "react";

interface ServiceCardProps {
  title: string;
  content: string;
  coupon?: string;
  tags: string[];
}

const ServiceCard: FC<ServiceCardProps> = ({
  title,
  content,
  coupon,
  tags,
}) => {
  return (
    <div className="glassmorphism flex flex-col max-w-xl xl:max-w-lg relative overflow-hidden">
      <h3 className="font-semibold text-2xl text-teal-shade-3 mb-5 max-w-[200px] sm:max-w-xs">
        {title}
      </h3>
      <div className="flex gap-2 mb-4">
        {tags.map((tag) => (
          <span
            key={tag}
            className="text-xs inline-block self-start bg-primary-teal-dark px-3 py-1 text-primary-teal-light rounded-full tracking-wider"
          >
            # {tag}
          </span>
        ))}
      </div>
      {coupon && (
        <p className="absolute -right-8 top-8 rotate-45 bg-primary-teal-dark w-40 text-center text-primary-teal-light text-lg">
          {coupon}
        </p>
      )}
      <p className="mb-5">{content}</p>
      <Link
        href="/contact"
        className="inline-block uppercase orange_background text-white font-semibold py-2 px-4 rounded-md self-start mt-auto"
      >
        Με ενδιαφερει
      </Link>
    </div>
  );
};

export default ServiceCard;
