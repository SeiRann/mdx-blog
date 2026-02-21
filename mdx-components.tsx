import type { MDXComponents } from "mdx/types";

const components: MDXComponents = {};

export function useMDXComponents(): MDXComponents {
  return {
    h1: (props) => <h1 className="text-6xl" {...props} />,
    h2: (props) => <h2 className="text-4xl" {...props} />,
    h3: (props) => <h3 className="text-2xl" {...props} />,
    h4: (props) => <h4 className="text-lg" {...props} />,
    h5: (props) => <h5 className="text-md" {...props} />,
    h6: (props) => <h6 className="text-sm" {...props} />,
    p: (props) => <p className="my-2" {...props} />,
    a: (props) => <a className="text-blue-500" {...props} />,
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
