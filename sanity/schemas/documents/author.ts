import { UserIcon } from '@sanity/icons';
import { defineField, defineType } from 'sanity';

export const getTemplate = () => {
  return [
    {
      id: 'author-badge',
      title: 'Author with badge',
      schemaType: 'author',
      parameters: [
        {
          name: 'badge',
          title: 'Badge',
          type: 'string',
        },
      ],
      value: (params: { badge: string }) => {
        console.log('parameters');
        console.dir(params.badge);
        return { badge: params.badge };
      },
    },
  ];
};

export const authorType = defineType({
  name: 'author',
  title: 'Author',
  icon: UserIcon,
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'picture',
      title: 'Picture',
      type: 'image',
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
          description: 'Important for SEO and accessibility.',
          validation: (rule) => {
            return rule.custom((alt, context) => {
              if ((context.document?.picture as any)?.asset?._ref && !alt) {
                return 'Required';
              }
              return true;
            });
          },
        },
      ],
      options: {
        hotspot: true,
        aiAssist: {
          imageDescriptionField: 'alt',
        },
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'badge',
      title: 'Badge',
      type: 'string',
    }),
  ],
});
