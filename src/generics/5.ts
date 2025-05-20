
export enum UserRole {
  admin = 'admin',
  editor = 'editor',
  guest = 'guest',
}

type roleDescription = Record<UserRole, string>;

const RoleDescription: roleDescription = {
  [UserRole.admin]: 'Admin User',
  [UserRole.editor]: 'Editor User',
  [UserRole.guest]: 'Guest User',
};
