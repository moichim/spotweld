import { Container } from "@/components/UI/Container"

export const Intro: React.FC = () => {
    return <Container className="flex flex-wrap items-center">

        <div className="py-10 lg:pt-20 lg:pr-8 text-center lg:text-left basis-full lg:basis-1/2 order-2 lg:order-1">

            <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold">Systém pro nedestruktivní <span className="text-primary-400">testování bodových svarů</span></h1>

            <p className="pt-14 text-2xl">Nová, spolehlivá a plně automatizovaná metoda kontroly kvality bodových svarů.</p>

        </div>

        <div className="relative basis-full h-full lg:basis-1/2 order-1 lg:order-2">
            <iframe className="w-full aspect-video" src="https://www.youtube.com/embed/U9dKEO5AaZI" title="LabIR SpotWELD" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>

    </Container>
}