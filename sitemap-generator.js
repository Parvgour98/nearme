const fs = require('fs')
const data = require('./src/permalinks')

let urls = '';

for (let loc of data) {
    urls += `
    <url>
        <loc>https://nearmeservices.com/${loc}</loc>
        <lastmod>2021-08-21</lastmod>
    </url>
    <url>
        <loc>https://www.nearmeservices.com/${loc}</loc>
        <lastmod>2021-08-21</lastmod>
    </url>`
}

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`

fs.writeFile('sitemap.xml', sitemap, (err) => {})