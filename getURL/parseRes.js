/**
 * Created by likai on 西暦16/01/27.
 */
var cheerio = require('cheerio');
var fs = require('fs');
var util = require("./util.js");
var config = require('../config.js');

var parse = {
    processPage:function(id,response){
        $ = cheerio.load(response.body);
        var count = this.getViewCount($,id);

        if(count && count >config.minViewCount){
            let prasedurl = this.getUrl($);
            let url = prasedurl? prasedurl:id;
            let date = url.substr(url.indexOf("/img-original/img/")+18,10);
            const data = {
                "id":id,
                "url":url,
                "count":count,
                "date":date,
                "tag":this.getTag($),
                "author":this.getAuthor($)
            }

            return data;

        } else{
            return undefined;
        }

    },

    getViewCount:function($,id){
        var viewCount = util.coalesce($('dd.view-count').html(),$('li.info span.views').html());
        if(!viewCount){
           // console.log(id,"may have been deleted");
            return undefined;
        }
        return viewCount;

    },
    getTag:function($){
        var tagList = [];
        $('span.tags-container ul.tags').find('li > a.text').each(function(index,element){
            var tag = $(element).html();
            tag = unescape(tag.replace(/&#x/g,'%u').replace(/;/g,''));

            tagList.push(tag);
        });

        return tagList;

    },
    getUrl:function($) {
        var imgURL = util.coalesce($('li.selected_works a img').attr('src'),$('div.works_display div.ui-modal-trigger img').attr('src'));
        if(imgURL){
            imgURL = imgURL.replace(/c\/.*\/img-master/,"img-original").replace('p0_master1200', 'p0');
            return imgURL;
        }
        return undefined;

    },
    getAuthor:function($){
        let author = $('div.profile > a.user-name').html();
        if(!author) return undefined;
        return unescape(author.replace(/&#x/g,'%u').replace(/;/g,''));

    }

}



module.exports = parse;