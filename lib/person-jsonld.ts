export const personData = {
  name: "Sylvain Kalache",
  jobTitle: "DevRel & AI Labs Lead",
  worksFor: "Rootly",
  url: "https://www.sylvainkalache.com",
  email: "sylvain@kalache.fr",
  sameAs: [
    "https://www.linkedin.com/in/sylvainkalache",
    "https://github.com/sylvainkalache",
    "https://x.com/sylvainkalache",
  ],
  knowsAbout: [
    "Developer Relations",
    "AI Agents & MCP",
    "Site Reliability Engineering",
    "Incident Management",
    "Platform Engineering",
    "Cloud Native & Kubernetes",
    "Developer Education",
    "Open Source",
    "Community Building",
    "Technical Writing",
  ],
  alumniOf: "LinkedIn",
  founder: ["Holberton School", "while42"],
  description:
    "DevRel and AI Labs lead at Rootly. Former Senior SRE at LinkedIn. Co-founded Holberton School, which trained thousands of engineers across 25 countries. Founded while42, a developer community of 3,000 engineers across 40 cities. Writes for TechCrunch and The New Stack, speaks at conferences like SREcon, and builds open-source tools for reliability engineering.",
}

export function buildPersonJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: personData.name,
    jobTitle: personData.jobTitle,
    worksFor: {
      "@type": "Organization",
      name: personData.worksFor,
    },
    url: personData.url,
    email: personData.email,
    sameAs: personData.sameAs,
    knowsAbout: personData.knowsAbout,
    alumniOf: {
      "@type": "Organization",
      name: personData.alumniOf,
    },
    founder: personData.founder.map((org) => ({
      "@type": "Organization",
      name: org,
    })),
    description: personData.description,
  }
}
