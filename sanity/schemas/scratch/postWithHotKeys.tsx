import React, { useMemo } from 'react';

import { WrenchIcon, HighlightIcon, StrikethroughIcon } from '@sanity/icons';

// import { format, parseISO } from 'date-fns';
import {
  defineField,
  defineType,
  PortableTextInput,
  PortableTextInputProps,
} from 'sanity';

import { PortableTextEditor } from '@portabletext/editor';

// import { authorType } from '../documents/author';

// @ts-ignore
const HighlightDecorator = (props) => {
  return (
    <span style={{ backgroundColor: 'yellow', color: 'black' }}>
      {props.children}
    </span>
  );
};

const customPTEInput = (props: PortableTextInputProps) => {
  const { path, onItemOpen, onPathFocus } = props;

  const hotKeys: PortableTextInputProps['hotkeys'] = useMemo(
    () => ({
      marks: {
        // 'Ctrl+Shift+s': 'strike-through',
        'Ctrl+Shift+h': 'highlight',
      },
      custom: {
        'Ctrl+l': (event, portableTextEditor) => {
          event.preventDefault();

          const selection = window.getSelection();
          console.log(selection);

          // should apply only for Range selections
          if (selection?.type == 'Caret') {
            return;
          }

          const linkType = portableTextEditor.schemaTypes.annotations.find(
            (a) => a.name === 'link'
          );

          if (linkType) {
            const activeAnnotations =
              PortableTextEditor.activeAnnotations(portableTextEditor);
            const isLinkActive = activeAnnotations.some(
              (a) => a._type === 'link'
            );

            if (isLinkActive) {
              PortableTextEditor.removeAnnotation(portableTextEditor, linkType);
            } else {
              const result = PortableTextEditor.addAnnotation(
                portableTextEditor,
                linkType
              );

              if (result?.markDefPaths) {
                onItemOpen(path.concat(result.markDefPath));
                setTimeout(() => {
                  onPathFocus(result.markDefPath.concat('href'));
                });
              }
            }
          }
        },
      },
    }),
    [onPathFocus, onItemOpen, path]
  );

  return <PortableTextInput {...props} hotkeys={hotKeys} />;
};

export const postWithHotKeys = defineType({
  name: 'custom_post',
  title: 'Custom Post',
  icon: WrenchIcon,
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: 'A slug is required for the post to show up in the preview',
      options: {
        source: 'title',
        maxLength: 96,
        isUnique: (value, context) => context.defaultIsUnique(value, context),
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [
        {
          type: 'block',
          marks: {
            decorators: [
              { title: 'Strong', value: 'strong' },
              { title: 'Emphasis', value: 'em' },
              { title: 'Code', value: 'code' },
              {
                title: 'Highlight',
                value: 'highlight',
                icon: HighlightIcon,
                component: HighlightDecorator,
              },
              {
                title: 'Strike-through',
                value: 'strike-through',
                icon: StrikethroughIcon,
              },
            ],
          },
        },
      ],
      components: {
        //@ts-ignore
        input: customPTEInput,
      },
    }),
  ],
});
