import Cookies from "js-cookie";

export function isSignedIn(): boolean {
  return Cookies.get("token") !== undefined;
}
