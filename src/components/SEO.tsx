import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface SEOProps {
  title?: string;
  description?: string;
  canonicalPath?: string;
  ogImage?: string;
  ogType?: 'website' | 'article';
}

const SEO: React.FC<SEOProps> = ({ 
  title, 
  description, 
  canonicalPath,
  ogImage = "/icem-logo.png",
  ogType = "website"
}) => {
  const location = useLocation();
  const baseTitle = "ICEM 2026 | International Conference | Pune";
  const baseUrl = "https://sdetm.indiraicem.ac.in";
  const fullTitle = title ? `${title} | ${baseTitle}` : baseTitle;

  useEffect(() => {
    // Update Title
    document.title = fullTitle;

    // Helper to set or create meta tags
    const setMetaTag = (attribute: string, value: string, content: string) => {
      let element = document.querySelector(`meta[${attribute}="${value}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, value);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // Update Meta Description & Keywords
    if (description) {
      setMetaTag('name', 'description', description);
      setMetaTag('property', 'og:description', description);
      setMetaTag('name', 'twitter:description', description);
    }

    // Add high-impact keywords for SEO crawling
    const keywords = "ICEM 2026, SDETM ICEM, SDETM 2026, International Conference on Emerging Multidisciplinary Research, Indira College of Engineering and Management, ICEM Pune, Engineering Conference 2026, AI ML Conference India, Sustainable Future Technology, NextGen Computing, Gaurav Raju Nawale, Naziya Sayyad, CertiOwn, CertiOwn ICEM, Research Paper Submission Pune, Academic Conference India, ICEM 2026 Registration, ICEM 2026 Call for Papers, Dr. Tarita Shankar, Mr. Chetan Wakalkar, Mr. Shardul Gangal, Mr. Sahil Tarita Shankar, Mr. Shaan Tarita Shankar, Dr. Nilesh Uke, Dr. Saurabh Gupta, Dr. Manjusha Tatiya, Dr. Soumitra Das, Dr. Poorna Shankar, Dr. Mahesh Bhong, Prof. Meenakshi Patil, Dr. Kirav Devade, Dr. Priyanka Pawar, Dr. Vikas Nandgaonkar, Prof. Savita Jangale, Dr. Avantika Bijawe, Dr. Deepa Jamnik, Dr. Archana Savle, Dr Celestino Ruivo, Prof. Md. Zahir Uddin Arif, Dr. Md. Rahat Khan, Dr. Sonali Bhadoria, Dr. R. L. Bhatia, Dr. R K Jain, Dr. Suresh Shirbahadurkar, Dr Mahesh Abale, Dr. Sangita Jagtap, Dr. S. S. Ohol, Dr. Anil Sahu, Dr. Pendyala Srinivas, Dr. Dilip Kumar Jang Bahadur Saini, Dr. Sridaran Rajagopal, Dr. Kavitha Venkatachari, Dr. M Karthikeyan, Dr Prashant Kumbharkar, Dr Anand Bewoor, Dr Vikas Mathe, Dr Vahida Attar, Dr Neha Sharma, Dr Rahul Mapari, Dr Meghana Bhilare, Dr Santosh Deshpande, Prof. Mohan Patel, Prof. Ashok Saraf, Mr. Hemant Darokar, Mr. Sushil Chopade, Mr. Sagar Chirade, Mr. Amit Narwade, Mr. Pravin Charde, Ms. Pranali Khatke, Ms. Ashwini Gaikwad, Ms. Ashwini Admane, Ms. Shubangi Manwatkar, Ms. Deepa Padwal, Ms. Pallavi Chavan, Ms. Monika Patil, Ms. Kavita Sharma, Mr. Vivek Kumar, Ms. Vidya Dhoke, Mr. Tushar Mahore, Ms. Tanuja Pande, Vaishnavi Patare, Indira University, Indira Group of Institutes, IGI Pune, ADYPU, COEP, GITAM, TCS Research, NCL Pune, IEEE Conference Pune, Scopus Indexed Conference 2026, Springer Conference, International Journal Publication, Multidisciplinary Research, Future Trends in Engineering, AI in Mechanical Engineering, Digital Transformation, Smart Systems, Green Technology, SPPU Research, Pune University, Research Paper Submission 2026, Engineering Events India, ICEM Faculty, ICEM Students, CertiOwn Management, Gaurav Nawale Developer, Gaurav Raju Nawale CertiOwn, Naziya Sayyad SDETM, Professional Networking, Academic Excellence, Innovation in Engineering, Pune Tech Events, Global Research Symposium";
    setMetaTag('name', 'keywords', keywords);

    // Open Graph Metadata
    setMetaTag('property', 'og:title', fullTitle);
    setMetaTag('property', 'og:type', ogType);
    setMetaTag('property', 'og:url', `${baseUrl}${location.pathname}`);
    setMetaTag('property', 'og:image', `${baseUrl}${ogImage}`);
    setMetaTag('property', 'og:site_name', 'ICEM 2026');

    // Twitter Card Metadata
    setMetaTag('name', 'twitter:card', 'summary_large_image');
    setMetaTag('name', 'twitter:title', fullTitle);
    setMetaTag('name', 'twitter:image', `${baseUrl}${ogImage}`);

    // JSON-LD Structured Data for Event
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Event",
      "name": fullTitle,
      "description": description || "International Conference on Sustainable Developments in Engineering, Technology & Management (ICEM) 2026",
      "startDate": "2026-11-04T09:00:00+05:30",
      "endDate": "2026-11-05T18:00:00+05:30",
      "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
      "eventStatus": "https://schema.org/EventScheduled",
      "location": {
        "@type": "Place",
        "name": "Indira College of Engineering and Management",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Gat No. 276, Parandwadi, Tal. Maval",
          "addressLocality": "Pune",
          "postalCode": "410506",
          "addressRegion": "Maharashtra",
          "addressCountry": "IN"
        }
      },
      "image": [
        `${baseUrl}${ogImage}`
      ],
      "organizer": {
        "@type": "Organization",
        "name": "Indira College of Engineering and Management",
        "url": "https://www.indiraicem.ac.in"
      }
    };

    const scriptId = 'structured-data-script';
    let script = document.getElementById(scriptId) as HTMLScriptElement;
    if (!script) {
      script = document.createElement('script');
      script.id = scriptId;
      script.type = 'application/ld+json';
      document.head.appendChild(script);
    }
    script.text = JSON.stringify(structuredData);

    // Update Canonical Link
    const existingCanonical = document.querySelector('link[rel="canonical"]');
    const newCanonicalUrl = `${baseUrl}${canonicalPath || location.pathname}`;
    
    if (existingCanonical) {
      existingCanonical.setAttribute('href', newCanonicalUrl);
    } else {
      const link = document.createElement('link');
      link.rel = 'canonical';
      link.href = newCanonicalUrl;
      document.head.appendChild(link);
    }
  }, [title, description, canonicalPath, location, ogImage, ogType, fullTitle]);

  return null;
};

export default SEO;
