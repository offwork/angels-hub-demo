"use client";
import Image from "next/image";
import Link from "next/link";
import ReactMarkdown from "react-markdown";

export default function EventBody({ content }: {content: string}) {
  return (
    <>
      <ReactMarkdown
        className="text-lg text-white leading-relaxed break-words"
        components={{
          h2: (props) => {
            return <h2 className="text-3xl mt-12 mb-4 leading-snug" {...props}>{props.children}</h2>
          },
          h3: (props) => {
            return <h3 className="text-2xl mt-8 mb-4 leading-snug" {...props}>{props.children}</h3>
          },
          p: (props) => {
            if (!Array.isArray(props.children) && props.children && typeof props.children !== "string") {
              return <p className="relative inline-block w-full h-auto my-6" {...props}>{props.children}</p>
            }
            return <p className="my-6" {...props}>{props.children}</p>
          },
          ol: (props) => {
            return <ol className="my-6" {...props}>{props.children}</ol>
          },
          ul: (props) => {
            return <div className="pl-6"><ul className="my-6 list-disc list-outside" {...props}>{props.children}</ul></div>
          },
          blockquote: (props) => {
            return <blockquote className="my-6" {...props}>{props.children}</blockquote>
          },
          a: (props) => {
            if (props.href?.length) {
              const href = props.href;
              const children = Array.isArray(props.children)
                ? props.children[0]
                : props.children;
              const hrefWithoutTrailingSlash = href.endsWith("/") ? href.slice(0, href.length - 1) : href;
              return (
                <Link
                  className="font-semibold hover:underline"
                  href={hrefWithoutTrailingSlash}
                  target="_blank"
                >
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-angel-orange-500 to-angel-orange-300">
                    {children}
                  </span>
                </Link>
              );
            }
            return null;
          },
          img: (props) => {
            if (props.src?.length) {
              const alt = props.alt || "Unnamed post image!";
              const altText = alt.replace(/\.[^\/.]+$/, '').split("-").join(" ") || alt
              return (
                <Image
                  src={props.src}
                  className="relative w-full h-auto object-cover object-center"
                  alt={altText}
                  width={896}
                  height={480}
                  sizes="100vw"
                />
              );
            }
            return null;
          },
        }}
      >
        {content}
      </ReactMarkdown>
    </>
  );
}
