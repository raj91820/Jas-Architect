import { defineField, defineType } from 'sanity';

export const serviceType = defineType({
  name: 'service',
  title: 'Service',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'icon',
      title: 'Icon or Representative Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Used to sort the services displayed on the frontend.',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      order: 'order',
      media: 'icon',
    },
    prepare(selection) {
      const { title, order, media } = selection;
      return {
        title,
        subtitle: order !== undefined ? `Order: ${order}` : 'No order set',
        media,
      };
    },
  },
});
