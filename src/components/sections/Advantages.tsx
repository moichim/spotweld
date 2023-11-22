import { ArrowPathIcon, BarsArrowUpIcon, BanknotesIcon } from "@heroicons/react/24/outline";
import React from "react";
import IconItem from "../GridItems/IconItem";
import { Container } from "../UI/Container";

export const Advantages: React.FC = () => {
    return <div className="bg-primary-50 __clipper pt-36 pb-24" id="advantages">

    <Container>

      <div className="pb-6 text-center text-3xl md:text-5xl font-black">
        <h2>Výhody metody LabIR SpotWELD</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-4 gap-8 pt-8 py-14">

        <IconItem
          label="Automatizace pomocí strojového učení"
          description="Funguje automatizovaně s malým množstvím falešných indikací."
          scope="primary"
          icon={<ArrowPathIcon className="w-20 mx-auto" />}
        />

        <IconItem
          label="Odstraněny nedostatky konkurenčních metod"
          description="Měřicí systém obstál v laboratorních testech i na skutečných dílech."
          scope="primary"
          icon={<BarsArrowUpIcon className="w-20 mx-auto" />}
        />

        <IconItem
          label="Šetří Vaše náklady"
          description="Spočítejte si, kolik ušetříte díky spolehlivému, rychlému a bezobslužnému systému automatické kontroly kvality."
          scope="primary"
          icon={<BanknotesIcon className="w-20 mx-auto" />}
        />

      </div>

    </Container>

  </div>
}