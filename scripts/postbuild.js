function main() {
    const pagesDir = './.next/serverless/pages';
    const pageFiles = getPageFiles(pagesDir);
    buildRss(pageFiles, pagesDir);
    buildSiteMap(pageFiles);
  }