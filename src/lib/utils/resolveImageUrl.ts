export default function resolveImageUrl(image?: { url?: string; formats?: { small?: { url?: string } } }): string {
    const baseUrl = import.meta.env.PUBLIC_STRAPI_API_URL || "http://localhost:1337";
  
    if (!image) return '/images/default-blog.jpg';
    
    // Prefer small format if exists
    if (image.formats?.small?.url) {
      return `${baseUrl}${image.formats.small.url}`;
    }
  
    // Else fallback to main url
    if (image.url) {
      return `${baseUrl}${image.url}`;
    }
  
    // Default fallback
    return '/images/default-blog.jpg';
  }