
import React from "react";
import { Container } from "../UI/Container";
import CheckerItem from "../GridItems/CheckerItem";
import LogoItem from "../GridItems/LogoItem";

import ntc from "@/images/ntc.svg";
import chropyne from "@/images/chropynska.svg";

export const Logos: React.FC = props => {
    return <Container className="flex flex-wrap items-center" >

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-4 py-14">
      <CheckerItem
        label='Patentované řešení'
        key="checker-1"
        description="Nový fyzikální princip měření odstraňuje nedostatky konkurenčních měřicích metod."
        true={true}
      />
      <CheckerItem
        label='Rychlé, automatizované a spolehlivé měření'
        key="checker-2"
        description="Měřicí systém řeší problémy stávajících metod."
        true={true}
      />
      <CheckerItem
        label='Připraveno k nasazení i u vás'
        key="checker-3"
        description="Hledáme zákazníky i zájemce o implementaci našeho patentu do vlastních produktů."
        true={true}
      />
    </div>

    <div className="lg:max-w-3xl mx-auto grid grid-cols-2 gap-3 pb-10">

      <LogoItem
        image={ntc}
        institution="NTC UWB in Pulsen"
        description="Vyvinuto specialisty z NTC UWB v Plzni"
        url="https://ntc.zcu.cz"
      />

      <LogoItem
        image={chropyne}
        institution="Chropyně strojírenská"
        description="Výrobce pro segment automotive"
        url="https://chropynska.cz"
      />

    </div>

  </Container>
}