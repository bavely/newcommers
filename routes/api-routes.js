var request = require("request");
var cheerio = require("cheerio");

module.exports = function(app) {

    //Al Ahram news 
    app.get("/api/ahram", function(req, res) {

        request("http://www.ahram.org.eg/Category/202376/27/%D9%85%D8%B5%D8%B1.aspx", function(error, response, html) {
            var data = [];
            var $ = cheerio.load(html);
            $(" div.block_outer_wight ").each(function(i, element) {
                var aNews = {
                    title: $(element).find("a").text().trim(),
                    img: $(element).find("img").attr("src"),
                    link: "http://www.ahram.org.eg" + $(element).find("a").attr("href").replace('../..', ''),
                    article: $(element).find("div .bref_four_news").text().trim()
                }
                console.log(aNews);
                data.push(aNews);

            });
            res.json(data);
        });


    });

    //Masry el youm
    app.get("/api/masry", function(req, res) {

        request("http://www.almasryalyoum.com/news/index?typeid=1&takeNum=100&sectionid=3", function(error, response, html) {
            var data = [];
            var $ = cheerio.load(html);
            $("div.news").each(function(i, element) {
                var aNews = {
                    title: $(element).find("p").text(),
                    img: $(element).find("img").attr("src"),
                    link: "http://www.almasryalyoum.com" + $(element).find("a").attr("href"),
                }
                console.log(aNews);
                data.push(aNews);

            });
            res.json(data);
        });


    });


}