exports.getIndex = (req, res, next) => {
    return res.render('index', {imageAltTag: "Nearme services vendor", imageTitle: "Nearme services"})
}

exports.getPage = (req, res, next) => {
    const data = req.pageData
    if (data)
        return res.render(data.serviceName, data)
    else next();
}