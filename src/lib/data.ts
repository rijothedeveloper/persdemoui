import { Reimbursement, SignupUserResponse, User } from "./types";
import { getUserToken } from "./util";

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
  try {
    const signupUserResponse: SignupUserResponse = await response.json();
    return signupUserResponse;
  } catch (error) {
    throw new Error("Error signing up");
  }
}

export async function signin(username: string, password: string) {
  const requestUrl = BASE_URL + "api/v1/auth/signin";
  const request = new Request(requestUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, password }),
  });
  const response = await fetch(request);
  return await response.json();
}

export async function getMyReimbursements(): Promise<Reimbursement[]> {
  const requestUrl = BASE_URL + "api/v1/reimbursements";
  const headers = { Authorization: "Bearer " + getUserToken() };
  const response = await fetch(requestUrl, {
    headers,
  });
  if (!response.ok) {
    throw new Error("Error fetching reimbursements");
  }
  return await response.json();
}
