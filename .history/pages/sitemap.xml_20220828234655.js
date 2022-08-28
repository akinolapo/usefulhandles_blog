  import React from "react";
  import * as fs from "fs";
  import { getPosts } from "../services";
  const Sitemap = () => {
    return null;
  };
  
  export const getServerSideProps = async ({ res }) => {
    const baseUrl = {
      development: "http://localhost:3000",
      production: "https://www.wordpressvee.com",
    }[process.env.NODE_ENV];
  
    const staticPaths = fs
      .readdirSync("pages")
      .filter((staticPage) => {
        return ![
          "api",
          "product",
          "_app.js",
          "_document.js",
          "404.js",
          "sitemap.xml.js",
        ].includes(staticPage);
      })
      .map((staticPagePath) => {
        return `${baseUrl}/${staticPagePath}`;
      });
  
      const posts = await getPosts()
      const dynamicPaths = posts.map( post => {
    
        return `${BASE_URL}/post/${post.node.slug}`
        
      })
     
  
    const allPaths = [...staticPaths, ...dynamicPaths];
  
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
      <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        ${allPaths
          .map((url) => {
            return `
              <url>
                <loc>${url}</loc>
                <lastmod>${new Date().toISOString()}</lastmod>
                <changefreq>monthly</changefreq>
                <priority>1.0</priority>
              </url>
            `;
          })
          .join("")}
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