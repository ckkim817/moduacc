import { type SchemaTypeDefinition } from 'sanity'
import post from './post'
import blogTable from './blogTable'
import divider from './divider'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [post, blogTable, divider],
}
