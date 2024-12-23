import { type SchemaTypeDefinition } from 'sanity'

import {blockContentType} from './blockContentType'
import {categoryType} from './categoryType'
import {postType} from './postType'
import {authorType} from './authorType'
import homePageHero from "./homePageHero";
import page from "./page";
import page_content from "./page_content";
import servicesPageHero from "./servicesPageHero";
import franchiseType from './franchiseType'
import weedControlService from './weedControlService'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [page,page_content,homePageHero,servicesPageHero,blockContentType, categoryType, postType, authorType,franchiseType,weedControlService],
}
