import HomePageSection from '@/components/HomePageSection'
import { config } from '@/constants'
import { sanityFetch } from '@/sanity/lib/live'
import { PAGE_QUERY } from '@/sanity/lib/queries'
import { createDataAttribute, QueryParams } from 'next-sanity'

export default async function Home({
  params
}: {
  params: Promise<QueryParams>
}) {
  const { language, sub_page } = await params
  const path = sub_page ? `/${sub_page}` : '/'

  const { data } = await sanityFetch({
    query: PAGE_QUERY,
    params: {
      language: language || 'en',
      path
    }
  })
  return <div
    data-sanity={createDataAttribute({
      ...config,
      id: data._id,
      type: data._type,
      path: 'page',
    }).toString()}
  >  
  <HomePageSection {...data} />
  </div>
}
