import { type SchemaTypeDefinition } from 'sanity'
import post from './post'
import blogTable from './blogTable'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [post, blogTable],
}
