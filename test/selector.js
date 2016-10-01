var cheerio = require("cheerio");

var html = '<li class="info"> <span>&#x95B2;&#x89A7;&#x6570;</span> <span class="views">147</span> </li>';

var html3 = '<dd class="view-count">152</dd>'
var $ = cheerio.load(html3);

console.log($('dd.view-count').html())


var html2 = '<li class="work selected_works ">'+
    '<a href="/member_illust.php?mode=medium&amp;illust_id=53545005">'+
    '<img src="http://i2.pixiv.net/c/128x128/img-master/img/2015/11/14/13/28/11/53545005_p0_square1200.jpg" alt="&#xBE7C;&#xAF3C;&#xC9E4;/&#x30B7;&#x30E3;&#x30B5;" title="&#xBE7C;&#xAF3C;&#xC9E4;/&#x30B7;&#x30E3;&#x30B5;" border="0">'+
    '</a> </li>';

var $2 = cheerio.load(html2)
console.log($2('li.selected_works a img').attr('src'));



var html4 = '<ul class="tagCloud"><li class="level1">level1</li><li class="level1">level2</li><li class="level3">level3</li></ul>';

var $4 = cheerio.load(html4);

console.log($4('ul.tagCloud li.level1').html());