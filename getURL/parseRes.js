/**
 * Created by likai on 西暦16/01/27.
 */
var cheerio = require('cheerio');
var fs = require('fs');
var util = require("./util.js");

var parse = {
    processPage:function(id,response){
        $ = cheerio.load(response.body);
        var count = this.getViewCount($);

        if(count){
            if(count >10000){
                var data = {
                    "url":this.getUrl($)?this.getUrl($):id,
                    "count":count,
                    "tag":this.getTag($)
                }

                return {url: data.url,count:data.count,tag:data.tag};
            }

        } else{
            return undefined;
        }

    },

    getViewCount:function($){
        var viewCount = util.coalesce($('dd.view-count').html(),$('li.info span.views').html());
        if(!viewCount){
            console.log("selector error, the image may have been deleted");
            return undefined;
        }
        return viewCount;

    },
    getTag:function($){
        var tagHtml = $('li.tag a.text').html();
        if(!tagHtml){
            return undefined
        }
        var tag = tagHtml.toString().replace(/<span.*<\/span>/,"");

        return unescape(tag.replace(/&#x/g,'%u').replace(/;/g,''));

    },
    getUrl:function($) {
        var imgURL = util.coalesce($('li.selected_works a img').attr('src'),$('div.works_display div.ui-modal-trigger img').attr('src'));
        if(imgURL){
            imgURL = imgURL.replace(/c\/.*\/img-master/,"img-original").replace('p0_master1200', 'p0');
            return imgURL;
        }
        return undefined;

    }
}



module.exports = parse;