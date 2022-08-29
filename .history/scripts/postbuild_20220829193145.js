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

function buildRss(pageFiles, pagesDir) {
    // use the reduce method to collect all RSS data
    const rssData = pageFiles.reduce(
      (data, file) => {
        // the pathname is the relative path from '/pages' to the HTML file
        const pathname = path.relative(pagesDir, file).slice(0, -'.html'.length);
        // collect all RSS top level info in the index page
        if (pathname === 'index') {
          const htmlString = fs.readFileSync(file, 'utf8');
          const $ = cheerio.load(htmlString);
          data.title = $('title').text();
          data.home_page_url = $(`meta[property='og:url']`).attr('content');
          data.feed_url = $(
            `link[rel='alternate'][type='application/json']`
          ).attr('href');
          data.description = $(`meta[name='description']`).attr('content');
          data.icon = $(`link[sizes='512x512']`).attr('href');
          data.favicon = $(`link[sizes='64x64']`).attr('href');
        }
        // only add to RSS if the pathname is '/blog/*'
        if (pathname.startsWith('blog')) {
          const htmlString = fs.readFileSync(file, 'utf8');
          const $ = cheerio.load(htmlString);
          // remove the placeholder image for lazy loading images
          $(`#Content img[aria-hidden='true']`).remove();
          data.items.push({
            url: $(`meta[property='og:url']`).attr('content'),
            id: pathname.substring('blog/'.length),
            content_html: $('#Content').html(),
            title: $('article h1').text(),
            summary: $(`meta[name='description']`).attr('content'),
            image: $(`meta[property='og:image']`).attr('content'),
            banner_image: $(`meta[property='og:image']`).attr('content'),
            date_published: $('time').attr('datetime'),
            author: {
              name: $(`a[rel='author']`).text(),
              url: $(`a[rel='author']`).attr('href'),
              avatar: $(`img#Avatar`).attr('src'),
            },
          });
        }
        return data;
      },
      {
        version: 'https://jsonfeed.org/version/1',
        items: [],
      }
    );
    // sort the items by the publishing date
    rssData.items.sort(byDateDesc);
    // write to the output static folder
    fs.writeFileSync(
      path.join('./.next/static', 'feed.json'),
      JSON.stringify(rssData, null, 2)
    );
  }