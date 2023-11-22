import { Container } from "@/components/UI/Container"
import Image from "next/image"
import Link from "next/link"

import img from "@/images/video.png";

export const Intro: React.FC = () => {
    return <div className="flex flex-wrap items-stretch pt-20 md:pt-[5.5rem] bg-diagram-900 text-diagram-300 __cropper__bottom" style={{
        backgroundSize: "40px 40px",
        backgroundImage: "linear-gradient(to right, #9d174d 1px, transparent 1px),linear-gradient(to bottom, #9d174d 1px, transparent 1px)"
      }}>

        <div className="py-24 lg:py-40 lg:pt-20 lg:pr-8 text-center lg:text-left basis-full lg:basis-1/2 order-2 lg:order-1 md:pl-6 lg:pl-10 xl:pl-20 grid justify-items-end ">

            <div className="xl:max-w-[43rem]">

                <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold">Systém pro nedestruktivní <span className="text-white">testování bodových svarů</span></h1>

                <p className="pt-14 text-2xl">Nová, spolehlivá a plně automatizovaná metoda kontroly kvality bodových svarů.</p>

            </div>

        </div>

        <div className="relative basis-full min-h-[50vh] lg:basis-1/2 order-1 lg:order-2">

            <Link href="/video" className="block group h-full w-full relative">

                <Image
                    src={img}
                    alt="Úvodní prezentace"
                    objectFit="cover"
                    fill
                    className="min-h-[50vh]"
                />

                <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-opacity-30 group-hover:bg-opacity-0 bg-primary-700 ease-in-out duration-400 transition-all">

                    <div className="bg-primary-700 text-diagram-200 rounded-full w-40 p-3 aspect-square group-hover:bg-primary-500 group-hover:scale-110 group-hover:text-white ease-in-out duration-400 transition-all">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-25 h-25">
                            <path fillRule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clipRule="evenodd" />
                        </svg>

                    </div>

                </div>

            </Link>

        </div>

    </div>
}