import { QueryParams } from 'next-sanity';

import Header from '@/components/Header';
import NotFound from '@/components/NotFound';
import PageContent from '@/components/PageContent';
import VisualEditWrapper from '@/components/VisualEditWrapper';
import { sanityFetch } from '@/sanity/lib/live';
import { PAGE_QUERY, PAGE_TITLE_QUERY } from '@/sanity/lib/queries';

 export async function generateMetadata({ params }:{params: Promise<QueryParams>}) {
    const { language, } = await params;
    const { data } = await sanityFetch({
        query: PAGE_TITLE_QUERY,
        params: {
            language: language || "en",
            sub_page: '/',
            franchise: 'ca'
        },
    });

    return {
        title: data.title,
    }
}


export default async function Home({
    params,
 }: {
    params: Promise<QueryParams>;
}) {
    const { language, } = await params;
     const { data } = await sanityFetch({
        query: PAGE_QUERY,
        params: {
            language: language || "en",
            sub_page: '/',
            franchise: 'ca'
        },
    });
    if(!data){
        return  <NotFound params={params}/>
    }
     return (
        <VisualEditWrapper id={data._id} type={data._type} path="page">

            <Header params={params}/>
            <PageContent {...data} key={data._id} />
        </VisualEditWrapper>
    );
}
