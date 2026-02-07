
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
  article?: boolean;
}

const SEO: React.FC<SEOProps> = ({ 
  title, 
  description, 
  keywords = "digital marketing agency Hyderabad, SEO services India, web design DPBuzz, Google Ads expert", 
  image = "https://picsum.photos/seed/dpbuzz/1200/630",
  article = false 
}) => {
  const { pathname } = useLocation();
  const siteName = "DPBuzz";
  const fullTitle = `${title} | ${siteName}`;

  useEffect(() => {
    // Update Title
    document.title = fullTitle;

    // Update Meta Description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', description);

    // Update Open Graph tags for Social Media
    const ogTags = {
      'og:title': fullTitle,
      'og:description': description,
      'og:image': image,
      'og:url': window.location.href,
      'og:type': article ? 'article' : 'website',
    };

    Object.entries(ogTags).forEach(([property, content]) => {
      let tag = document.querySelector(`meta[property="${property}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute('property', property);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    });

    // Add Canonical Link
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', window.location.href);

  }, [fullTitle, description, image, article, pathname]);

  return null;
};

export default SEO;
