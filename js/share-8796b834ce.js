var c = null;
var d = null;
var e = 0x4;
var f = !![];
var g = !![];
var h = !![];
var i = ![];
try {
    i = process['env']['NODE_ENV'] === 'development';
} catch (j) {
    i = ![];
}
var k = i ? 'src/assets/' : '';
var l = (Math['floor'](Math['random']() * 0x1f4) / 0xa + 0x64)['toFixed'](0x2);
var m = 0x30d40;
var n = Math['floor'](Math['random']() * 0x30d40);
var o = {
    'img_url': '',
    'img_width': 0xc8,
    'img_height': 0xc8,
    'link': '',
    'desc': '',
    'title': '',
    'appid': 0x0
};
var p = [
    {
        'name': '风月难入怀',
        'time': '22:59',
        'img': k + 'img/img2.gif'
    },
    {
        'name': '风月难入怀',
        'time': '22:59',
        'img': k + 'img/img2.gif'
    },
    {
        'name': '风月难入怀',
        'time': '22:59',
        'img': k + 'img/img2.gif'
    },
    {
        'name': '风月难入怀',
        'time': '22:59',
        'img': k + 'img/img2.gif'
    },
    {
        'name': '风月难入怀',
        'time': '22:59',
        'img': k + 'img/img2.gif'
    },
    {
        'name': '风月难入怀',
        'time': '22:59',
        'img': k + 'img/img2.gif'
    },
    {
        'name': '风月难入怀',
        'time': '22:59',
        'img': k + 'img/img2.gif'
    },
    {
        'name': '风月难入怀',
        'time': '22:59',
        'img': k + 'img/img2.gif'
    },
    {
        'name': '风月难入怀',
        'time': '22:59',
        'img': k + 'img/img2.gif'
    },
    {
        'name': '风月难入怀',
        'time': '22:59',
        'img': k + 'img/img2.gif'
    }
];
var q = function () {
    var r = '';
    for (var s = 0x0; s < p['length']; s++) {
        r += '<div\x20class=\x22list-item\x22><img\x20class=\x22list-item-img\x22\x20src=\x22' + p[s]['img'] + '\x22\x20alt=\x22\x22><div\x20style=\x22flex:\x201\x22><div\x20style=\x22font-size:\x2015px;\x20color:\x20#000;\x20margin-bottom:\x204px;\x22>' + p[s]['name'] + '</div><div\x20style=\x22font-size:\x2014px;\x20color:\x20#929493;\x22>' + p[s]['time'] + '</div></div><div><span><img\x20src=\x22' + k + 'img/img3.png\x22\x20style=\x22width:\x2040px;\x20height:\x2040px\x22\x20alt=\x22\x22></span><span></span></div></div>';
    }
    $('.container')['html']('<div\x20class=\x22top\x22><img\x20class=\x22img1\x22\x20src=\x22' + k + 'img/img1.png\x22\x20alt=\x22\x22><p\x20class=\x22text1\x22>庆祝海底捞成功上市！</p><p\x20class=\x22text3\x22>￥<span\x20id=\x22price\x22></span></p><p\x20class=\x22text2\x22>分享到微信后，自动存入微信钱包</p><div\x20class=\x22btn1\x22>确认</div></div><div\x20class=\x22divider\x22></div><div\x20class=\x22countDown\x22>总发放' + m + '份\x20剩余<span\x20id=\x27remainPortion\x27>' + n + '</span>份</div><div\x20class=\x22list-container\x22>' + r + '</div><div\x20class=\x22float\x22><img\x20class=\x22float-img\x22\x20src=\x22' + k + 'img/img6.png\x22\x20alt=\x22\x22><div\x20class=\x22tip\x22><img\x20class=\x22tip-img\x22\x20src=\x22' + k + 'img/img4.png\x22\x20alt=\x22\x22></div></div>');
};
var t = function () {
    var u = document['querySelector']('#price');
    var v = new Digit({
        'number': l,
        'finish': 0.2,
        'speed': 0x5,
        'direction': 'right',
        'dom': u
    });
    v['render']();
};
var w = function () {
    setInterval(function () {
        var x = $('.list-item')['length'];
        n = n - Math['floor'](Math['random']() * 0x12c);
        if (n <= 0x0) {
            $('#remainPortion')['text'](0x0);
        } else {
            $('#remainPortion')['text'](n);
        }
        if (x >= 0x14) {
            $('.list-item')['eq'](0x13)['remove']();
        }
        $('.list-container')['prepend']('<div\x20class=\x22list-item\x22><img\x20class=\x22list-item-img\x22\x20src=\x22' + k + 'img/img2.gif\x22\x20alt=\x22\x22><div\x20style=\x22flex:\x201\x22><div\x20style=\x22font-size:\x2015px;\x20color:\x20#000;\x20margin-bottom:\x204px;\x22>风月难入怀</div><div\x20style=\x22font-size:\x2014px;\x20color:\x20#929493;\x22>22:59</div></div><div><span><img\x20src=\x22' + k + 'img/img3.png\x22\x20style=\x22width:\x2040px;\x20height:\x2040px\x22\x20alt=\x22\x22></span><span></span></div></div>');
    }, 0x7d0);
};
var y = function () {
    $('.btn1')['on']('click', function () {
        if (!c) {
            c = layer['open']({
                'type': 0x1,
                'area': [
                    '100%',
                    '100vh'
                ],
                'title': ![],
                'closeBtn': 0x0,
                'content': '\x20<div\x20style=\x22background:\x20transparent;\x20position:\x20relative;\x20text-align:\x20center;\x20border-radius:\x203px;\x20font-family:\x20arial;\x20overflow:\x20hidden;\x20height:\x20100%\x22><div\x20style=\x22width:\x20281px;\x20position:\x20absolute;\x20left:\x2050%;\x20top:\x2050%;\x20transform:\x20translate(-50%,\x20-50%);\x20z-index:\x202;\x20animation:\x20tipShake\x201s\x22><div\x20style=\x22padding:\x2020px\x2020px\x2030px;\x20font-size:\x2016px;\x20color:\x20rgb(0,\x200,\x200);\x20word-wrap:\x20break-word;\x20word-break:\x20break-all;\x22><div\x20text-align:\x20center;\x20box-sizing:\x20content-box;\x20display:\x20block;><span\x20style=\x22font-size:\x2023px;\x20color:\x20#1BBC9B;\x22>祝贺</span><br\x20/><span\x20style=\x22color:\x20#1BBC9B;\x22>您获得海底捞现金奖励</span><br\x20/><span\x20style=\x22font-size:\x2020px;\x20color:\x20red;\x22>￥' + l + '</span><br\x20/><span\x20style=\x22color:\x20red;\x22>活动要求：</span><br\x20/>您只需分享到<span\x20style=\x22color:\x20red;\x20font-size:\x2020px;\x22>微信群</span><br\x20/><span\x20style=\x22color:\x20#1BBC9B;\x22>完成后自动存入您的微信钱包</span><br\x20/><br\x20/>总金额仅剩余' + (n * 0.02)['toFixed'](0x2) + '万，先到先得，活动经微信认证，真实有效</div></div><div\x20class=\x22closeBtn\x22\x20style=\x22width:\x20140px;\x20height:\x2030px;\x20padding-bottom:\x201px;\x20color:\x20rgb(11,\x20178,\x2012);\x20font-size:\x2016px;\x20margin:\x200\x20auto;\x20background:\x20#f6e015;\x20border-radius:\x2030px;\x20line-height:\x2030px\x22>我知道了</div></div><img\x20src=\x22' + k + 'img/img5.png\x22\x20style=\x22height:\x20110vh;\x20position:\x20absolute;\x20top:\x2050%;\x20left:\x2050%;\x20transform:\x20translate(-50%,\x20-50%);\x20animation:\x20rotateMove\x20linear\x2010s\x20infinite\x22\x20/><img\x20src=\x22' + k + 'img/img7.png\x22\x20style=\x22width:\x20688px;\x20position:\x20absolute;\x20top:\x2050%;\x20left:\x2050%;\x20transform:\x20translate(-50%,\x20-50%);\x20z-index:\x201;\x20animation:\x20tipShake\x201s\x22\x20/></div>',
                'success': function () {
                    $('.closeBtn')['one']('click', function () {
                        layer['close'](c);
                        c = null;
                    });
                }
            });
        }
    });
};
function z(A) {
    d = layer['open']({
        'type': 0x1,
        'area': [
            '100%',
            '100vh'
        ],
        'title': ![],
        'closeBtn': 0x0,
        'content': '<div\x20style=\x22background:\x20transparent;\x20position:\x20relative;\x20text-align:\x20center;\x20border-radius:\x203px;\x20font-family:\x20arial;\x20overflow:\x20hidden;\x20height:\x20100%\x22><div\x20style=\x22width:\x20281px;\x20position:\x20absolute;\x20left:\x2050%;\x20top:\x2050%;\x20transform:\x20translate(-50%,\x20-50%);\x20z-index:\x202;\x20animation:\x20tipShake\x201s\x22><div\x20style=\x22padding:\x2020px\x2020px\x2030px;\x20font-size:\x2016px;\x20color:\x20rgb(0,\x200,\x200);\x20word-wrap:\x20break-word;\x20word-break:\x20break-all;\x22>' + A + '</div><div\x20class=\x22closeBtn\x22\x20style=\x22width:\x20140px;\x20height:\x2030px;\x20padding-bottom:\x201px;\x20color:\x20rgb(11,\x20178,\x2012);\x20font-size:\x2016px;\x20margin:\x200\x20auto;\x20background:\x20#f6e015;\x20border-radius:\x2030px;\x20line-height:\x2030px\x22>我知道了</div></div><img\x20src=\x22' + k + 'img/img5.png\x22\x20style=\x22height:\x20110vh;\x20position:\x20absolute;\x20top:\x2050%;\x20left:\x2050%;\x20transform:\x20translate(-50%,\x20-50%);\x20animation:\x20rotateMove\x20linear\x2010s\x20infinite\x22\x20/><img\x20src=\x22' + k + 'img/img7.png\x22\x20style=\x22width:\x20688px;\x20position:\x20absolute;\x20top:\x2050%;\x20left:\x2050%;\x20transform:\x20translate(-50%,\x20-50%);\x20z-index:\x201;\x20animation:\x20tipShake\x201s\x22\x20/></div>',
        'success': function () {
            $('.closeBtn')['one']('click', function () {
                layer['close'](d);
                c = null;
            });
        }
    });
}
var B = function (C) {
    if (C['errMsg'] !== 'onMenuShareTimeline:ok') {
        return;
    }
    if (d) {
        layer['close'](d);
        c = null;
    }
    if (e === 0x2 && f) {
        f = ![];
        return z('<div\x20text-align:\x20center;\x20box-sizing:\x20content-box;\x20display:\x20block;><span\x20style=\x22font-size:\x2023px;\x20color:\x20#1BBC9B;\x22><span\x20style=\x22vertical-align:\x20bottom;\x20font-size:\x2024px;\x20font-weight:\x20900\x22>分享失败</span><img\x20style=\x22vertical-align:\x20bottom;\x22\x20src=\x22' + k + 'img/img8.png\x22\x20/></span><br\x20/><span\x20style=\x22color:\x20#1BBC9B;\x22>请不要分享到相同的群或好友</span><br\x20/><span\x20style=\x22color:\x20#1BBC9B;\x22>请尝试重新分享到不同的微信群</span><br\x20/><span\x20style=\x22font-size:\x2020px;\x20color:\x20red;\x22>即可马上到账￥' + l + '</span><br\x20/></div>');
    }
    if (e === 0x1 && g) {
        g = ![];
        return z('<div\x20text-align:\x20center;\x20box-sizing:\x20content-box;\x20display:\x20block;><span\x20style=\x22font-size:\x2023px;\x20color:\x20#1BBC9B;\x22><span\x20style=\x22vertical-align:\x20bottom;\x20font-size:\x2024px;\x20font-weight:\x20900\x22>分享成功</span><img\x20style=\x22vertical-align:\x20bottom;\x22\x20src=\x22' + k + 'img/img9.png\x22\x20/></span><br\x20/><span\x20style=\x22color:\x20#1BBC9B;\x22>只剩最后一步啦</span><br\x20/><span\x20style=\x22color:\x20#1BBC9B;\x22>请分享到朋友圈</span><br\x20/><span\x20style=\x22color:\x20#1BBC9B;\x22>保证100%马上到账￥' + l + '</span><br\x20/></div>');
    }
    if (e === 0x1 && h) {
        h = ![];
        return z('<div\x20text-align:\x20center;\x20box-sizing:\x20content-box;\x20display:\x20block;><span\x20style=\x22font-size:\x2023px;\x20color:\x20#1BBC9B;\x22><span\x20style=\x22vertical-align:\x20bottom;\x20font-size:\x2024px;\x20font-weight:\x20900\x22>分享失败</span><img\x20style=\x22vertical-align:\x20bottom;\x22\x20src=\x22' + k + 'img/img8.png\x22\x20/></span><br\x20/><span\x20style=\x22color:\x20#1BBC9B;\x22>注意：必须公开分享才可以到账</span><br\x20/><span\x20style=\x22color:\x20#1BBC9B;\x22>客服需要验证朋友圈分享信息发放红包</span><br\x20/><span\x20style=\x22color:\x20#1BBC9B;\x22>请尝试重新分享到朋友圈</span><br\x20/><span\x20style=\x22color:\x20#1BBC9B;\x22>保证100%可以到账￥' + l + '</span><br\x20/></div>');
    }
    if (e === 0x1) {
        return z('<div\x20text-align:\x20center;\x20box-sizing:\x20content-box;\x20display:\x20block;><span\x20style=\x22color:\x20#1BBC9B;\x22>感谢您的参与</span><br\x20/><span\x20style=\x22color:\x20#1BBC9B;\x22>注意：系统将会验证朋友圈信息判断是否完成转发任务</span><br\x20/><span\x20style=\x22color:\x20#1BBC9B;\x22>由于活动量巨大</span><br\x20/><span\x20style=\x22color:\x20#1BBC9B;\x22>补贴最迟24小时内到账</span><br\x20/><span\x20style=\x22color:\x20#1BBC9B;\x22>请保留朋友圈信息至补贴到账</span><br\x20/><span\x20style=\x22color:\x20#1BBC9B;\x22>请注意查看您的微信钱包</span><br\x20/><span\x20style=\x22color:\x20#1BBC9B;\x22>删除分享链接可能导致无法到账</span><br\x20/></div>');
    }
    e--;
    z('<div\x20text-align:\x20center;\x20box-sizing:\x20content-box;\x20display:\x20block;><span\x20style=\x22font-size:\x2023px;\x20color:\x20#1BBC9B;\x22><span\x20style=\x22vertical-align:\x20bottom;\x20font-size:\x2024px;\x20font-weight:\x20900\x22>分享成功</span><img\x20style=\x22vertical-align:\x20bottom;\x22\x20src=\x22' + k + 'img/img9.png\x22\x20/></span><br\x20/><span\x20style=\x22color:\x20#1BBC9B;\x22>请继续分享到' + e + '个不同的群</span><br\x20/><span\x20style=\x22font-size:\x2020px;\x20color:\x20red;\x22>￥' + l + '</span><br\x20/><span\x20style=\x22color:\x20red;\x22>将自动存入您的钱包</span><br\x20/></div>');
};
var D = function () {
    WeixinJSBridge['invoke']('shareTimeline', o, function (E) {
        B(E);
    });
};
var F = function () {
    WeixinJSBridge['invoke']('sendAppMessage', o, function (G) {
        B(G);
    });
};
var H = function () {
    document['addEventListener']('WeixinJSBridgeReady', function onBridgeReady() {
        console['log'](0x51615);
        WeixinJSBridge['on']('menu:share:appmessage', function (I) {
            F();
        });
        WeixinJSBridge['on']('menu:share:timeline', function (J) {
            D();
        });
    }, ![]);
};
var K = function () {
    q();
    t();
    w();
    y();
    H();
};
K();