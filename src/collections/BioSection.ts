import { isLoggedIn, isOwner } from "@/helpers/access/owner";
import { createdByField } from "@/helpers/fields/createdBy";
import { setCreatedBy } from "@/helpers/hooks/setCreatedBy";
import { CollectionConfig } from "payload";

export const BioSection: CollectionConfig = {
  slug: 'biosection',
  admin: {
    useAsTitle: 'title',
  },
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
      name: 'icon',
      type: 'text',
      required: true
    },
    {
      name: 'title',
      type: 'text',
      required: true
    },
    {
      name: 'tayp',
      label: 'Type',
      type: 'text',
      required: true
    },
    createdByField
  ]

}