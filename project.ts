import { defineField, defineType } from 'sanity';

export const projectType = defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Complete House', value: 'Complete House' },
          { title: 'Interior', value: 'Interior' },
          { title: 'Exterior', value: 'Exterior' },
          { title: 'Basic Naksha', value: 'Basic Naksha' },
          { title: '3D Naksha', value: '3D Naksha' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'mainImage',
      title: 'Main Cover Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'gallery',
      title: 'Image Gallery',
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true } }],
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'completionDate',
      title: 'Completion Date',
      type: 'date',
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'string',
    }),
    defineField({
      name: 'area',
      title: 'Built-up Area',
      type: 'string',
      description: 'e.g., 4,500 Sq. Ft.',
    }),
    defineField({
      name: 'client',
      title: 'Client Name',
      type: 'string',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      category: 'category',
      media: 'mainImage',
    },
    prepare(selection) {
      const { title, category, media } = selection;
      return {
        title,
        subtitle: category,
        media,
      };
    },
  },
});
