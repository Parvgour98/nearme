const data = require('../src/data')

module.exports = (req, res, next) => {
    const url = req.url
    for (let rec of data) {
        if (rec.permalink == url.split('/')[1]) {
            req.pageData = rec
            break
        }
    }
    next();
}