declare function isIE(): boolean;
declare function isEdge(): boolean;
declare function isFirefox(): boolean;
declare function isOpera(): boolean;
declare function isChrome(): boolean;
declare function isSafari(): boolean;
declare function isMobileIE(): boolean;
declare function isMobileFirefox(): boolean;
declare function isMobileOpera(): boolean;
declare function isMobileChrome(): boolean;
declare function isMobileSafari(): boolean;

declare function getInnerWidth(): number;
declare function getInnerHeight(): number;
declare function getScreenWidth(): number;
declare function getScreenHeight(): number;
declare function isHD(): boolean;
declare function getPixelRatio(): number;
declare function isMobile(): boolean;
declare function isDesktop(): boolean;
declare function isLandscape(): boolean;
declare function isPortrait(): boolean;
declare function isStandalone(): boolean;
declare function getMaxTouchPoints(): number;
declare function isTouch(): boolean;

declare function isIOS(): boolean;
declare function isAndroid(): boolean;
declare function isWindows(): boolean;
declare function isUnix(): boolean;
declare function isMac(): boolean;
declare function isLinux(): boolean;
declare function isBlackBerry(): boolean;
declare function isIPad(): boolean;
declare function isIPhone(): boolean;
declare function getIOSVersion(): number | null;

declare function getBrowserName(): string;

declare function getBrowserVersion(): string;

declare function getUserAgent(): string;

declare type OsType = "ios" | "android" | "windows" | "unix" | "mac" | "linux" | "blackberry";
declare function getOS(): OsType | undefined;

declare type BrowserType = "safari" | "chrome" | "ie" | "edge" | "firefox" | "opera";
declare function getBrowser(): BrowserType | undefined;

export { getBrowser, getBrowserName, getBrowserVersion, getIOSVersion, getInnerHeight, getInnerWidth, getMaxTouchPoints, getOS, getPixelRatio, getScreenHeight, getScreenWidth, getUserAgent, isAndroid, isBlackBerry, isChrome, isDesktop, isEdge, isFirefox, isHD, isIE, isIOS, isIPad, isIPhone, isLandscape, isLinux, isMac, isMobile, isMobileChrome, isMobileFirefox, isMobileIE, isMobileOpera, isMobileSafari, isOpera, isPortrait, isSafari, isStandalone, isTouch, isUnix, isWindows };
