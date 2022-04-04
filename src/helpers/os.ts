import { getUserAgent } from "../utils/get-user-agent";

export function isIOS(): boolean {
  return !!getUserAgent().match(/iPhone|iPad|iPod/i);
}

export function isAndroid(): boolean {
  return !!getUserAgent().match(/Android/i);
}

export function isWindows(): boolean {
  return !!getUserAgent().match(/Windows/i);
}

export function isUnix(): boolean {
  return !!getUserAgent().match(/Unix/i);
}

export function isMac(): boolean {
  return !!getUserAgent().match(/Mac/i) && !isIOS();
}

export function isLinux(): boolean {
  return !!getUserAgent().match(/Linux/i) && !isAndroid();
}

export function isBlackBerry(): boolean {
  return !!getUserAgent().match(/BlackBerry/i);
}

export function isIPad(): boolean {
  return (/ipad/gi).test(navigator.platform);
}

export function isIPhone(): boolean {
  return (/iphone/gi).test(navigator.platform);
}

export function getIOSVersion(): number | null {
  if(isIOS()) {
    const version = navigator.appVersion.match(/OS (\d+_\d+)/i);
    return version && version[1] ? +version[1].replace("_", ".") : null;
  } else {
    return null;
  }
}
