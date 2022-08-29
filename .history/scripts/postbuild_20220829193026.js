function main() {
    const pagesDir = './.next/serverless/pages';
    const pageFiles = getPageFiles(pagesDir);
    buildRss(pageFiles, pagesDir);
    buildSiteMap(pageFiles);
  }

  const fs = require('fs');
  const path = require('path');
  
  function getPageFiles(directory, files = []) {
    const entries = fs.readdirSync(directory, { withFileTypes: true });
    entries.forEach(entry => {
      const absolutePath = path.resolve(directory, entry.name);
      if (entry.isDirectory()) {
        // wow recursive 🐍
        getPageFiles(absolutePath, files);
      } else if (isPageFile(absolutePath)) {
        files.push(absolutePath);
      }
    });
    return files;
  }
  
  function isPageFile(filename) {
    return (
      path.extname(filename) === '.html' &&
      !filename.endsWith('404.html')
    );
  }