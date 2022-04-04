import { getBrowserName } from "../utils/get-browser-name";
import { getUserAgent } from "../utils/get-user-agent";
import { isMobile } from "./device";

// Desktop browser detection

export function isIE(): boolean {
  return !!getBrowserName().toLowerCase().match(/ie|msie|iemobile/i);
}

export function isEdge(): boolean {
  return !!getBrowserName().toLowerCase().match(/edge/i);
}

export function isFirefox(): boolean {
  return !!getBrowserName().toLowerCase().match(/firefox|fxios/i);
}

export function isOpera(): boolean {
  // @ts-ignore
  return !!getUserAgent().toLowerCase().match(/opera|opr|opera mini|opios/i) || Object.prototype.toString.call(window.operamini) === "[object OperaMini]";
}

export function isChrome(): boolean {
  const ua: string = getUserAgent();
  return ((ua.indexOf('Chrome') !== -1 && navigator.vendor.indexOf('Google Inc') !== -1) || ua.indexOf('CriOS') !== -1) && !isOpera();
}

export function isSafari(): boolean {
  return (getUserAgent().indexOf("Safari") !== -1 && navigator.vendor.indexOf("Apple Computer") !== -1 && !isChrome()) && !isFirefox() && !isOpera();
}

// Mobile browser detection

export function isMobileIE(): boolean {
  return isMobile() && isIE();
}

export function isMobileFirefox(): boolean {
  return isMobile() && isFirefox();
}

export function isMobileOpera(): boolean {
  return isMobile() && isOpera();
}

export function isMobileChrome(): boolean {
  return (!!getUserAgent().toLowerCase().match("crios") || (isMobile() && isChrome()));
}

export function isMobileSafari(): boolean {
  return isMobile() && isSafari();
}
