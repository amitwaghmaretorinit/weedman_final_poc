import { QueryParams } from "next-sanity";

import Header from "@/components/Header";
import PageContent from "@/components/PageContent";
import VisualEditWrapper from "@/components/VisualEditWrapper";
import { sanityFetch } from "@/sanity/lib/live";
import { PAGE_QUERY } from "@/sanity/lib/queries";

export default async function Home({
  params,
}: {
  params: Promise<QueryParams>;
}) {
  const { language } = await params;
 
  const { data } = await sanityFetch({
    query: PAGE_QUERY,
    params: {
      language: language || "en",
      sub_page:"/",
      franchise:'ca'
    },
  });
  return (
    <VisualEditWrapper id={data._id} type={data._type} path="page">
      <Header />
      <PageContent {...data} key={data._id} />
    </VisualEditWrapper>
  );
}
