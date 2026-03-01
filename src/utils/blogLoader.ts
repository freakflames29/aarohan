import type { BlogMetadata } from "../data/blogEnum";
import { BlogSlug, blogMetadataMap } from "../data/blogEnum";

export interface BlogPost extends BlogMetadata {
  content: string;
}

// Import all markdown files using Vite's import.meta.glob
const markdownFiles = import.meta.glob<string>("/src/data/blogs/*.md", {
  query: "?raw",
  import: "default",
  eager: true,
});

export const loadBlogContent = async (slug: BlogSlug): Promise<BlogPost | null> => {
  const metadata = blogMetadataMap[slug];
  if (!metadata) return null;

  try {
    // Get the content from the imported files
    const content = markdownFiles[metadata.contentPath];
    
    if (!content) {
      console.error(`Blog content not found for path: ${metadata.contentPath}`);
      return null;
    }

    return {
      ...metadata,
      content,
    };
  } catch (error) {
    console.error(`Error loading blog content for ${slug}:`, error);
    return null;
  }
};

export const loadAllBlogs = (): BlogPost[] => {
  const blogs: BlogPost[] = [];
  
  for (const slug of Object.values(BlogSlug)) {
    const metadata = blogMetadataMap[slug as BlogSlug];
    const content = markdownFiles[metadata.contentPath];
    
    if (content) {
      blogs.push({
        ...metadata,
        content,
      });
    }
  }
  
  // Sort by date (newest first)
  return blogs.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
};

export const getBlogSlugFromString = (slugString: string): BlogSlug | undefined => {
  return Object.values(BlogSlug).find((s) => s === slugString) as BlogSlug | undefined;
};
