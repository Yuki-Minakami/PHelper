/**
 * Created by likai on 西暦16/01/27.
 */
var cheerio = require('cheerio');
var fs = require('fs');
var persist = require('./persist.js');
var util = require("./util.js");
var config = require("./config.js");

var parse = {
    processPage:function(err,response){
        if (err) {
            console.log(err);
            return;
        }
        if (response.statusCode == 200) {
            console.log("success");
            $ = cheerio.load(response.body);
            var count = this.getViewCount($);
            console.log(count);

            if(count){

                var data = {
                    "url":this.getUrl($),
                    "count":count,
                    //"tag":this.getTag($)
                }
              //  persist.saveToJson(JSON.stringify(data));
            } else{
                return;
            }
        }
    },

    getViewCount:function($){

        var viewCount = util.coalesce($('dd.view-count').html(),$('li.info span.views').html());
        if(!viewCount || viewCount < config.minViewCount ){
            console.log("selector error, the image may have been deleted");
            return undefined;
        }
        return viewCount;

    },
    getTag:function($){
        var tag = $('ul.tagCloud li.level1').html().toString().replace(/<span.*<\/span>/,"");
        return unescape(tag.replace(/&#x/g,'%u').replace(/;/g,''));

    },
    getUrl:function($) {
        var imgURL = util.coalesce($('li.selected_works a img').attr('src'),$('div.works_display div.ui-modal-trigger img').attr('src'));
        if(imgURL){
            imgURL = imgURL.replace(/c\/.*\/img-master/,"img-original").replace('p0_master1200', 'p0');
            console.log(imgURL);
            return imgURL;
        }

        return undefined;

    }
}



module.exports = parse;