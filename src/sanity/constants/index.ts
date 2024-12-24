 
export const SECTION_TYPES={
  HOME_PAGE_HERO:'homePageHero',
  SERVICES_PAGE_HERO:'servicesPageHero',
  WEED_CONTROL_SERVICE:'weedControlService',
  SERVICES_WHY_DO_I_NEED_THIS: 'servicesWhyDoINeedThis',
  SERVICES_GUARANTEE: 'servicesGuarantee'
}
export const sections = [
  { title: "Home Page Hero Section", value: SECTION_TYPES.HOME_PAGE_HERO},
  { title: "Services Page Hero Section", value: SECTION_TYPES.SERVICES_PAGE_HERO },
  {
    title:
      "Services Page Weed Control Service Section",
    value: SECTION_TYPES.WEED_CONTROL_SERVICE,
  },
  {
    title :'Services Page Why Do I Need This',
    value:SECTION_TYPES.SERVICES_WHY_DO_I_NEED_THIS
  },
  {
    title : 'Services Page Weedman Guarantee',
    value: SECTION_TYPES.SERVICES_GUARANTEE
  }
 ];
