// base64 encoded ascii to ucs-2 string
export const atou = (string_: string): string => decodeURIComponent(escape(window.atob(string_)));
