import { isAndroid, isBlackBerry, isIOS, isLinux, isMac, isUnix, isWindows } from "./helpers/os";

type OsType = "ios" | "android" | "windows" | "unix" | "mac" | "linux" | "blackberry";

export function getOS(): OsType | undefined {
  if(isIOS()) return 'ios';
  else if(isAndroid()) return 'android';
  else if(isWindows()) return "windows";
  else if(isUnix()) return "unix";
  else if(isMac()) return "mac";
  else if(isLinux()) return "linux";
  else if(isBlackBerry()) return 'blackberry';
  else return undefined;
}
