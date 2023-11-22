import Comparaison from '@/components/Comparaison/Comparaison';
import { compares } from '@/components/Comparaison/data';
import OfferItem from '@/components/GridItems/OfferItem';
import PersonItem from '@/components/GridItems/PersonItem';
import Navigation from '@/components/Navigation/Navigation';
import { Container } from '@/components/UI/Container';
import { container_classes } from '@/components/Utils/Container';
import Diagram from '@/components/diagram/Diagram';
import { Advantages } from '@/components/sections/Advantages';
import { Intro } from '@/components/sections/Intro';
import { Logos } from '@/components/sections/Logos';
import Image from 'next/image';
import { BsEnvelopeFill, BsTelephoneFill } from 'react-icons/bs';

export default function Home() {

  return (

    <div className="font-arimo">

      <Navigation />

      <Intro />

      <Logos />

      <Advantages />

      <div className="bg-diagram-900 text-white __cropper__top __cropper__bottom overflow-hidden" id="how" style={{
        backgroundSize: "40px 40px",
        backgroundImage: "linear-gradient(to right, #9d174d 1px, transparent 1px),linear-gradient(to bottom, #9d174d 1px, transparent 1px)"
      }}>

        <Container>

          <div className="pb-12 pt-24 text-center text-3xl md:text-5xl font-black">
            <h2>Jak to funguje</h2>
          </div>

          <div className="text-center mb-16">
            Technika dokáže rozlišit OK a NOK svary na základě individuálních kritérií zákazníka. Princip spočívá v laserové excitaci okolí svaru a záznamu zahřívání a ochlazování materiálu infračervenou kamerou. Okolí svaru totiž není ovlivněno předchozím svařováním. V této oblasti lze proto očekávat i termooptické vlastnosti. Tím se zabrání nerovnoměrnému ohřevu, který může zakrýt malé rozdíly mezi tepelným chováním ok a nok svaru. Laserový ohřev lze individuálně přizpůsobit pro jednotlivé typy svarů (materiály, rozměry plechů atd.) a splnit tak požadavky na kontrolu z hlediska času a nákladů.
          </div>

        </Container>

        <Diagram fullPage={false} url="/schema" />


      </div>

      <div className="__clipper pt-24 pb-24 lg:pb-56 z-40 relative bg-gray-200" id="comparaison">

        <div className={container_classes.join(" ")}>

          <div className="pb-14 text-center text-3xl md:text-5xl font-black">
            <h2>Srovnání s konkurenčními metodami</h2>
          </div>

          <Comparaison {...compares} />

        </div>

      </div>

      <div className="py-10">

        <div className={container_classes.join(" ")}>

          <div className="pb-6 text-center text-3xl md:text-5xl font-black">
            <h2>Naše nabídka</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pb-8">
            <OfferItem
              title='Jsem výrobce'
              subtitle="a chci začlenit SpotWeld testování do mé linky"
              key="checker-1"
              what="Přinášíme hotové řešení pro Vaši výrobní linku."
            >
              <p>Pojďme společně vypočítat přínosy pro Vaši firmu. Vyčíslíme všechny přínosy technologie bezkontaktního nedestruktivního testování pro Vaše kvalifikované rozhodnutí.</p>
            </OfferItem>

            <OfferItem
              title='Dodávám svařovací systémy'
              subtitle="a chci do svých produktů přidat automatizovanou kontrolu kvality"
              key="checker-2"
              what="Poskytujeme licenci na technologii SpotWeld a podporu při její implementaci do Vašich svařovacích systémů."
            >
              <p>Projděme technické detaily a zjitěme přidanou hodnotu pro uživatele Vašich produktů.</p>
            </OfferItem>

            <OfferItem
              title='Jsem výzkumník'
              subtitle="a chtěl bych spolupracovat na dalším rozvoji techniky nedestruktivního testování. "
              key="checker-3"
              what="Jsme otevřeni spolupráci."
            >
              <p>Zveme Vás k diskuzi nad technickými detaily automatické bezkontaktní kontroly. </p>
            </OfferItem>

          </div>

        </div>

      </div>

      <div id="contact" className="pb-24 __cropper__top__only bg-black text-white">

        <div className="py-24 __cropper__bottom__only bg-primary-800">

          <div className={container_classes.join(" ")}>

            <div className="pb-6 text-center text-3xl md:text-5xl font-black">
              <h2>Kontaktujte nás</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 max-w-5xl lg:max-w-3xl mx-auto gap-8 pt-8 py-14">

              <PersonItem
                name="Prof. Ing. Milan Honner, PhD."
                key="Prof. Ing. Milan Honner, PhD."
                position="Head of development"
                portrait={<Image
                  src="/images/honner.jpg"
                  fill
                  className="h-40 lg:h-60 w-full"
                  alt="Milan Honner"
                />}
                links={[
                  {
                    name: "Email",
                    href: "mailto:honner@ntc.zcu.cz",
                    icon: <BsEnvelopeFill />
                  },
                  {
                    name: "Telefon",
                    href: "tel:605520777",
                    icon: <BsTelephoneFill />
                  }
                ]}
              />

              <PersonItem
                name="Ing. Lukáš Muzika"
                position="Specialista"
                key="Muzika"
                portrait={<Image
                  src="/images/muzika.jpg"
                  fill
                  className="h-40 lg:h-60 w-full"
                  alt="Lukáš Muzika"
                />}
                links={[
                  {
                    name: "Email",
                    href: "mailto:muzika@ntc.zcu.cz",
                    icon: <BsEnvelopeFill />
                  },
                  {
                    name: "Telefon",
                    href: "tel:605520777",
                    icon: <BsTelephoneFill />
                  }
                ]}
              />

            </div>

          </div>

        </div>

        <div className={container_classes.join(" ")}>

          <div className="pt-12 pb-12 text-center text-3xl md:text-5xl font-black">
            <h2>Kdo jsme</h2>
          </div>

          <div className="text-white mx-auto px-4 pt-8 grid grid-cols-1 lg:grid-cols-2 gap-8">


            <div className="">

              <div className="pb-8">
                <h4 className="text-lg pb-6 font-bold">
                  Výzkumný tým Infračervené technologie
                  <br />
                  <a className="text-primary-300 hover:text-primary-400" href="https://irt.zcu.cz" target="_blank">NTC ZČU v Plzni</a>
                </h4>
                <p className="text-gray-200">Jsme součástí vysokoškolského ústavu NTC na Západočeské univerzitě v Plzni. Naší odborností je využití infračerveného záření a tepelných procesů v technických i netechnických aplikacích. Naše laboratoře využíváme pro praktické ověření nových řešení i pro vývoj unikátních řešení pro naše partnery a zákazníky.</p>
              </div>

              <div className="pb-8">
                <h4 className="text-lg pb-6 font-bold">
                  LabIR
                </h4>
                <p className="text-gray-200">Jsme specialisté na termovizní měření teplot. Větší počet používaných termokamer různých druhů i výrobců s nekompatibilním softwarem omezených funkcí nás přivedl k vývoji vlastního <a href="https://software.labir.cz/" target="_blank" className="text-primary-300 hover:text-primary-400">softwaru LabIR®</a> pro termovize. Plynule jsme navázali vývojem <a href="https://paints.labir.cz/" target="_blank" className="text-primary-300 hover:text-primary-400">speciálních barev LabIR® Paints</a> pro termovize a pro zpřesnění výsledků měření termokamerami. Díky špičkovému technickému vybavení, vlastnímu vývoji produktů a týmu specialistů v oblasti infračerveného záření, tak můžeme nabídnout i <a href="https://irt.zcu.cz/cs/vyzkum/" target="_blank" className="text-primary-300 hover:text-primary-400">služby pokročilých termografických měřicích metod</a>.</p>
              </div>

            </div>

            <div>
              <Image
                src="/images/building.jpg"
                alt="Budova"
                width={1200}
                height={1000}
                className="rounded-lg"
              />
            </div>

          </div>

        </div>

      </div>

    </div>




  )
}
