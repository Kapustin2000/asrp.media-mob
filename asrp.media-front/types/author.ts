import type { Media } from './media';
import type { Role } from './role';

export type Author = {
  fullName: string | undefined;
  id: string;
  firstName: string;
  lastName: string;
  description: string;
  userName: string;
  avatar: Media[];
  bgImage: Media[];
  index: number;
  landingUrl: string;
  regalia: string;
  isFollowed: boolean;
  type: string;
  Role: Role;
};
