import {type SchemaTypeDefinition} from 'sanity'
import {settings} from './singletons/settings'
import {postType} from './documents/post'
import {authorType} from './documents/author'

export const schemaTypes: SchemaTypeDefinition[] = [
  // Singletons
  settings,
  // Documents
  postType,
  authorType,
]
