class SiteController {
    index (req, res) {
        res.json({
            name : "test"
        })
        return res;
    }
}

module.exports = new SiteController