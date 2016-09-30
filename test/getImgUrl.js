/**
 * Created by likai on 西暦16/01/01.
 */
var fs = require('fs'),
    request = require('request'),
    cheerio = require('cheerio'),
    async = require('async');

function coalesce (obj1,obj2){
    var result = obj1 ? obj1 :obj2;
    if(!result){
        result = obj2? obj2:0;
    }
    return result;
}


function createOption(id) {
    var option = {
        url: 'http://www.pixiv.net/member_illust.php?mode=medium&illust_id='+id,
        headers: {
            'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
            'Accept-charset':'utf8',
            'Cache-Control': 'max-age=0',
            'Connection': 'keep-alive',
            'Cookie': 'p_ab_id=2; _ga=GA1.2.433897734.1451647016; device_token=bcca52688f1fdd080db95eeec6706099; module_orders_mypage=%5B%7B%22name%22%3A%22everyone_new_illusts%22%2C%22visible%22%3Atrue%7D%2C%7B%22name%22%3A%22spotlight%22%2C%22visible%22%3Atrue%7D%2C%7B%22name%22%3A%22sensei_courses%22%2C%22visible%22%3Atrue%7D%2C%7B%22name%22%3A%22featured_tags%22%2C%22visible%22%3Atrue%7D%2C%7B%22name%22%3A%22hot_entries%22%2C%22visible%22%3Atrue%7D%2C%7B%22name%22%3A%22contests%22%2C%22visible%22%3Atrue%7D%2C%7B%22name%22%3A%22following_new_illusts%22%2C%22visible%22%3Atrue%7D%2C%7B%22name%22%3A%22mypixiv_new_illusts%22%2C%22visible%22%3Atrue%7D%2C%7B%22name%22%3A%22booth_follow_items%22%2C%22visible%22%3Atrue%7D%5D; login_ever=yes; a_type=0; PHPSESSID=16664186_eb1537a135421275eb0ec8e8e6fdd0f2; __utmt=1; __utma=235335808.433897734.1451647016.1475193870.1475211783.55; __utmb=235335808.1.10.1475211783; __utmc=235335808; __utmz=235335808.1460880646.48.5.utmcsr=sendgrid.com|utmccn=china_growth_active|utmcmd=email; __utmv=235335808.|2=login%20ever=yes=1^3=plan=normal=1^5=gender=male=1^6=user_id=16664186=1',
            'Host': 'www.pixiv.net',
            'Upgrade-Insecure-Requests': 1,
            'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/47.0.2526.106 Safari/537.36',
        }
    };

    return option;
}


function fetchImg(begin,end) {

    var i =0;
    var options = [];
    for(i=begin;i<end;i++){
        options.push(createOption(i));
       // console.log(options);
    }

    async.map(options,request,function(err,response){
      for(i=0;i<options.length;i++){
          processPage(err,response[i])
          //console.log("Current id is ", i);
      }
    });

}

function processPage(err,response){
    if (err) {
        console.log(err);
        return;
    }
    if (response.statusCode == 200) {

        $ = cheerio.load(response.body);
       // console.log($('dd.view-count').html());
        //console.log($.html());
        //process.exit();
        var viewCount = coalesce($('dd.view-count').html(),$('li.info span.views').html());
        if(!viewCount){
            console.log("selector error, the image may have been deleted");
            return;
        }
        var imgURL = coalesce($('li.selected_works a img').attr('src'),$('div.works_display div.ui-modal-trigger img').attr('src'));
       // imgURL = imgURL.replace('c/600x600/img-master', 'img-original');
       // imgURL = imgURL.replace('p0_master1200', 'p0');
        console.log(imgURL);
        //writeImagePath(imgURL);

    }

}

function writeImagePath(data){
    data+='\n';
    fs.writeFileSync('./images.txt',data,{flag:'a'});

}
//845 986
var i = 53545000;

//fetchImg(51463845,51463850);

var test = setInterval(function(){
    console.log(i);
    i=i+5;
    if(i>54745000) {
        clearInterval(this);
        process.exit(1);
    }
    fetchImg(i,i+5);
},2000);