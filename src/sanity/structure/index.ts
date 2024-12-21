/* eslint-disable react-hooks/rules-of-hooks */
import { FiAward } from 'react-icons/fi';
// import { useCurrentUser } from "sanity";
import { StructureResolver } from "sanity/structure";
import { sections } from '../constants';

export const structure: StructureResolver = (S) => {
    // const currentUser = useCurrentUser();
    return S.list().title('Content').items([
        S.listItem()
            .title('Pages')
            .icon(FiAward)
            .child(
                S.documentList()
                    .title('Pages')
                    .id('page_id')
                    .schemaType('page')
                    .filter('_type == "page"')
                    // .params({ userId: currentUser?.id })

            ),

        S.divider(),
        S.listItem()
            .title('Page Content')
            .icon(FiAward)
            .child(
                S.documentList()
                    .title('Page Content')
                    .id('page_content_id')
                    .schemaType('page_content')
                    .filter('_type == "page_content"')

            ),
        S.divider(),
        S.listItem()
            .title('Sections')
            .child(
                S.list()
                    .title('Section Types')
                    .items(
                        sections.map(i => S.documentTypeListItem(i.value).title(i.title),
                        )
                    )
            )


    ])
}
