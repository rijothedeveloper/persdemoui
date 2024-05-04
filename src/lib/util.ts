import Cookies from "js-cookie";

export function isSignedIn(): boolean {
  return Cookies.get("token") !== undefined;
}

export function signOut(): void {
  Cookies.remove("token");
}

export function getUserToken(): string {
  return Cookies.get("token");
}
