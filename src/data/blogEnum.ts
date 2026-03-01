export const BlogSlug = {
  SOCIAL_MEDIA_GROWTH_2024: "social-media-growth-2024",
  CONTENT_THAT_CONVERTS: "content-that-converts",
  SEO_WITHOUT_BORING_STUFF: "seo-without-boring-stuff",
  CRAZY: "crazy",
} as const;

export type BlogSlug = (typeof BlogSlug)[keyof typeof BlogSlug];

export interface BlogMetadata {
  id: string;
  slug: BlogSlug;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  readTime: string;
  contentPath: string;
}

export const blogMetadataMap: Record<BlogSlug, BlogMetadata> = {
  [BlogSlug.SOCIAL_MEDIA_GROWTH_2024]: {
    id: "1",
    slug: BlogSlug.SOCIAL_MEDIA_GROWTH_2024,
    title: "Social Media Growth Strategies That Actually Work in 2024",
    excerpt:
      "Stop guessing and start growing. These proven tactics will transform your social presence from ghost town to buzzing community.",
    image:
      "https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=800",
    date: "2024-03-15",
    readTime: "5 min read",
    contentPath: "/src/data/blogs/social-media-growth-2024.md",
  },
  [BlogSlug.CONTENT_THAT_CONVERTS]: {
    id: "2",
    slug: BlogSlug.CONTENT_THAT_CONVERTS,
    title: "How to Create Content That Actually Converts (Not Just Likes)",
    excerpt:
      "Likes are nice, but sales are better. Learn how to create content that turns scrollers into buyers.",
    image:
      "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800",
    date: "2024-03-08",
    readTime: "7 min read",
    contentPath: "/src/data/blogs/content-that-converts.md",
  },
  [BlogSlug.SEO_WITHOUT_BORING_STUFF]: {
    id: "3",
    slug: BlogSlug.SEO_WITHOUT_BORING_STUFF,
    title: "SEO That Doesn't Put You (or Your Audience) to Sleep",
    excerpt:
      "SEO doesn't have to be technical torture. Here's the human-friendly guide to ranking on Google.",
    image:
      "https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=800",
    date: "2024-02-28",
    readTime: "6 min read",
    contentPath: "/src/data/blogs/seo-without-boring-stuff.md",
  },
  [BlogSlug.CRAZY]: {
    id: "4",
    slug: BlogSlug.CRAZY,
    title: "How the thing is working",
    excerpt: "CRAZY is loading",
    image: "https://www.shutterstock.com/image-vector/cartoon-comic-mascot-make-crazy-600nw-2472374863.jpg",
    date: "2024-03-01",
    readTime: "1 min read",
    contentPath: "/src/data/blogs/crazy.md",
  },
};

export const getAllBlogs = (): BlogMetadata[] => {
  return Object.values(blogMetadataMap);
};

export const getBlogBySlug = (slug: string): BlogMetadata | undefined => {
  return Object.values(blogMetadataMap).find((blog) => blog.slug === slug);
};
