function n(){return navigator.userAgent}function i(){var i=n(),r=i.match(/(fxios)/)||[],t=null;if(/trident/i.test(r[1]))return"IE "+((t=/\brv[ :]+(\d+)/g.exec(i)||[])[1]||"");if("Chrome"===r[1])if(t=i.match(/(edge(?=\/))\/?\s*(\d+)/i))r=t;else if(null!==(t=i.match(/\bOPR\/(\d+)/)))return"Opera "+t[1];return r=r[2]?[r[1],r[2]]:[navigator.appName,navigator.appVersion,"-?"],null!=(t=i.match(/version\/(\d+)/i))&&r.splice(1,1,t[1]),r.join(" ")}function r(){return window.innerWidth}function t(){return window.innerHeight}function e(){return screen.width}function o(){return screen.height}function u(){return!!window.devicePixelRatio&&(null===window||void 0===window?void 0:window.devicePixelRatio)>1}function a(){return window.devicePixelRatio?window.devicePixelRatio:1}function c(){return!!n().match(/iPhone|iPad|iPod|Android|BlackBerry|Opera Mini|IEMobile|CRiOS|OPiOS|Mobile|FxiOS/i)}function f(){return!c()}function d(){return t()<r()}function l(){return!d()}function m(){return!!navigator.standalone}function h(){return navigator.maxTouchPoints}function s(){return"ontouchstart"in document.documentElement}function p(){return!!i().toLowerCase().match(/ie|msie|iemobile/i)}function w(){return!!i().toLowerCase().match(/edge/i)}function v(){return!!i().toLowerCase().match(/firefox|fxios/i)}function g(){return!!n().toLowerCase().match(/opera|opr|opera mini|opios/i)||"[object OperaMini]"===Object.prototype.toString.call(window.operamini)}function x(){var i=n();return(-1!==i.indexOf("Chrome")&&-1!==navigator.vendor.indexOf("Google Inc")||-1!==i.indexOf("CriOS"))&&!g()}function O(){return-1!==n().indexOf("Safari")&&-1!==navigator.vendor.indexOf("Apple Computer")&&!x()&&!v()&&!g()}function P(){return c()&&p()}function C(){return c()&&v()}function b(){return c()&&g()}function S(){return!!n().toLowerCase().match("crios")||c()&&x()}function L(){return c()&&O()}function R(){return!!n().match(/iPhone|iPad|iPod/i)}function M(){return!!n().match(/Android/i)}function y(){return!!n().match(/Windows/i)}function A(){return!!n().match(/Unix/i)}function B(){return!!n().match(/Mac/i)&&!R()}function j(){return!!n().match(/Linux/i)&&!M()}function k(){return!!n().match(/BlackBerry/i)}function E(){return/ipad/gi.test(navigator.platform)}function I(){return/iphone/gi.test(navigator.platform)}function V(){if(R()){var n=navigator.appVersion.match(/OS (\d+_\d+)/i);return n&&n[1]?+n[1].replace("_","."):null}return null}function W(){return i().replace(/^\D+/g,"")}function _(){return R()?"ios":M()?"android":y()?"windows":A()?"unix":B()?"mac":j()?"linux":k()?"blackberry":void 0}function D(){return O()?"safari":x()?"chrome":p()?"ie":w()?"edge":v()?"firefox":g()?"opera":void 0}export{D as getBrowser,i as getBrowserName,W as getBrowserVersion,V as getIOSVersion,t as getInnerHeight,r as getInnerWidth,h as getMaxTouchPoints,_ as getOS,a as getPixelRatio,o as getScreenHeight,e as getScreenWidth,n as getUserAgent,M as isAndroid,k as isBlackBerry,x as isChrome,f as isDesktop,w as isEdge,v as isFirefox,u as isHD,p as isIE,R as isIOS,E as isIPad,I as isIPhone,d as isLandscape,j as isLinux,B as isMac,c as isMobile,S as isMobileChrome,C as isMobileFirefox,P as isMobileIE,b as isMobileOpera,L as isMobileSafari,g as isOpera,l as isPortrait,O as isSafari,m as isStandalone,s as isTouch,A as isUnix,y as isWindows};
//# sourceMappingURL=index.js.map