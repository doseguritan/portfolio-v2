import { isLoggedIn, isOwner } from "@/helpers/access/owner";
import { createdByField } from "@/helpers/fields/createdBy";
import { setCreatedBy } from "@/helpers/hooks/setCreatedBy";
import { CollectionConfig } from "payload";

export const Project: CollectionConfig = {
  slug: 'projects',
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
      name: 'title',
      type: 'text'
    },
    {
      name: 'href',
      label: 'Source Code URL',
      type: 'text'
    },
    {
      name: 'live',
      label: 'Live URL',
      type: 'text'
    },
    {
      name: 'createdAt',
      label: 'Created',
      type: 'date'
    },
    {
      name: 'description',
      type: 'text'
    },
    {
      name: 'features',
      type: 'array',
      labels: {
        singular: 'Feature',
        plural: 'Features',
      },
      fields: [
        {
          name: 'feature',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      name: 'badges',
      type: 'array',
      labels: {
        singular: 'Badge',
        plural: 'Badges',
      },
      fields: [
        {
          name: 'badge',
          type: 'text',
          required: true,
        },
      ],
    },
    createdByField
  ]
}