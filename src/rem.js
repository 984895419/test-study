(function(doc, win) {
    const UA = function() {
      const ua = navigator.userAgent
      const isMobile = /mobile/gi.test(ua)
      const isIOS = /ipad|iphone|mac/gi.test(ua)
      const isAndroid = /android/gi.test(ua)
  
      return {
        ua: ua,
        isMobile: isMobile,
        isIOS: isIOS,
        isAndroid: isAndroid,
      }
    }
    const _ua = UA()
  
    let resizeEvt = ''
    if (_ua.isMobile && _ua.isAndroid) {
      resizeEvt = 'orientationchange'
    } else {
      resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize'
    }
  
    const docEl = doc.documentElement
    const recalc = function() {
      const clientWidth = docEl.clientWidth
      const clientHeight = docEl.clientHeight
      if (!clientHeight || !clientWidth) return
      //设计稿尺寸为 横版 2500 * 1080 (1920*1080)
      //             竖版 1080 * 1920   750*1334   375 * 667   
      //为了获取这个html的font-size
      if (clientWidth > clientHeight) {
        docEl.style.fontSize = 100 * (clientWidth / 1920) + 'px'
      } else {
        docEl.style.fontSize = 100 * (clientWidth / 1080) + 'px'
      }
      document.body.style.visibility = 'visible'
      document.body.style.margin = '0'
    }
    if (!doc.addEventListener) return
  
    win.addEventListener(resizeEvt, recalc, false)
    doc.addEventListener('DOMContentLoaded', recalc, false)
  })(document, window)
  