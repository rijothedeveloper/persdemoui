import { SignupUserResponse, User } from "./types";

const BASE_URL = "http://localhost:8080/";

export async function signup(user: User): Promise<SignupUserResponse> {
  const requestUrl = BASE_URL + "api/v1/auth/signup";
  const request = new Request(requestUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });
  const response = await fetch(request);
  if (!response.ok) {
    throw new Error("Error signing up");
  }
  const signupUserResponse: SignupUserResponse = await response.json();
  return signupUserResponse;
}
