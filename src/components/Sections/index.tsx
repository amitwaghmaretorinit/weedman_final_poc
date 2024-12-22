/* eslint-disable @typescript-eslint/no-explicit-any */

import HomePageHeroSection from "@/components/HomePageHeroSection";

export default function Sections(props: any) {
    const { sections } = props;
    return sections.map((i: any) => {
        if (i?._type === "homePageHero" || i?._type === "servicesPageHero")
            return <HomePageHeroSection {...i} key={i.id} />
        
    })
}

