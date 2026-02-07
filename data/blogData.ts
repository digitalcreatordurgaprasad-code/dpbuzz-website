export interface BlogPost {
  id: string;
  title: string;
  category: string;
  content: string[];
  image: string;
  date: string;
  readTime: string;
}

const staticBlogData: Record<string, BlogPost> = {
  'web-design': {
    id: 'web-design',
    title: "Why Your Business Needs a Professional Website in 2026",
    category: "Website Design",
    date: "January 10, 2026",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&q=80&w=800",
    content: [
      "In simple terms, a website is like your online shop or office. In India, most people check a business on their mobile before buying anything. If you don't have a website, you are missing out on many customers.",
      "A professional website makes your brand look trustworthy. At DPBuzz, we build websites that are very easy to use and load very fast. This helps you get more enquiries.",
      "Key benefits of our web design: 1) It works perfectly on all mobile phones. 2) It tells your story in simple words. 3) It has clear buttons for customers to call or WhatsApp you.",
      "Don't let your competitors take your customers. Build a professional website today and start growing your business online."
    ]
  },
  'seo': {
    id: 'seo',
    title: "How to Come on the First Page of Google (SEO Guide)",
    category: "Google SEO",
    date: "January 15, 2026",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1551288049-bbda38a5f67d?auto=format&fit=crop&q=80&w=800",
    content: [
      "When someone searches for 'Best plumber in Hyderabad' or 'Best lawyer near me', Google shows a list of websites. SEO (Search Engine Optimization) is the technique used to bring your website to the top of that list.",
      "Most people only click on the first 3 or 4 results. If your business on page 2 or 3, you won't get any calls. We help you rank higher naturally so you don't have to pay for every click.",
      "We do this by using the right keywords that your customers are searching for. We also make your website faster and write helpful articles that Google loves.",
      "SEO takes time—usually 3 to 6 months—but the results are long-lasting and provide the best return on your investment."
    ]
  },
  'google-ads': {
    id: 'google-ads',
    title: "Get Instant Business Enquiries with Google Ads",
    category: "Google Ads",
    date: "January 20, 2026",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1551288049-bbda38a5f67d?auto=format&fit=crop&q=80&w=800",
    content: [
      "If you need customers right now, Google Ads is the best choice. Unlike SEO which takes months, Google Ads can show your business at the top of search results within 24 hours.",
      "The best part is that you only 'Pay Per Click'. This means you only pay Google when a potential customer clicks on your ad and visits your website or calls you.",
      "We manage your budget carefully so you get the most number of leads for the lowest price. We target specific areas in India where your customers live.",
      "Whether you are a small local shop or a big company, Google Ads can help you get more business calls instantly."
    ]
  },
  'meta-ads': {
    id: 'meta-ads',
    title: "Grow Your Brand on Facebook and Instagram (Meta Ads)",
    category: "Meta Ads",
    date: "January 25, 2026",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&q=80&w=800",
    content: [
      "Everyone in India is on Facebook and Instagram today. Meta Ads allow you to show your products or services directly to people who might be interested in them.",
      "We can target people based on their age, where they live, what they like, and even what they buy. This makes your marketing very sharp and effective.",
      "Beautiful images and short videos work best on social media. We help you create ads that people love to click. This is great for building your brand name and getting WhatsApp enquiries.",
      "Start showing your business to thousands of people on their mobile screens every day with our expert Meta Ads strategy."
    ]
  }
};

// Logic to dynamically load from LocalStorage
export const getBlogData = (): Record<string, BlogPost> => {
  const savedData = localStorage.getItem('dpbuzz_blog_data');
  if (savedData) {
    try {
      return JSON.parse(savedData);
    } catch (e) {
      return staticBlogData;
    }
  }
  return staticBlogData;
};

export const blogData = getBlogData();