(function (doc, win) {
    var UA = function () {
        var ua = navigator.userAgent;
        var isMobile = /mobile/gi.test(ua);
        var isIOS = /ipad|iphone|mac/gi.test(ua);
        var isAndroid = /android/gi.test(ua);

        return {
            ua: ua,
            isMobile: isMobile,
            isIOS: isIOS,
            isAndroid: isAndroid,
        };
    };
    var _ua = UA();

    var resizeEvt = "";
    if (_ua.isMobile && _ua.isAndroid) {
        resizeEvt = "orientationchange";
    } else {
        resizeEvt = "orientationchange" in window ? "orientationchange" : "resize";
    }

    var docEl = doc.documentElement,
        recalc = function () {
            var clientWidth = docEl.clientWidth;
            var clientHeight = docEl.clientHeight;
            var proportion = clientWidth / clientHeight;
            if (!clientHeight || !clientWidth) return;
            if (proportion > 0 && proportion < 1) {
                docEl.style.fontSize = 100 * (clientWidth / 750) + 'px';
                doc.body.style.visibility = 'visible';
                return false;
            }
            if (proportion >= 1 && proportion < 1.5) {
                docEl.style.fontSize = 100 * (clientWidth / 1400) + 'px';
                doc.body.style.visibility = 'visible';
                return false;
            }

            if (clientWidth > clientHeight) {
                clientHeight >= 750 ? docEl.style.fontSize = '100px' : docEl.style.fontSize = 100 * (clientHeight / 750) + 'px';
                doc.body.style.visibility = 'visible';
            } else if (clientWidth < 650) {
                docEl.style.fontSize = 100 * (clientHeight / 1200) + 'px';
                doc.body.style.visibility = 'visible';
            } else {
                clientWidth >= 1280 ? docEl.style.fontSize = '100px' : docEl.style.fontSize = 100 * (clientWidth / 1400) + 'px';
                doc.body.style.visibility = 'visible';
            }
        };
    if (!doc.addEventListener) return;
    docEl;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);