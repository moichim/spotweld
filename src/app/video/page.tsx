import useWindowSize from '@/components/Utils/useWindowSize';
import Diagram from '@/components/diagram/Diagram';
import DiagramFactory from '@/components/diagram/factory/diagramFactory';
import { Metadata, NextPage } from 'next';
import Link from 'next/link';

import 'reactflow/dist/style.css';

export const metadata: Metadata = {
  title: 'Představení | LabIR Spotweld',
  description: 'Systém pro nedestruktivní testování bodových svarů',
}

const Page: NextPage = () => {

    return <main className="w-screen h-full relative bg-black">

        <div className="w-full h-screen flex items-center justify-center relative text-white">
            
            <div className="py-20 md:p-6 lg:p-10 lg:w-4/6 h-screen ">

                
            <iframe className=" object-contain w-full h-full aspect-video" src="https://www.youtube.com/embed/U9dKEO5AaZI?autoplay=1" title="LabIR SpotWELD" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>

            </div>
        </div>

        <div
            className="absolute top-0 right-0"
        >
            <Link href="/" className="p-5 bg-yellow-500 block ease-in-out duration-400 hover:bg-white">Zpět</Link>
        </div>

    </main>


  return <Diagram fullPage={true}/>
}

export default Page;