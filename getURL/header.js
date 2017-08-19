/**
 * Created by likai on 西暦16/01/25.
 * 构建http request header
 */
function createHeader(id) {
    var option = {
        url: "https://www.pixiv.net/member_illust.php?mode=medium&illust_id="+id,
        headers: {
            'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
            'Accept-charset': 'utf8',
            'Cache-Control': 'max-age=0',
            'Connection': 'keep-alive',
            //'Accept-Encoding':'gzip, deflate, sdch, br',
            'Accept-Language':'zh-CN,zh;q=0.8,en;q=0.6,ja;q=0.4,zh-TW;q=0.2',
            'Cookie': 'p_ab_id=7; p_ab_id_2=9; login_ever=yes; _ga=GA1.2.825326299.1490617417; special_notification_rating=1; PHPSESSID=7116263_b3521576bf26f2b88d6dccb60f86d939; a_type=0; __utmt=1; module_orders_mypage=%5B%7B%22name%22%3A%22recommended_illusts%22%2C%22visible%22%3Atrue%7D%2C%7B%22name%22%3A%22everyone_new_illusts%22%2C%22visible%22%3Atrue%7D%2C%7B%22name%22%3A%22following_new_illusts%22%2C%22visible%22%3Atrue%7D%2C%7B%22name%22%3A%22mypixiv_new_illusts%22%2C%22visible%22%3Atrue%7D%2C%7B%22name%22%3A%22fanbox%22%2C%22visible%22%3Atrue%7D%2C%7B%22name%22%3A%22featured_tags%22%2C%22visible%22%3Atrue%7D%2C%7B%22name%22%3A%22contests%22%2C%22visible%22%3Atrue%7D%2C%7B%22name%22%3A%22sensei_courses%22%2C%22visible%22%3Atrue%7D%2C%7B%22name%22%3A%22spotlight%22%2C%22visible%22%3Atrue%7D%2C%7B%22name%22%3A%22booth_follow_items%22%2C%22visible%22%3Atrue%7D%5D; is_sensei_service_user=1; __utma=235335808.825326299.1490617417.1493212950.1493454672.10; __utmb=235335808.3.10.1493454672; __utmc=235335808; __utmz=235335808.1490617417.1.1.utmcsr=(direct)|utmccn=(direct)|utmcmd=(none); __utmv=235335808.|2=login%20ever=yes=1^3=plan=normal=1^5=gender=female=1^6=user_id=7116263=1^9=p_ab_id=7=1^10=p_ab_id_2=9=1^12=fanbox_subscribe_button=blue=1^13=fanbox_fixed_otodoke_naiyou=no=1^14=hide_upload_form=yes=1^15=machine_translate_test=no=1',
            'Referer':'https://www.pixiv.net/',
            'Upgrade-Insecure-Requests':1,
            'User-Agent':'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.81 Safari/537.36'

             }
    };

    return option;
}

module.exports = createHeader;

