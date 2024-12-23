import { defineQuery } from "next-sanity";

export const POSTS_QUERY =
  defineQuery(`*[_type == "post" && defined(slug.current)][0...12]{
  _id, title, slug
}`);

export const POST_QUERY =
  defineQuery(`*[_type == "post" && slug.current == $slug][0]{
  title, body, mainImage
}`);

export const PAGE_QUERY =
  defineQuery(`*[_type == "page_content" && language==$language && page_type->path.current == $sub_page && franchise_type->path.current == $franchise][0]{
  _id,
  title,
  _type,
   "pageType": page_type->title,
  language,
  "sections": sections[]->{
    _id,
    _type,
    video,
    description,
    title,
     sections,
    subtitle,
    backgroundImage{
      asset->{
        _id,
        url
      }
    },
    ctaButtons[]{
      label,
      url,
      isPrimary
    },
    alignment,
    language
  }
}`)

export const PAGE_TITLE_QUERY =
  defineQuery(`*[_type == "page_content" && language==$language && page_type->path.current == $sub_page && franchise_type->path.current == $franchise][0]{
  title,
}`)
