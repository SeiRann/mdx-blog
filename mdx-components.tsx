import type { MDXComponents } from "mdx/types";
import Link from "next/link";

const components: MDXComponents = {};

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: (props) => (
      <h1
        className="text-2xl sm:text-3xl md:text-6xl dark:text-dark-blue-foreground text-red-foreground"
        {...props}
      />
    ),
    h2: (props) => (
      <h2
        className="text-xl sm:text-2xl md:text-5xl   dark:text-dark-blue-foreground text-red-foreground"
        {...props}
      />
    ),
    h3: (props) => (
      <h3
        className="text-lg sm:text-xl md:text-4xl dark:text-dark-blue-foreground text-red-foreground"
        {...props}
      />
    ),
    h4: (props) => (
      <h4
        className="text-md sm:text-lg md:text-3xl dark:text-dark-blue-foreground text-red-foreground"
        {...props}
      />
    ),
    h5: (props) => (
      <h5
        className="text-sm sm:text-md md:text-xl dark:text-dark-blue-foreground text-red-foreground"
        {...props}
      />
    ),
    h6: (props) => (
      <h6
        className="text-xs sm:text-sm md:text-md dark:text-dark-blue-foreground text-red-foreground"
        {...props}
      />
    ),
    p: (props) => (
      <p
        className="text-sm sm:text-md md:text-lg my-6 sm:my-4 md:my-2 dark:text-dark-blue-foreground text-red-foreground"
        {...props}
      />
    ),
    a: (props) => (
      <Link className="dark:text-green-foreground hover:underline" {...props} />
    ),
    em: (props) => <em className="italic" {...props} />,
    strong: (props) => <strong className="font-bold" {...props} />,
    hr: (props) => (
      <hr
        className="my-4 dark:text-dark-blue-foreground text-red-foreground"
        {...props}
      />
    ),
    img: (props) => <img className="my-4 rounded-md" {...props} />,
    li: (props) => <li className="ml-4" {...props} />,
    ol: (props) => <ol className="my-2 ml-4 list-decimal" {...props} />,
    ul: (props) => <ul className="my-2 ml-4 list-disc" {...props} />,
    blockquote: (props) => <blockquote className="" {...props} />,
    code: ({ className, ...props }) => {
      const isInline = !className;

      if (isInline) {
        return (
          <code
            className="px-1 py-0.5 rounded bg-background-3 dark:bg-dark-background-0h"
            {...props}
          />
        );
      }

      // For block code, let <pre> handle styling
      return <code className={className} {...props} />;
    },

    pre: (props) => (
      <pre
        className="p-1 rounded-md bg-background-3 dark:bg-dark-background-0s my-4 overflow-x-auto"
        {...props}
      />
    ),

    ...components,
  };
}
