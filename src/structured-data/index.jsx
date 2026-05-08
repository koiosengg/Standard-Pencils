import React from 'react';
import {
  organizationSchema,
  localBusinessSchema,
  serviceSchema,
  faqPageSchema,
  productCategorySchema,
  webSiteSchema,
  contactPageSchema,
  aboutPageSchema,
  getBreadcrumbSchema
} from './schemas';

/**
 * JSON-LD Script Component
 * 
 * Renders a JSON-LD script tag for structured data.
 * Use this component inside your page components to inject structured data.
 * 
 * @param {Object} data - The JSON-LD schema object
 */
export const JsonLdScript = ({ data }) => (
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify(data)
    }}
  />
);

/**
 * Home Page Structured Data
 * Use this on the home page
 */
export const HomePageStructuredData = () => (
  <>
    <JsonLdScript data={organizationSchema} />
    <JsonLdScript data={localBusinessSchema} />
    <JsonLdScript data={webSiteSchema} />
    <JsonLdScript data={getBreadcrumbSchema('Home', '/')} />
  </>
);

/**
 * About Page Structured Data
 * Use this on the about page
 */
export const AboutPageStructuredData = () => (
  <>
    <JsonLdScript data={organizationSchema} />
    <JsonLdScript data={aboutPageSchema} />
    <JsonLdScript data={getBreadcrumbSchema('About Us', '/about')} />
  </>
);

/**
 * Capabilities/Services Page Structured Data
 * Use this on the capabilities page
 */
export const CapabilitiesPageStructuredData = () => (
  <>
    <JsonLdScript data={organizationSchema} />
    <JsonLdScript data={serviceSchema} />
    <JsonLdScript data={faqPageSchema} />
    <JsonLdScript data={getBreadcrumbSchema('Capabilities', '/capabilities')} />
  </>
);

/**
 * Products Page Structured Data
 * Use this on the products page
 */
export const ProductsPageStructuredData = () => (
  <>
    <JsonLdScript data={organizationSchema} />
    <JsonLdScript data={productCategorySchema} />
    <JsonLdScript data={getBreadcrumbSchema('Products', '/product')} />
  </>
);

/**
 * Contact Page Structured Data
 * Use this on the contact page
 */
export const ContactPageStructuredData = () => (
  <>
    <JsonLdScript data={organizationSchema} />
    <JsonLdScript data={contactPageSchema} />
    <JsonLdScript data={localBusinessSchema} />
    <JsonLdScript data={getBreadcrumbSchema('Contact', '/contact')} />
  </>
);

/**
 * Experience Page Structured Data
 * Use this on the experience/testimonials page
 */
export const ExperiencePageStructuredData = () => (
  <>
    <JsonLdScript data={organizationSchema} />
    <JsonLdScript data={getBreadcrumbSchema('Experience', '/experience')} />
  </>
);

export default {
  JsonLdScript,
  HomePageStructuredData,
  AboutPageStructuredData,
  CapabilitiesPageStructuredData,
  ProductsPageStructuredData,
  ContactPageStructuredData,
  ExperiencePageStructuredData
};
