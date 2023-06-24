import { FaCaretRight } from "react-icons/fa";

export const comps = {
  block: {
    h1: ({ children }: any) => (
      <h1 className="text-6xl text-teal-shade-3">{children}</h1>
    ),
    h2: ({ children }: any) => (
      <h2 className="text-5xl text-teal-shade-3">{children}</h2>
    ),
    h3: ({ children }: any) => (
      <h3 className="text-4xl text-teal-shade-3">{children}</h3>
    ),
    h4: ({ children }: any) => (
      <h4 className="text-3xl text-teal-shade-3">{children}</h4>
    ),
    h5: ({ children }: any) => (
      <h5 className="text-2xl text-teal-shade-3">{children}</h5>
    ),
    h6: ({ children }: any) => (
      <h6 className="text-xl text-teal-shade-3">{children}</h6>
    ),
    normal: ({ children }: any) => (
      <p className="py-2 tracking-wider">{children}</p>
    ),
    blockquote: ({ children }: any) => (
      <blockquote className="border-l-4 border-primary-teal-dark px-1">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }: any) => (
      <ul className="py-2 flex flex-col gap-1">
        {children.map((item: any, index: any) => (
          <span key={index} className="flex items-center">
            <FaCaretRight />
            {item}
          </span>
        ))}
      </ul>
    ),
    number: ({ children }: any) => (
      <ol className="py-2 flex flex-col gap-1">
        {children.map((item: any, index: any) => (
          <span key={index} className="flex items-center">
            <FaCaretRight />
            {item}
          </span>
        ))}
      </ol>
    ),
  },
};
