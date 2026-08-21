import { isLoggedIn, isOwner } from "@/helpers/access/owner";
import { createdByField } from "@/helpers/fields/createdBy";
import { setCreatedBy } from "@/helpers/hooks/setCreatedBy";
import { CollectionConfig } from "payload";

export const Experience: CollectionConfig = {
  slug: 'experiences',
  access: {
    read: isOwner,
    update: isOwner,
    delete: isOwner,
    create: isLoggedIn,
  },
  hooks: {
    beforeChange: [setCreatedBy],
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true
    },
    {
      name: 'company',
      type: 'text',
      required: true
    },
    {
      name: 'icon',
      type: 'text',
      required: true
    },
    {
      name: 'job',
      label: 'Is this Job?',
      type: 'checkbox',
      defaultValue: true
    },
    {
      name: 'location',
      type: 'text'
    },
    {
      name: 'href',
      type: 'text'
    },
    {
      name: 'duration',
      type: 'text'
    },
    {
      name: 'description',
      type: 'text'
    },
    {
      name: 'tasks',
      type: 'array',
      labels: {
        singular: 'Task',
        plural: 'Tasks',
      },
      fields: [
        {
          name: 'task',
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