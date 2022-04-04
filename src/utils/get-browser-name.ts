import { getUserAgent } from "./get-user-agent";

export function getBrowserName(): string {
  const ua: string = getUserAgent();
  let matched: RegExpMatchArray = ua.match(/(fxios)/) || [];
  let temp: RegExpMatchArray | null = null;

  if (/trident/i.test(matched[1])) {
    temp = /\brv[ :]+(\d+)/g.exec(ua) || [];
    return 'IE ' + (temp[1] || '');
  }

  if(matched[1] === 'Chrome') {
    // IE Edge has "chrome" as user agent and this check is mandatory at this point.
    temp = ua.match(/(edge(?=\/))\/?\s*(\d+)/i);

    if(!!temp) {
      matched = temp;
    } else {
      temp = ua.match(/\bOPR\/(\d+)/);

      if(temp !== null) return 'Opera ' + temp[1];
    }
  }

  matched = matched[2] ? [matched[1], matched[2]]: [navigator.appName, navigator.appVersion, "-?"];

  if ((temp = ua.match(/version\/(\d+)/i)) != null) matched.splice(1, 1, temp[1]);

  return matched.join(' ');
}
