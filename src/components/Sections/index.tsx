/* eslint-disable @typescript-eslint/no-explicit-any */

import HomePageHeroSection from "@/components/HomePageHeroSection";
import WeedControlServiceSection from "@/components/WeedControlServiceSection";
import ServicesWhyDoINeedThisSection from "@/components/ServicesWhyDoINeedThisSection";
import ServicesGuaranteeSection from "@/components/ServicesGuaranteeSection";

import { SECTION_TYPES } from "@/sanity/constants";

export default function Sections(props: any) {
    const { sections } = props;
      return sections.map((i: any) => {
        if (i?._type === SECTION_TYPES.HOME_PAGE_HERO || i?._type === SECTION_TYPES.SERVICES_PAGE_HERO)
            return <HomePageHeroSection {...i} key={i.id} />
        if(i?._type === SECTION_TYPES.WEED_CONTROL_SERVICE)
            return <WeedControlServiceSection {...i} key={i.id} />
        if(i?._type === SECTION_TYPES.SERVICES_WHY_DO_I_NEED_THIS)
            return <ServicesWhyDoINeedThisSection {...i} key={i.id}/>
        if(i?._type === SECTION_TYPES.SERVICES_GUARANTEE)
            return <ServicesGuaranteeSection {...i} key={i.id}/>
                
    })
}

