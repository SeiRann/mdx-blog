import type { MDXComponents } from "mdx/types";

const components: MDXComponents = {};

export function useMDXComponents(): MDXComponents {
  return {
    h1: (props) => <h1 className="text-2xl" {...props} />,

    ...components,
  };
}
