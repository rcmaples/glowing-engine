import type { StructureResolver } from 'sanity/structure';

// https://www.sanity.io/docs/structure-builder-cheat-sheet

export const structure: StructureResolver = (S) =>
  S.list().title('Base').items(S.documentTypeListItems());

// export const structure: StructureResolver = (S) =>
//   S.list()
//     .title('Base')
//     .items([
//       S.listItem()
//         .title('Settings')
//         .child(S.editor().schemaType('settings').documentId('settings')),
//       S.divider(),
//       S.documentTypeListItem('post').title('All Posts'),
//       S.listItem({
//         id: 'author',
//         title: 'Authors',
//         schemaType: 'author',
//         child: () =>
//           S.documentTypeList('author')
//             .title('Authors')
//             .child((id) => S.document().schemaType('author').documentId(id)),
//       }),
// S.documentTypeListItem('author').title('Authors'),
// S.listItem()
//   .title('Add Author with Badge')
//   .child(
//     S.documentTypeList('author')
//       .title('Add Author with Badge')
//       .filter('_type == "author"')
//       .initialValueTemplates([
//         S.initialValueTemplateItem('author-badge', { badge: 'New' }),
//       ])
//   ),
// S.divider(),
// S.listItem()
//   .title('Posts by Author')
//   .child(
//     S.documentTypeList('author')
//       .title('Select an Author')
//       .initialValueTemplates([])
//       .child((authorId) => {
//         return S.documentList()
//           .title('Posts by Author')
//           .filter('_type == "post" && references($authorId)')
//           .params({ authorId });
//       })
//   ),
// ]);
