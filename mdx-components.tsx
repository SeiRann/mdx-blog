import type { MDXComponents } from "mdx/types";
import Link from "next/link";

const components: MDXComponents = {};

export function useMDXComponents(): MDXComponents {
  return {
    h1: (props) => (
      <h1
        className="text-6xl dark:text-dark-blue-foreground text-red-foreground"
        {...props}
      />
    ),
    h2: (props) => (
      <h2
        className="text-4xl dark:text-dark-blue-foreground text-red-foreground"
        {...props}
      />
    ),
    h3: (props) => (
      <h3
        className="text-2xl dark:text-dark-blue-foreground text-red-foreground"
        {...props}
      />
    ),
    h4: (props) => (
      <h4
        className="text-lg dark:text-dark-blue-foreground text-red-foreground"
        {...props}
      />
    ),
    h5: (props) => (
      <h5
        className="text-md dark:text-dark-blue-foreground text-red-foreground"
        {...props}
      />
    ),
    h6: (props) => (
      <h6
        className="text-sm dark:text-dark-blue-foreground text-red-foreground"
        {...props}
      />
    ),
    p: (props) => (
      <p
        className="my-2 dark:text-dark-blue-foreground text-red-foreground"
        {...props}
      />
    ),
    a: (props) => (
      <Link className="dark:text-green-foreground hover:underline" {...props} />
    ),
    em: (props) => <em className="italic" {...props} />,
    strong: (props) => <strong className="font-bold" {...props} />,
    hr: (props) => <hr className="my-4" {...props} />,
    img: (props) => <img className="my-4 rounded-md" {...props} />,
    li: (props) => <li className="ml-4" {...props} />,
    ol: (props) => <ol className="my-2 ml-4 list-decimal" {...props} />,
    ul: (props) => <ul className="my-2 ml-4 list-disc" {...props} />,
    blockquote: (props) => <blockquote className="" {...props} />,
    code: (props) => (
      <code
        className="p-1 rounded-sm bg-background-3 dark:bg-dark-background-0h"
        {...props}
      />
    ),
    pre: (props) => (
      <pre
        className="p-1 w-1/3 rounded-sm ml-2 bg-background-3 dark:bg-dark-background-0s my-4"
        {...props}
      />
    ),

    ...components,
  };
}
