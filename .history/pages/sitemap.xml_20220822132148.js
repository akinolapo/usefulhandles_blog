import React from "react";

const Sitemap = () => {};

export const getServerSideProps = ({ res }) => {

    const baseUrl = {
        development: "http://localhost:3000",
        production: "https://www.wordpressvee.com",
      }[process.env.NODE_ENV];
    
      const staticPages = fs
        .readdirSync("pages")
        .filter((staticPage) => {
          return ![
            "_app.tsx",
            "_document.js",
            "_error.js",
            "sitemap.xml.js",
          ].includes(staticPage);
        })
        .map((staticPagePath) => {
          return `${baseUrl}/${staticPagePath}`;
        });

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      <!-- We'll render the URLs for our sitemap here. -->
    </urlset>
  `;

  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
};

export default Sitemap;