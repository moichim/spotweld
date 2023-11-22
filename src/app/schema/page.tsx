import useWindowSize from '@/components/Utils/useWindowSize';
import Diagram from '@/components/diagram/Diagram';
import DiagramFactory from '@/components/diagram/factory/diagramFactory';
import { Metadata, NextPage } from 'next';

import 'reactflow/dist/style.css';

export const metadata: Metadata = {
  title: 'Jak to funguje | LabIR Spotweld',
  description: 'Systém pro nedestruktivní testování bodových svarů',
}

const Page: NextPage = () => {


  return <Diagram fullPage={true}/>
}

export default Page;