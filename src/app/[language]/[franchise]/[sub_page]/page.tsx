import { QueryParams } from 'next-sanity';

import Header from '@/components/Header';
import NotFound from '@/components/NotFound';
import PageContent from '@/components/PageContent';
import VisualEditWrapper from '@/components/VisualEditWrapper';
import { sanityFetch } from '@/sanity/lib/live';
import { PAGE_QUERY, PAGE_TITLE_QUERY } from '@/sanity/lib/queries';
import Footer from '@/components/Footer';

export const revalidate = 10; // Revalidate this page every 10 seconds

export async function generateMetadata({
  params,
}: {
  params: Promise<QueryParams>;
}) {
  const { language, sub_page, franchise } = await params;
  const { data } = await sanityFetch({
    query: PAGE_TITLE_QUERY,
    params: {
      language: language || "en",
      sub_page: sub_page || "/",
      franchise,
    },
  });

  return {
    title: data?.title || "Not Found",
    description: data?.description || "This page could not be found or does not have a description available.",
    
  };
}

export default async function Home({
  params,
}: {
  params: Promise<QueryParams>;
}) {
  const { language, sub_page, franchise } = await params;
  console.log('first')
  const { data } = await sanityFetch({
    query: PAGE_QUERY,
    params: {
      language: language || "en",
      sub_page: sub_page || "/",
      franchise,
    },
  });
  if (!data) {
    return <NotFound params={params} />
  }
  return (
    <VisualEditWrapper id={data._id} type={data._type} path="page">
      <Header params={params} />
      <PageContent {...data} key={data._id} />
      <Footer/>
    </VisualEditWrapper>
  );
}
