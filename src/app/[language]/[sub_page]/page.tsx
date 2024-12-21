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
  const { language, sub_page } = await params;
  const path = sub_page ? `/${sub_page}` : "/";

  const { data } = await sanityFetch({
    query: PAGE_QUERY,
    params: {
      language: language || "en",
      path,
    },
  });
  return (
    <VisualEditWrapper id={data._id} type={data._type} path="page">
      <Header />
      <PageContent {...data} key={data._id} />
    </VisualEditWrapper>
  );
}
