import { getUserAgent } from "../utils/get-user-agent";

// Resolution
export function getInnerWidth(): number {
  return window.innerWidth;
}

export function getInnerHeight(): number {
  return window.innerHeight;
}

export function getScreenWidth(): number {
  return screen.width;
}

export function getScreenHeight(): number {
  return screen.height;
}

export function isHD(): boolean {
  if(!window.devicePixelRatio) return false;
  return window?.devicePixelRatio > 1;
}

export function getPixelRatio(): number {
  return window.devicePixelRatio ? window.devicePixelRatio : 1;
}

export function isMobile(): boolean {
  return !!getUserAgent().match(/iPhone|iPad|iPod|Android|BlackBerry|Opera Mini|IEMobile|CRiOS|OPiOS|Mobile|FxiOS/i);
}

export function isDesktop(): boolean {
  return !isMobile();
}

export function isLandscape(): boolean {
  return getInnerHeight() < getInnerWidth();
}

export function isPortrait(): boolean {
  return !isLandscape();
}

export function isStandalone(): boolean {
  // @ts-ignore
  return !!navigator.standalone;
}

export function getMaxTouchPoints(): number {
  return navigator.maxTouchPoints;
}

export function isTouch(): boolean {
  return 'ontouchstart' in document.documentElement;
}
