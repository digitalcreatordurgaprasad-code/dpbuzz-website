export interface LegalSection {
  heading: string;
  content: string;
}

export interface LegalPageData {
  title: string;
  lastUpdated: string;
  sections: LegalSection[];
}

export const legalData: Record<string, LegalPageData> = {
  'privacy-policy': {
    title: "Privacy Policy",
    lastUpdated: "January 20, 2026",
    sections: [
      {
        heading: "1. Information We Collect",
        content: "At DPBuzz, we collect information when you visit our website, fill out a contact form, or subscribe to our newsletter. This includes your name, email address, phone number, and any project details you provide."
      },
      {
        heading: "2. How We Use Your Data",
        content: "We use your information to provide our digital marketing services, respond to enquiries, and send occasional marketing updates. We do not sell or trade your personal information to outside parties."
      },
      {
        heading: "3. Cookies & Tracking",
        content: "Our website uses cookies to improve your browsing experience and analyze site traffic. You can choose to disable cookies through your browser settings."
      },
      {
        heading: "4. Data Security",
        content: "We implement a variety of security measures to maintain the safety of your personal information when you enter, submit, or access your personal information."
      }
    ]
  },
  'disclaimer': {
    title: "Legal Disclaimer",
    lastUpdated: "January 20, 2026",
    sections: [
      {
        heading: "1. Information Accuracy",
        content: "The information provided on this website is for general informational purposes only. While we strive for accuracy, DPBuzz makes no warranties about the completeness or reliability of this information."
      },
      {
        heading: "2. No Guarantee of Results",
        content: "Digital marketing results depend on various external factors. DPBuzz does not guarantee specific rankings, sales, or lead volumes as results may vary per business."
      },
      {
        heading: "3. External Links",
        content: "Our website may contain links to external sites that are not provided or maintained by us. We do not guarantee the accuracy of any information on these external websites."
      }
    ]
  },
  'terms-conditions': {
    title: "Terms & Conditions",
    lastUpdated: "January 20, 2026",
    sections: [
      {
        heading: "1. Agreement to Terms",
        content: "By accessing the DPBuzz website, you agree to follow these Terms & Conditions. If you do not agree with any part of these terms, you must not use our website."
      },
      {
        heading: "2. Intellectual Property",
        content: "All content on this website, including text, graphics, logos, and images, is the property of DPBuzz and is protected by copyright laws."
      },
      {
        heading: "3. User Obligations",
        content: "You agree to use our website only for lawful purposes. You are prohibited from using the site to transmit any harmful, threatening, or offensive content."
      }
    ]
  }
};