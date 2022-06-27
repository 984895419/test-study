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
  
      if (clientWidth > clientHeight) {
        docEl.style.fontSize = 100 * (clientWidth / 1920) + 'px'
      } else {
        docEl.style.fontSize = 100 * (clientWidth / 1080) + 'px'
      }
      document.body.style.visibility = 'visible'
    }
    if (!doc.addEventListener) return
  
    win.addEventListener(resizeEvt, recalc, false)
    doc.addEventListener('DOMContentLoaded', recalc, false)
  })(document, window)
  