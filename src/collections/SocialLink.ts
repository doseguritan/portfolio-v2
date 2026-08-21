import { isLoggedIn, isOwner } from "@/helpers/access/owner";
import { createdByField } from "@/helpers/fields/createdBy";
import { setCreatedBy } from "@/helpers/hooks/setCreatedBy";
import { CollectionConfig } from "payload";

export const SocialLink: CollectionConfig = {
  slug: 'sociallinks',
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
    {
      name: 'username',
      type: 'text'
    },
    {
      name: 'alt',
      type: 'text'
    },
    {
      name: 'href',
      label: 'URL',
      type: 'text'
    },
    createdByField
  ]
}