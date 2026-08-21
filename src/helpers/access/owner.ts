import type { Access } from 'payload'

export const isOwner: Access = ({ req: { user } }) => {
  if (!user) return false;

  return {
    createdBy: {
      equals: user.id,
    },
  }
}

export const isLoggedIn: Access = ({ req: { user } }) => {
  return !!user
}