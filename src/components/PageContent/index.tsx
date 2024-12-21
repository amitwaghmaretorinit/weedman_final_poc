/* eslint-disable @typescript-eslint/no-explicit-any */

import Sections from '@/components/Sections';

export default function PageContent(props: any) {
  const { sections, _id, _type } = props;
  return (
    <Sections sections={sections} _id={_id} _type={_type} />
  )
}

