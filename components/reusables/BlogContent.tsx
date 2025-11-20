import React from "react";

interface BlogContentProps {
  content: string;
  className?: string;
}

const BlogContent: React.FC<BlogContentProps> = ({
  content,
  className = "",
}) => {
  return (
    <div
      className={`prose prose-lg max-w-none prose-a:text-blue-600 prose-a:underline prose-a:hover:text-blue-700 blog-content ${className}`}
      dangerouslySetInnerHTML={{ __html: content }}
      style={
        {
          // Inline styles as fallback for deployments where CSS might not load properly
          "--prose-links": "#2563eb",
          "--prose-links-hover": "#1d4ed8",
        } as React.CSSProperties
      }
    />
  );
};

export default BlogContent;
