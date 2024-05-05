export type User = {
  id: number;
  username: string;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  role: string;
};

enum Role {
  USER,
  MANAGER,
}

export type SignupUserResponse = {
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  role: Role;
};

export type Reimbursement = {
  reimbId: number;
  description: string;
  amount: number;
  status: Status;
  user: User;
};

export enum Status {
  APPROVED,
  DENIED,
  PENDING,
}

export type ReimbursementRequest = {
  description: string;
  amount: number;
  status: Status;
};
