import type { CollectionConfig } from 'payload'

export const Users: CollectionConfig = {
  slug: 'users',
  admin: {
    useAsTitle: 'email',
  },
  access: {
    create: () => false,
    delete: () => false,
    update: () => false,
    read: () => true,
  },
  auth: true,
  fields: [
    // Email added by default
    // Add more fields as needed
  ],
}
