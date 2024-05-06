import {
  Reimbursement,
  ReimbursementRequest,
  SignupUserResponse,
  Status,
  User,
} from "./types";
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

export async function addReimbursements(
  reimburse: ReimbursementRequest
): Promise<Reimbursement> {
  const requestUrl = BASE_URL + "api/v1/reimbursements";
  const headers = {
    "Content-Type": "application/json",
    Authorization: "Bearer " + getUserToken(),
  };
  const response = await fetch(requestUrl, {
    headers,
    method: "POST",
    body: JSON.stringify(reimburse),
  });
  if (!response.ok) {
    throw new Error("Error fetching reimbursements");
  }
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

export async function getAllReimbursements(): Promise<Reimbursement[]> {
  const requestUrl = BASE_URL + "api/v1/reimbursements/allReimbursements";
  const headers = { Authorization: "Bearer " + getUserToken() };
  const response = await fetch(requestUrl, {
    headers,
  });
  if (!response.ok) {
    throw new Error("Error fetching reimbursements");
  }
  return await response.json();
}

export async function getAllUsers(): Promise<User[]> {
  const requestUrl = BASE_URL + "api/v1/users";
  const headers = { Authorization: "Bearer " + getUserToken() };
  const response = await fetch(requestUrl, {
    headers,
  });
  if (!response.ok) {
    throw new Error("Error fetching reimbursements");
  }
  return await response.json();
}

export async function deleteUser(id: number): Promise<string> {
  const requestUrl = BASE_URL + "api/v1/users/" + id;
  const headers = { Authorization: "Bearer " + getUserToken() };
  const response = await fetch(requestUrl, {
    headers,
    method: "DELETE",
  });
  if (!response.ok) {
    throw new Error("Error fetching reimbursements");
  }
  return await response.text();
}

export async function updateReimbStatus(
  id: number,
  status: Status
): Promise<Reimbursement> {
  const requestUrl = BASE_URL + "api/v1/reimbursements/updateStatus";
  const headers = {
    Authorization: "Bearer " + getUserToken(),
    "Content-Type": "application/json",
  };
  const response = await fetch(requestUrl, {
    headers,
    method: "PATCH",
    body: JSON.stringify({ id, status }),
  });
  if (!response.ok) {
    throw new Error("Error fetching reimbursements");
  }
  return await response.json();
}
