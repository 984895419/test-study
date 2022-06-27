! function (win, doc) {
    var OrientationMobile = function (opt) {
        this.opt = _extends({
            dir: "landscape",
            tip: ""
        }, opt), device().isPC || (this.init(), this.resize())
    };

    function _extends(target) {
        for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i];
            for (var key in source) Object.prototype.hasOwnProperty.call(source, key) && (target[key] = source[key])
        }
        return target
    }

    function device() {
        var WIN = win,
            LOC = WIN.location,
            NA = WIN.navigator,
            UA = NA.userAgent.toLowerCase();

        function test(needle) {
            return needle.test(UA)
        }
        var isTouch = "ontouchend" in WIN,
            isAndroid = test(/android|htc/) || /linux/i.test(NA.platform + ""),
            isAndroidPhone = isAndroid && test(/mobile/),
            isAndroidTablet = isAndroid && !isAndroidPhone,
            isIPad = !isAndroid && test(/ipad/),
            isIPhone = !isAndroid && test(/ipod|iphone/),
            isIOS = isIPad || isIPhone,
            isWindows = test(/windows/),
            isWinPhone = test(/windows phone/),
            isWinTablet = isWindows && test(/touch/) && !isWinPhone,
            isMeego = test(/meego/),
            isWebapp = !!NA.standalone,
            isUC = test(/ucbrowser/),
            isWeixin = test(/micromessenger/),
            isWeibo = test(/weibo/),
            isQQ = test(/qq\/[\d\.]+/),
            isChrome = !!WIN.chrome,
            isHTC = isAndroid && test(/htc\s+/),
            isMobile = isAndroidPhone || isIPhone || isWinPhone || isMeego,
            isTablet = test(/tablet/) || isAndroidTablet || isIPad || isWinTablet,
            isPC, isDebug;
        return {
            isTouch: isTouch,
            isAndroid: isAndroid,
            isAndroidTablet: isAndroidTablet,
            isIPad: isIPad,
            isIPhone: isIPhone,
            isIOS: isIOS,
            isWinPhone: isWinPhone,
            isWebapp: isWebapp,
            isUC: isUC,
            isWeixin: isWeixin,
            isQQ: isQQ,
            isWeibo: isWeibo,
            isChrome: isChrome,
            isHTC: isHTC,
            isMobile: isMobile,
            isTablet: isTablet,
            isPC: !isMobile && !isTablet,
            isDebug: !!~("" + LOC.port).indexOf("0")
        }
    }
    OrientationMobile.prototype.init = function () {
        var maskAniFrames = "@keyframes orientMaskAni {0%,30% {transform: rotate(-90deg)}100%,70% {transform: rotate(0)}}",
            framesStyle = doc.createElement("style");
        framesStyle.innerHTML = maskAniFrames, doc.getElementsByTagName("head")[0].appendChild(framesStyle);
        var orientationChangeMask = doc.createElement("div"),
            orientationChangeMaskBg = doc.createElement("div"),
            orientationChangeMaskText = doc.createElement("p");
        orientationChangeMask.setAttribute("id", "orientation_change_mask"), orientationChangeMask.style.position = "fixed", orientationChangeMask.style.top = "0", orientationChangeMask.style.left = "0", orientationChangeMask.style.zIndex = "1000", orientationChangeMask.style.width = "100vw", orientationChangeMask.style.height = "100vh", orientationChangeMask.style.backgroundColor = "#3a5b92", orientationChangeMask.style.display = "none", orientationChangeMaskBg.style.position = "absolute", orientationChangeMaskBg.style.left = "50%", orientationChangeMaskBg.style.top = "landscape" === this.opt.dir ? "50%" : "40%", orientationChangeMaskBg.style.marginLeft = "-37px", orientationChangeMaskBg.style.marginTop = "-53px", orientationChangeMaskBg.style.width = "75px", orientationChangeMaskBg.style.height = "107px", orientationChangeMaskBg.style.backgroundImage = "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJcAAADWCAMAAADrReCCAAAASFBMVEUAAACjl3Kjl3KkjGOjl3Kjl3Kkl3KokmduZGCqj2Koi12ihVmqjV4AAACjl3KvpIVkW0FtYkepnXoxKiJ6b1Ccf1EaGiBMPSiTPEPVAAAADXRSTlMA84sexeOvMwtYaEJ3TH2w8QAAA49JREFUeNrt3etuozAQhuHBR075AAPp/d/pbkIbmgqzUQ3xaDXvz6ZSHhkHTKQYitdo4liNoiKGKQCK+KXwN8PvWCrcsp6YpbBUE68UPnMlcWpx8ZtkqwtFQwzSvqnqtjUPVv4Thq6UKfA9BpNMK4tIGU8Y3mC3PFcl7SKavJOssXghS2+uKvBK7z6QfmVxmvilRbyMJ30FlnNe/zxexinVtrXLcI6IXQdd7cuNv9scF+7H7HJNxJvlGuSx5HRsHFvKUb1OoE2XbShL6s7ykRfyrQkd/tbEwIpyZWLvrjItIVaXLWmjKu89mol+4HRJGXMAq9ud1WWIYwocvxwhqsHy2yRqwO6bkXslz2lPZJm6dlcxpVbGFkdnjfr3ybHa+Q+tcFZK035ax18ySC/9RmafxQf2OIihO7CQeo/lHypMw2FN8yrzKcMV0I+XAxt7dEkDtsyuDh+Xgxu/YOb3N3AB62AdCAsJXxAV9+EaLifULwNW/M61DtfRXeeQ5uqmyylNXaJruJxSLy5xiUtc4hKXuMQlLnGJS1ziEpe4xCUucYlLXOISl7jEJa5b4hKXuMQlLnGJS1ziEtctcYlLXOISl7jEJS5xieuWuMQlLnGJS1ziEpe4xHVLXOISl7jExdw1dP/n78rDzPN3+Oj6y2es9i04bZ+HVBc6jMezOqS5Flh/qOzaL6xUF0I3T/1hrfuuJLhO2qcm1XVOb3aFe1hi5OrH63UcsMTFFYbr56dtCODjCt+uCn1g4+qG52syF9fzJWHkMl7d9HMRw8T18ezqmbo+mLrYjFf/7BrOddlXXWG+biyST9sg3uD1A/mrwwhzyr7la+tie10kn7fpucfLdfO4sjq8mo++9UEDhoBhvKsGBKQPV33Yfo8hzPM0zQgrK2G/R0cJsNi6MJ1Fy87R/PYTLTztV/qT9l/1u7u+snu40JJmukdzBUccU0z32rawlLMytqU1CspX6SIfO5fV5S3gIsOV8ThWBbZd2uZ0KdxysWufoSxpg4jL24zP+Wostl2lKnCvogy1wKZLf6myPFqhdNhw6UaZhIV/etpizVRVVbfKGZv1iVX7j9LKOVwq4X4ksfR1eU3vzVuwfJQWz9Eiqjk+pe2lD6OtKUvaIl7hKspV6SIDZVRTUs7aJ45Sqq0bz+GJr806yXjdjmnD00Wl4ukiqgueLvKWp4u04ekiUkxdVBU8XaRrTbH+AG7fEZ8GwLHiAAAAAElFTkSuQmCC)", orientationChangeMaskBg.style.backgroundPosition = "center", orientationChangeMaskBg.style.backgroundRepeat = "no-repeat", orientationChangeMaskBg.style.backgroundSize = "contain", orientationChangeMaskBg.style.animation = "orientMaskAni 1.5s ease infinite alternate", orientationChangeMaskText.innerText = this.opt.tip, orientationChangeMaskText.style.display = "block", orientationChangeMaskText.style.width = "90%", orientationChangeMaskText.style.textAlign = "center", orientationChangeMaskText.style.fontSize = "18px", orientationChangeMaskText.style.color = "#ffffff", orientationChangeMaskText.style.position = "absolute", orientationChangeMaskText.style.left = "5%", orientationChangeMaskText.style.top = "landscape" === this.opt.dir ? "calc(50vh + 70px)" : "calc(40vh + 70px)", orientationChangeMaskText.style.display = "block", orientationChangeMaskText.style.wordBreak = "normal", orientationChangeMaskText.style.wordWrap = "break-word", orientationChangeMask.appendChild(orientationChangeMaskBg), orientationChangeMask.appendChild(orientationChangeMaskText), doc.body.appendChild(orientationChangeMask);
        var evt = "onorientationchange" in win ? "orientationchange" : "resize";
        win.addEventListener(evt, this.resize.bind(this), !1)
    }, OrientationMobile.prototype.resize = function () {
        if ("onorientationchange" in win) {
            var orientation = Math.abs(win.orientation);
            "landscape" === this.opt.dir ? doc.getElementById("orientation_change_mask").style.display = 90 == orientation || 270 == orientation ? "block" : "none" : doc.getElementById("orientation_change_mask").style.display = 0 == orientation || 180 == orientation ? "block" : "none"
        } else "landscape" === this.opt.dir ? doc.getElementById("orientation_change_mask").style.display = win.innerWidth > win.innerHeight ? "block" : "none" : doc.getElementById("orientation_change_mask").style.display = win.innerWidth < win.innerHeight ? "block" : "none"
    }, win.OrientationMobile = OrientationMobile
}(window, document);