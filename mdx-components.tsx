import type { MDXComponents } from "mdx/types";

const components: MDXComponents = {};

export function useMDXComponents(): MDXComponents {
  return {
    h1: (props) => (
      <h1
        className="text-6xl dark:text-dark-red-foreground text-red-foreground"
        {...props}
      />
    ),
    h2: (props) => (
      <h2
        className="text-4xl dark:text-dark-red-foreground text-red-foreground"
        {...props}
      />
    ),
    h3: (props) => (
      <h3
        className="text-2xl dark:text-dark-red-foreground text-red-foreground"
        {...props}
      />
    ),
    h4: (props) => (
      <h4
        className="text-lg dark:text-dark-red-foreground text-red-foreground"
        {...props}
      />
    ),
    h5: (props) => (
      <h5
        className="text-md dark:text-dark-red-foreground text-red-foreground"
        {...props}
      />
    ),
    h6: (props) => (
      <h6
        className="text-sm dark:text-dark-red-foreground text-red-foreground"
        {...props}
      />
    ),
    p: (props) => (
      <p
        className="my-2 dark:text-dark-red-foreground text-red-foreground"
        {...props}
      />
    ),
    a: (props) => (
      <a className="text-green-foreground hover:underline" {...props} />
    ),
    em: (props) => <em className="italic" {...props} />,
    strong: (props) => <strong className="font-bold" {...props} />,
    hr: (props) => <hr className="my-4" {...props} />,
    img: (props) => <img className="my-4" {...props} />,
    li: (props) => <li className="ml-4" {...props} />,
    ol: (props) => <ol className="my-2 ml-4 list-decimal" {...props} />,
    ul: (props) => <ul className="my-2 ml-4 list-disc" {...props} />,
    blockquote: (props) => <blockquote className="" {...props} />,
    code: (props) => <code className="" {...props} />,
    pre: (props) => <pre className="my-4" {...props} />,

    ...components,
  };
}
