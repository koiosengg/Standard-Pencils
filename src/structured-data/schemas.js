// JSON-LD Structured Data for Standard Pencils
// Place these objects in your React Helmet or inject them into the <head> of each page

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Standard Pencils",
  "alternateName": "Standard Pencil Company",
  "url": "https://www.stdpencil.com",
  "logo": "https://www.stdpencil.com/Logo.png",
  "description": "Leading OEM cosmetic pencil manufacturer since 1981. Specializing in kajal, eyeliner, lip liner, and custom cosmetic pencil formulations for beauty brands worldwide.",
  "foundingDate": "1981",
  "founders": [
    {
      "@type": "Person",
      "name": "Standard Pencils Founder"
    }
  ],
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Bengaluru",
    "addressRegion": "Karnataka",
    "addressCountry": "IN"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+91-28938938938",
    "contactType": "Sales",
    "email": "info@stdpencil.com",
    "availableLanguage": ["English"]
  },
  "sameAs": [
    "https://www.facebook.com/standardpencils",
    "https://www.instagram.com/standardpencils",
    "https://twitter.com/standardpencils"
  ],
  "areaServed": [
    {
      "@type": "Country",
      "name": "India"
    },
    {
      "@type": "Country",
      "name": "United States"
    },
    {
      "@type": "Country",
      "name": "European Union"
    },
    {
      "@type": "Country",
      "name": "Global"
    }
  ]
};

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "CosmeticBusiness",
  "name": "Standard Pencils",
  "description": "OEM cosmetic pencil manufacturer specializing in kajal, eyeliners, lip liners, and custom formulations. FDA-approved and CDSCO-compliant facility.",
  "url": "https://www.stdpencil.com",
  "telephone": "+91-28938938938",
  "email": "info@stdpencil.com",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Bengaluru",
    "addressRegion": "Karnataka",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "12.9716",
    "longitude": "77.5946"
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    "opens": "09:00",
    "closes": "18:00"
  },
  "priceRange": "$$$",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Cosmetic Manufacturing Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Kohl/Kajal Pencil Manufacturing"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Eyeliner Pencil Manufacturing"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Lip Liner Manufacturing"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Custom Cosmetic Formulation"
        }
      }
    ]
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "50"
  }
};

export const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "OEM Cosmetic Pencil Manufacturing",
  "provider": {
    "@type": "Organization",
    "name": "Standard Pencils"
  },
  "description": "Complete OEM manufacturing services for cosmetic pencils including kajal, eyeliners, lip liners, eyebrow definers, and custom formulations.",
  "url": "https://www.stdpencil.com/capabilities",
  "areaServed": {
    "@type": "Place",
    "name": "Global"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Cosmetic Manufacturing Capabilities",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Classic Kohl/Kajal Manufacturing",
          "description": "Traditional soft kohl pencil with smooth, blendable formula for rich colour payoff"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Liquid Lipstick Manufacturing",
          "description": "High-performance liquid lipstick for long wear and rich pigment payoff"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Liquid Concealer Manufacturing",
          "description": "High-coverage liquid formula for smooth application and effective correction"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Eyebrow Definer Manufacturing",
          "description": "Firm, matte formula for controlled application and natural-looking brow definition"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Nail Whitener Pencil Manufacturing",
          "description": "Hard, precision core pencil for enhancing and brightening natural nail tips"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Root Touch Up Stick Manufacturing",
          "description": "Pigmented, easy-glide stick for quick grey root coverage"
        }
      }
    ]
  },
  "termsOfService": "https://www.stdpencil.com/terms",
  "serviceType": "Cosmetic Manufacturing"
};

export const faqPageSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is your minimum order quantity (MOQ) for cosmetic pencils?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our MOQ for OEM cosmetic pencil manufacturing depends on the product type, formulation, and packaging format. We offer flexible batch sizes to support startups, private label brands, and large-scale cosmetic companies."
      }
    },
    {
      "@type": "Question",
      "name": "Do you offer custom formulation for eye and lip products?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we specialise in custom cosmetic formulation for eye care and lip care products, including kajal, eyeliner, lip liners, and crayons—tailored to your brand's performance, claims, and market positioning."
      }
    },
    {
      "@type": "Question",
      "name": "Can you match an existing product or benchmark?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We provide benchmark-based cosmetic product development, helping brands replicate or improve existing formulations in terms of texture, pigment payoff, and long-wear performance."
      }
    },
    {
      "@type": "Question",
      "name": "What types of cosmetic products do you manufacture?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We are an OEM cosmetic manufacturer focused on eye and lip categories such as kajal, eyeliner, eyebrow pencils, lip liners, and cosmetic crayons, along with select face and liquid formats."
      }
    },
    {
      "@type": "Question",
      "name": "Do you provide packaging and branding support?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we offer cosmetic packaging solutions including cartons, blister packs, and custom formats, ensuring compatibility with your product and strong retail and export presentation."
      }
    },
    {
      "@type": "Question",
      "name": "Is your facility FDA and CDSCO compliant?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our facility is FDA-approved and CDSCO-compliant, ensuring all products are manufactured in line with cosmetic regulatory standards for safety, quality, and documentation."
      }
    },
    {
      "@type": "Question",
      "name": "Can you support export and international compliance requirements?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we support export-focused cosmetic manufacturing, including EU, US, and international compliance, documentation, and region-specific formulation adjustments."
      }
    },
    {
      "@type": "Question",
      "name": "What is the typical product development timeline?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our cosmetic product development timeline depends on formulation complexity, testing, and approvals, but follows a structured OEM process from sampling to bulk production."
      }
    },
    {
      "@type": "Question",
      "name": "Do you offer dermatologist-tested or claim-based formulations?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we develop claim-led cosmetic formulations such as dermatologist-tested, hypoallergenic, paraben-free, vegan, and long-wear, based on your brand requirements."
      }
    },
    {
      "@type": "Question",
      "name": "Can you handle large-scale production?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We are equipped for scalable cosmetic manufacturing, with high-capacity filling lines ensuring consistent quality across small and large production volumes."
      }
    },
    {
      "@type": "Question",
      "name": "Do you work with startups or only established brands?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We work with startups, MSMEs, private label brands, and established cosmetic companies, offering flexible OEM solutions based on your scale and growth stage."
      }
    },
    {
      "@type": "Question",
      "name": "How do we get started with a project?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "To begin, share your requirements through our enquiry form. As an OEM cosmetic manufacturer, we will evaluate your brief and guide you through formulation, sampling, and production."
      }
    }
  ]
};

// Breadcrumb schema for each page - adjust current page as needed
export const getBreadcrumbSchema = (pageName, pageUrl) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://www.stdpencil.com/"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": pageName,
      "item": `https://www.stdpencil.com${pageUrl}`
    }
  ]
});

// Product schema for product category pages
export const productCategorySchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "itemListElement": [
    {
      "@type": "Product",
      "name": "Classic Kohl/Kajal",
      "description": "Traditional soft kohl pencil with a smooth, blendable formula designed for rich colour payoff and effortless application.",
      "brand": {
        "@type": "Brand",
        "name": "OEM"
      },
      "category": "Eye Makeup"
    },
    {
      "@type": "Product",
      "name": "Liquid Lipstick",
      "description": "High-performance liquid lipstick designed for long wear, rich pigment payoff, and smooth, even application.",
      "brand": {
        "@type": "Brand",
        "name": "OEM"
      },
      "category": "Lip Makeup"
    },
    {
      "@type": "Product",
      "name": "Liquid Concealer",
      "description": "High-coverage liquid formula designed for smooth application and effective spot and under-eye correction.",
      "brand": {
        "@type": "Brand",
        "name": "OEM"
      },
      "category": "Face Makeup"
    },
    {
      "@type": "Product",
      "name": "Nail Whitener",
      "description": "Hard, precision core pencil designed to enhance, brighten, and define the natural nail tip.",
      "brand": {
        "@type": "Brand",
        "name": "OEM"
      },
      "category": "Nail Care"
    },
    {
      "@type": "Product",
      "name": "Eyebrow Definer",
      "description": "Firm, matte formula for controlled application and natural-looking brow definition.",
      "brand": {
        "@type": "Brand",
        "name": "OEM"
      },
      "category": "Eye Makeup"
    },
    {
      "@type": "Product",
      "name": "Root Touch Up Stick",
      "description": "Pigmented, easy-glide stick for quick, precise, and natural-looking grey root coverage.",
      "brand": {
        "@type": "Brand",
        "name": "OEM"
      },
      "category": "Hair Care"
    }
  ]
};

// WebSite schema for search functionality
export const webSiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Standard Pencils",
  "url": "https://www.stdpencil.com",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://www.stdpencil.com/search?q={search_term_string}",
    "query-input": "required name=search_term_string"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Standard Pencils",
    "logo": {
      "@type": "ImageObject",
      "url": "https://www.stdpencil.com/Logo.png"
    }
  }
};

// Contact Page schema
export const contactPageSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "name": "Contact Standard Pencils",
  "description": "Get in touch with Standard Pencils for OEM cosmetic pencil manufacturing inquiries. Call us at +91 28938938938 or email info@stdpencil.com",
  "url": "https://www.stdpencil.com/contact",
  "mainEntity": {
    "@type": "Organization",
    "name": "Standard Pencils",
    "telephone": "+91-28938938938",
    "email": "info@stdpencil.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Bengaluru",
      "addressRegion": "Karnataka",
      "addressCountry": "IN"
    }
  }
};

// About Page schema
export const aboutPageSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "name": "About Standard Pencils",
  "description": "Learn about Standard Pencils - a legacy of pure OEM cosmetic pencil manufacturing since 1984. 40+ years of experience, 5+ countries global presence, 20+ trusted brands.",
  "url": "https://www.stdpencil.com/about",
  "mainEntity": {
    "@type": "Organization",
    "name": "Standard Pencils",
    "foundingDate": "1981",
    "description": "Leading OEM cosmetic pencil manufacturer with 40+ years of experience serving global beauty brands.",
    "numberOfEmployees": {
      "@type": "QuantitativeValue",
      "value": "100-500"
    },
    "knowsAbout": [
      "Cosmetic Pencil Manufacturing",
      "OEM Manufacturing",
      "Kajal Manufacturing",
      "Eyeliner Manufacturing",
      "Lip Liner Manufacturing",
      "Custom Cosmetic Formulation"
    ]
  }
};

// Default export - all schemas combined for easy import
export default {
  organization: organizationSchema,
  localBusiness: localBusinessSchema,
  service: serviceSchema,
  faqPage: faqPageSchema,
  productCategory: productCategorySchema,
  webSite: webSiteSchema,
  contactPage: contactPageSchema,
  aboutPage: aboutPageSchema,
  getBreadcrumb: getBreadcrumbSchema
};
