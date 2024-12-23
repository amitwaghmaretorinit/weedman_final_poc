import { FiAward } from "react-icons/fi";
import { StructureResolver } from "sanity/structure";
import { sections } from "../constants";

export const structure: StructureResolver = (S) => {
  return S.list()
    .title("Content")
    .items([
      S.listItem()
        .title("Pages")
        .icon(FiAward)
        .child(
          S.documentList()
            .title("Pages")
            .id("page_id")
            .schemaType("page")
            .filter('_type == "page"')
        ),
      S.divider(),
      S.listItem()
        .title("Franchises")
        .icon(FiAward)
        .child(
          S.documentList()
            .title("Franchises")
            .id("franchise_id")
            .schemaType("franchise")
            .filter('_type=="franchise"')
        ),
      S.divider(),
      S.listItem()
        .title("Page Content")
        .icon(FiAward)
        .child(
          S.documentList()
            .title("Franchises")
            .id("franchise_id")
            .schemaType("franchise")
            .filter('_type == "franchise"')
            .child((franchiseId) =>
              S.documentList()
                .title("Page Content")
                .id("page_content_id")
                .schemaType("page_content")
                .filter(
                  '_type == "page_content" && $franchiseId == franchise_type._ref'
                )
                .params({ franchiseId })
                // .initialValueTemplates([
                //   S.initialValueTemplateItem("page_content-template", {
                //     franchiseId,
                //   }),
                // ])
                
            )
        ),
      S.divider(),
      S.listItem()
        .title("Sections")
        .child(
          S.list()
            .title("Section Types")
            .items(
              sections.map((i) =>
                S.documentTypeListItem(i.value).title(i.title)
              )
            )
        ),
    ]);
};
