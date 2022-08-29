export default function handler(req, res) {

    res.statusCode = 200
    res.setHeader('Content-Type', 'text/xml')
      
      // Instructing the Vercel edge to cache the file
      res.setHeader('Cache-control', 'stale-while-revalidate, s-maxage=3600')
      
      // generate sitemap here
      const xml = `<const BASE_URL = "https://www.wordpressvee.com";
  
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
  
      const posts = await getPosts()
      const dynamicPaths = posts.map( post => {
    
        return `${BASE_URL}/post/${post.node.slug}`
        
      })
     
  
    const allPaths = [...staticPaths, ...dynamicPaths];
  
    const sitemap = `
            `;
          })
          .join("")}
      </urlset>
    `;`
  
    res.end(xml)
  }