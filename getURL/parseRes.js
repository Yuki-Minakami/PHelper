/**
 * Created by likai on 西暦16/01/27.
 */
var cheerio = require('cheerio');
var fs = require('fs');
var persist = require('./persist.js');

var parse = {
    processPage:function(err,response){
        if (err) {
            console.log(err);
            return;
        }
        if (response.statusCode == 200) {
            $ = cheerio.load(response.body);
            var count = this.getViewCount($);
            if(count){
                var data = {
                    "url":this.getUrl($),
                    "count":count,
                    "tag":this.getTag($)
                }
                persist.saveToJson(JSON.stringify(data));
            } else{
                return;
            }


        }
    },

    getViewCount:function($){
        var viewCount = $('dd.view-count').html();
        if (viewCount>50000) {
            return viewCount
        } else {
            return undefined;
        }
    },
    getTag:function($){
        var tag = $('.text','ul.tags').html();
        return unescape(tag.replace(/&#x/g,'%u').replace(/;/g,''));

    },
    getUrl:function($) {
        var imgHTML = $('div._layout-thumbnail', 'div.works_display').html();
        if(!imgHTML) return;
        $ = cheerio.load(imgHTML);
        var imgURL = $('img').attr('src');
        imgURL = imgURL.replace('c/600x600/img-master', 'img-original');
        imgURL = imgURL.replace('p0_master1200', 'p0');
        console.log(imgURL);
        return imgURL;
    }
}



module.exports = parse;