export enum UserRoles {
  'CO_FOUNDER' = 'ROLE_NAME_CO_FOUNDER',
  'EDITOR' = 'ROLE_NAME_EDITOR',
  'EDITOR_IN_CHIEF' = 'ROLE_NAME_EDITOR_IN_CHIEF',
  'FOUNDER' = 'ROLE_NAME_FOUNDER',
  'JOURNALIST' = 'ROLE_NAME_JOURNALIST',
  'PARTNER' = 'ROLE_NAME_PARTNER',
}
export type UserRolesKeys = keyof typeof UserRoles;
