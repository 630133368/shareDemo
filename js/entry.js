var c = Math['floor'](Math['random']() * 0x4) + 0x1;
function d() {
    var e = Math['floor'](Math['random']() * 0x1e) + 0x5a;
    return e / 0x64;
}
var f = function () {
    var g = d();
    var i = {
        'w': 0x12c * g,
        'h': 0x1f4 * g
    };
    var j = {
        'w': 0x64 * g,
        'h': 0x64 * g
    };
    $('#container')['html']('<div\x20style=\x22animation:\x20show' + c + '\x20.4s;\x20border-radius:\x208px;\x20height:\x20100vh;\x20background:\x20rgb(242,\x2094,\x2077);\x20width:\x20' + i['w'] + 'px;\x20height:\x20' + i['h'] + 'px;\x20position:\x20absolute;\x20left:\x2050%;\x20top:\x2050%;\x20transform:\x20translate(-50%,\x20-50%)\x22><div\x20class=\x22top\x22><img\x20class=\x22img1\x22\x20src=\x22./src/img/img1.png\x22\x20alt=\x22\x22><p\x20class=\x22text1\x22>庆祝海底捞成功上市！</p><p\x20class=\x22text2\x22>全民派发现金红包<span\x20class=\x22btn1\x22>可提现</span></p></div><div\x20id=\x22btn2\x22\x20style=\x22position:\x20absolute;left:\x2050%;transform:\x20translateX(-50%);width:\x20' + j['h'] + 'px;height:\x20' + j['h'] + 'px;border:\x201px\x20solid\x20rgb(235,\x20205,\x20155);background-color:\x20rgb(235,\x20205,\x20155);border-radius:\x2050%;margin:\x20-55.5px\x20auto\x200px;box-shadow:\x20rgba(0,\x200,\x200,\x200.2)\x200px\x204px\x200px\x200px;text-align:\x20center;line-height:\x20' + j['h'] + 'px;\x22\x20class=\x22btn2\x20animation1\x22><span\x20class=\x22text3\x22>抢</span></div></div>');
};
var k = function () {
    var l = document['getElementById']('btn2');
    l['addEventListener']('click', function () {
        l['style']['animation'] = 'btnShake' + c + '\x201s\x20ease\x200s\x20infinite';
        setTimeout(function () {
            window['location']['href'] = '/share.html';
        }, 0x7d0);
    });
};
var m = function () {
    f();
    k();
};
m();