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
