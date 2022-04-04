import { isChrome, isEdge, isFirefox, isIE, isOpera, isSafari } from "./helpers/browser";

type BrowserType = "safari" | "chrome" | "ie" | "edge" | "firefox" | "opera";

export function getBrowser(): BrowserType | undefined {
  if(isSafari()) return "safari";
  else if(isChrome()) return "chrome";
  else if(isIE()) return "ie";
  else if(isEdge()) return "edge";
  else if(isFirefox()) return "firefox";
  else if(isOpera()) return "opera";
  else return undefined;
}
