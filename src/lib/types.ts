export type User = {
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

enum Status {
  APPROVED,
  DENIED,
  PENDING,
}
