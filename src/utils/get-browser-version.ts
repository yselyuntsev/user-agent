import { getBrowserName } from "./get-browser-name";

export function getBrowserVersion(): string {
  return getBrowserName().replace(/^\D+/g, '');
}
