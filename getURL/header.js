/**
 * Created by likai on 西暦16/01/25.
 * 构建http request header
 */
function createHeader(id) {
    var option = {
        url: "https://www.pixiv.net/member_illust.php?mode=medium&illust_id="+id,
        timeout:5000,
        headers: {
            'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
            'Accept-charset': 'utf8',
            'Cache-Control': 'max-age=0',
            'Connection': 'keep-alive',
            //'Accept-Encoding':'gzip, deflate, sdch, br',
            'Accept-Language':'zh-CN,zh;q=0.8,en;q=0.6,ja;q=0.4,zh-TW;q=0.2',
            'Cookie': 'p_ab_id=5; p_ab_id_2=0; _tdim=ab4fd031-aef4-40a3-9970-ca6d048f7ce3; login_ever=yes; __utmv=235335808.|2=login%20ever=yes=1^3=plan=normal=1^5=gender=female=1^6=user_id=7116263=1^9=p_ab_id=5=1^10=p_ab_id_2=0=1^11=lang=zh=1; __utmz=235335808.1517405118.4.2.utmcsr=google|utmccn=(organic)|utmcmd=organic|utmctr=(not%20provided); __utma=235335808.1913077394.1513428099.1517405118.1517731088.5; _td=391d1905-0118-42ae-8aad-46e608c54ca6; _ga=GA1.2.1913077394.1513428099; PHPSESSID=7116263_a09ee83a9f377b42ba0105ecafc114ba; c_type=68; a_type=0; b_type=2; module_orders_mypage=%5B%7B%22name%22%3A%22sketch_live%22%2C%22visible%22%3Atrue%7D%2C%7B%22name%22%3A%22recommended_illusts%22%2C%22visible%22%3Atrue%7D%2C%7B%22name%22%3A%22tag_follow%22%2C%22visible%22%3Atrue%7D%2C%7B%22name%22%3A%22everyone_new_illusts%22%2C%22visible%22%3Atrue%7D%2C%7B%22name%22%3A%22following_new_illusts%22%2C%22visible%22%3Atrue%7D%2C%7B%22name%22%3A%22showcase%22%2C%22visible%22%3Atrue%7D%2C%7B%22name%22%3A%22mypixiv_new_illusts%22%2C%22visible%22%3Atrue%7D%2C%7B%22name%22%3A%22fanbox%22%2C%22visible%22%3Atrue%7D%2C%7B%22name%22%3A%22featured_tags%22%2C%22visible%22%3Atrue%7D%2C%7B%22name%22%3A%22contests%22%2C%22visible%22%3Atrue%7D%2C%7B%22name%22%3A%22user_events%22%2C%22visible%22%3Atrue%7D%2C%7B%22name%22%3A%22sensei_courses%22%2C%22visible%22%3Atrue%7D%2C%7B%22name%22%3A%22spotlight%22%2C%22visible%22%3Atrue%7D%2C%7B%22name%22%3A%22booth_follow_items%22%2C%22visible%22%3Atrue%7D%5D; tag_view_ranking=c2ncY8BimY~RTJMXD26Ak~Lt-oEicbBr~BU9SQkS-zU~BDN_x08cTS~v-Vu5xHP4P~G51pPRYJQR~o8OZj_N2FD~pzzjRSV6ZO~YRDwjaiLZn~y8GNntYHsi~psiqtQiSiq~pYlUxeIoeg~EUwzYuPRbU~0xsDLqCEW6~o3o9P--kXx~r86ODREFWW~_pwIgrV8TB~qtVr8SCFs5~jPsOGzt9Dh~UX647z2Emo~MSNRmMUDgC~xZ6jtQjaj9~yNRtNBvqT9~TUoEe_cp8t~EQHKvBDRBz~WcTW9TCOx9~5oPIfUbtd6~f4V1aCLsyM~bXMh6mBhl8~vJzu26Ndou~5trkxLyw0G~ETjPkL0e6r~eVxus64GZU~jKMBuv5byj~K8esoIs2eW~iFcW6hPGPU~ks-p2mqsxc~GkFgCLSiXD~EGefOqA6KB~KN7uxuR89w~jEoxuA2PIS~sAwDH104z0~DmwMCYMZ_i~nuFkK6t5JS~trfda46Fk8~qpeZSmEVVP~2-RXlHt092~tgP8r-gOe_~1Xn1rApx2-~metPG27dgT~Ie2c51_4Sp~LTm-ZmWNJy~jH0uD88V6F~g5MwmtPG41~VCHnBm_ff1~SaQWEMgKP-~NfWqn5XT9H~yPdElxlCbS~VMq-Vxsw8k~Ed_W9RQRe_~GI4GuwP6yD~RFVdOq-YjA~FQHUiBZOQu~nRp2ZLPLbj~hznVYuC5dv~HcBlC3F1Sy~TOd0tpUry5~_KyQ0vzYG3~1F9SMtTyiX~YiTMnnXdua~RRFW9UEFcZ~5_dlEfDKjq~EhhGlqKHfC~CrFcrMFJzz~Doqtqks7uU~b_5GGFeCVH~XDEWeW9f9i~-r9Mj2XZhX~hQjrOBhAmM~Fjv0UpXxe-~6GY4tS8gKL~Za2W2r7DSk~CLPNYlKnQJ~75zhzbk0bS~_O3rPkfXWX~Z-Qm0rY4Rd~Na5nyFAPzX~S3EB73x0uU~Kw3rxm81BS~OFUTYihkwa~gkL6GKqYU6~r4aPQYCHUY~MM6RXH_rlN~azESOjmQSV~nRnn8VBmkN~fbUyQrXMR3~mH912ebF42~-L-4bBqjrT~rezgCfkPbs',
            'Referer':'https://www.pixiv.net/',
            'Upgrade-Insecure-Requests':1,
            'User-Agent':'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.81 Safari/537.36'

             }
    };

    return option;
}

module.exports = createHeader;

