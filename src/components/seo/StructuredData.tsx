import { portfolioData } from "@/data/portfolio";

export function StructuredData() {
  const baseUrl = "https://abishek-as-portfolio.vercel.app";

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: portfolioData.name,
    jobTitle: portfolioData.role,
    description: portfolioData.about,
    url: baseUrl,
    image: `${baseUrl}/images/profile.webp`,
    sameAs: portfolioData.social
      .filter((s) => s.platform !== "Email")
      .map((s) => s.url),

    worksFor: {
      "@type": "Organization",
      name: "Maersk Training",
    },

    knowsAbout: [
      "Backend Development",
      "ASP.NET Core",
      "Django",
      "REST APIs",
      "PostgreSQL",
      "Azure",
      "Azure DevOps",
      "System Design",
      "Next.js",
      "React",
      "TypeScript",
      "Web Application Development",
    ],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: `${portfolioData.name} Portfolio`,
    description: portfolioData.about,
    url: baseUrl,
    inLanguage: "en-US",
    author: {
      "@type": "Person",
      name: portfolioData.name,
    },
  };

  const profilePageSchema = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    dateCreated: "2026-05-11",
    dateModified: "2026-05-11",
    mainEntity: {
      "@type": "Person",
      name: portfolioData.name,
      description: portfolioData.about,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(personSchema),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(profilePageSchema),
        }}
      />
    </>
  );
}
