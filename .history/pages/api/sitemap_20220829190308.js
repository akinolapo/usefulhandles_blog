import React from "react";
import * as fs from "fs";
import { getPosts } from "../services";

export default function handler(req, res) {

  res.statusCode = 200
  res.setHeader('Content-Type', 'text/xml')
    
    // Instructing the Vercel edge to cache the file
    res.setHeader('Cache-control', 'stale-while-revalidate, s-maxage=3600')

    const BASE_URL = "https://www.wordpressvee.com";
  
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
        return `${BASE_URL}/${staticPagePath}`;
      });
  
      const posts = await 
      const dynamicPaths = posts.map( post => {
    
        return `${BASE_URL}/post/${post.node.slug}`
        
      })
     
  
    const allPaths = [...staticPaths, ...dynamicPaths];
    
    // generate sitemap here
    const xml = `<?xml version="1.0" encoding="UTF-8"?>
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
      </urlset>`

  res.end(xml)
}