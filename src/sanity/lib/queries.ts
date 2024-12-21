import { defineQuery } from "next-sanity";
import { client } from "./client";

export const POSTS_QUERY =
  defineQuery(`*[_type == "post" && defined(slug.current)][0...12]{
  _id, title, slug
}`);

export const POST_QUERY =
  defineQuery(`*[_type == "post" && slug.current == $slug][0]{
  title, body, mainImage
}`);

export const PAGE_QUERY=
defineQuery(`*[_type == "page_content" && language==$language && page_type->path.current == $path][0]{
  _id,
  title,
  _type,
  "pageType": page_type->title,
  language,
  "sections": sections[]->{
  _id,
    _type,
    title,
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
/* eslint-disable @typescript-eslint/no-explicit-any */
 
export const getPageData = async (params?: any) => {
  const { language, sub_page } = await params
  const path = sub_page ? `/${sub_page}` : '/'
  const query = `*[_type == "page_content" && language==$language && page_type->path.current == $path][0]{
  _id,
  title,
  _type,
  "pageType": page_type->title,
  language,
  "sections": sections[]->{
  _id,
    _type,
    title,
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
}`
  const res = await client.fetch(query, { language: language || 'en',path });
  return res;
}