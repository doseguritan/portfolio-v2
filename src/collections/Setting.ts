import { isLoggedIn, isOwner } from "@/helpers/access/owner";
import { createdByField } from "@/helpers/fields/createdBy";
import { setCreatedBy } from "@/helpers/hooks/setCreatedBy";
import { CollectionConfig } from "payload";

export const Setting:CollectionConfig = {
  slug: 'setting',
  access: {
    read: isOwner,
    update: isOwner,
    delete: isOwner,
    create: isLoggedIn,
  },
  hooks: {
    beforeChange: [setCreatedBy]
  },
  fields: [
    {
      name: 'name',
      type: 'text'
    },
    createdByField
  ]
}