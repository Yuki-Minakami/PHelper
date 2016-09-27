/**
 * Created by likai on 西暦16/01/01.
 */
var fs = require('fs'),
    request = require('request'),
    cheerio = require('cheerio'),
    async = require('async');


function createOption(id) {
    var option = {
        url: 'http://www.pixiv.net/member_illust.php?mode=medium&illust_id='+id,
        headers: {
            'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
            'Accept-charset': 'utf8',
            'Cache-Control': 'max-age=0',
            'Connection': 'keep-alive',
            'Cookie': 'p_ab_id=2; login_ever=yes; visit_ever=yes; __utmt=1; PHPSESSID=16664186_b2460c5b01788fe4203ab2a97e03db90; device_token=c8454d1df1f52a450e9779a2ee0052bd; __utma=235335808.433897734.1451647016.1451647016.1451647016.1; __utmb=235335808.6.10.1451647016; __utmc=235335808; __utmz=235335808.1451647016.1.1.utmcsr=(direct)|utmccn=(direct)|utmcmd=(none); __utmv=235335808.|2=login%20ever=yes=1^3=plan=normal=1^5=gender=male=1^6=user_id=16664186=1; _ga=GA1.2.433897734.1451647016',
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
      }
    });




}

var temp =0;
function processPage(err,response){
    if (err) {
        console.log(err);
        return;
    }
    if (response.statusCode == 200) {
        console.log("get");
        temp++;
        if(temp == 1)
        $ = cheerio.load(response.body);

        console.log(response.body);
        var viewCount = $('dd.view-count').html();

        if (viewCount &&  viewCount>10000) {
            console.log("get it");
            var imgHTML = $('div._layout-thumbnail', 'div.works_display').html();
            if(!imgHTML) return;
            $ = cheerio.load(imgHTML);
            var imgURL = $('img').attr('src');
            imgURL = imgURL.replace('c/600x600/img-master', 'img-original');
            imgURL = imgURL.replace('p0_master1200', 'p0');
            console.log(imgURL);
            writeImagePath(imgURL);
        } else {
            return;
        }
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