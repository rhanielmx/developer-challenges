export interface User {
  firstName?: string;
  lastName?: string;
  avatarUrl?: string;
  email?: string;

  [key: string]: unknown;
}
