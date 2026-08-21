import type { CollectionBeforeChangeHook } from 'payload'

export const setCreatedBy: CollectionBeforeChangeHook = ({
  req,
  data,
  operation,
}) => {
  if (operation === 'create' && req.user) {
    data.createdBy = req.user.id
  }

  return data
}