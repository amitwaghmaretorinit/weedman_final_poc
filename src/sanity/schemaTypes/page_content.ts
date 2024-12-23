import { defineType, Rule } from "sanity";
import { sections } from "../constants";

export default defineType({
  name: "page_content",
  title: "Page Content",
  type: "document",
   fields: [
    {
      name: "title",
      title: "Page Header",
      type: "string",
      validation:(rule: Rule)=>rule.required()
    },

    {
      name: "page_type",
      type: "reference",
      to: [{ type: "page" }],
      validation:(rule: Rule)=>rule.required()

    },
    {
      name: "franchise_type",
      type: "reference",
      to: [{ type: "franchise" }],
       options: {
        disableNew: true, 
      },
       
      validation:(rule: Rule)=>rule.required()

    },
    {
      name: "sections",
      type: "array",
      of: [
        {
          type: "reference",
          to: [...sections.map((i) => ({ type: i.value }))],
        },
      ],
      validation:(rule: Rule)=>rule.required()
    },
    {
      name: "language",
      type: "string",
      readOnly: true,
    },
  ],
  
  preview: {
    select: {
      title: "title",
      language: "language",
      pageType: "page_type.title",
      franchise: "franchise_type.franchise_name",
    },
    prepare(select) {
      const { language, pageType, franchise } = select;
      return {
        title: pageType,
        subtitle: `${language.toUpperCase()} - ${franchise.toUpperCase()}`,
      };
    },
  },
});
