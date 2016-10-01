/**
 * Created by likai on 西暦16/01/25.
 */
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

module.exports = createOption;