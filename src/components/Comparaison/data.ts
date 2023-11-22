export const compares = {

    columns: {
      spot: {
        name: "LabIR SpotWELD",
        description: "Nová metoda založená na laserovém zahřívání a infračerveném skenování.",
        slug: "spot"
      },
      irndt: {
        name: "Stávající IR NDT metody",
        description: "Nejrozšířenější metody využívají vysoceenergetický výboj a rychlou IR kameru.",
        slug: "irndt"
      },
      usndt: {
        name: "Ultrazvukové automatizované testování",
        description: "Nedestruktivní testovací metoda založená na kontaktním měření pomocí ultrazvuku.",
        slug: "usndt"
      },
      mdt: {
        name: "Ultrazvukové manuální testování",
        description: "Manuální testování s využitím ruční ultrazvukové sondy.",
        slug: "mdt"
      },
      dt: {
        name: "Destruktivní manuální testování",
        description: "Nejrozšířenější metoda testování - například sekáčová zkouška, výbrus, tahová zkouška.",
        slug: "dt"
      }
    },
  
    rows: {
  
      nedestruct: {
        name: "Nedestruktivní",
        falsy: "Destruktivní",
        description: "Testování nezničí výrobek ani nikterak neovlivní jeho vlastnosti.",
        methods: {
          spot: { true: true },
          irndt: { true: true },
          usndt: { true: true },
          mdt: { true: true },
          dt: { true: false, description: "Jeden výrobek je rozřezán a testován." }
        }
      },
  
      contact: {
        name: "Bezkontaktní",
        falsy: "Kontaktní",
        description: "Měřicí systém se nemusí dotýkat plechu a díky tomu je měření rychlejší.",
        methods: {
          spot: { true: true },
          irndt: { true: true },
          usndt: { true: false },
          mdt: { true: false },
          dt: { true: false }
        }
      },
  
      fast: {
        name: "Bezobslužné testování všech výrobků",
        falsy: "Pomalé manuální testování vybraných výrobků",
        description: "Rychlé automatické testování v taktu výrobní linky.",
        methods: {
          spot: { true: true },
          irndt: { true: true },
          usndt: { true: true },
          mdt: { true: false },
          dt: { true: false }
        }
      },
  
      material: {
        name: "Bez spotřebního materiálu",
        falsy: "Vyžaduje spotřební materiál",
        description: "Provedení testu nevyžaduje žádný materiál (emulze, vodu, membrány) apod.",
        methods: {
          spot: { true: true },
          irndt: { true: true },
          usndt: { true: false, description: "Test vyžaduje např. emulze či vodu či náhradní membrány." },
          mdt: { true: false, description: "Test vyžaduje např. emulze či vodu či náhradní membrány." },
          dt: { true: false, description: "Test vyžaduje ruční nástroje, které se opotřebovávají." }
        }
      },
  
      side: {
        name: "Stačí přístup pouze z jedné strany plechu",
        falsy: "Vyžaduje přístup z obou stran plechu",
        description: "Měřicí systém je umístěn pouze z jedné strany svaru.",
        methods: {
          spot: { true: true },
          irndt: { true: false, description: "Klasické metody IR NDT pro testování svarů převážně vyžadují umístění měřicích zařízení na obou stranách svařeného plechu." },
          usndt: { true: true },
          mdt: { true: true },
          dt: { true: false }
        }
      },
  
      optics: {
        name: "Není ovlivněno optickými vlastnostmi svaru",
        falsy: "Optické vlastnosti svaru jsou překážkou při měření",
        description: "Test si poradí se znečištěním svaru i s lokálními změnami emisivity.",
        methods: {
          spot: { true: true, description: "Testování je přímo zaloeno na analýze optických vlastností jako je emisivita, pohltivost a další." },
          irndt: { true: false, description: "Optické vlastnosti materiálu v místě svaru představují překážku a důvod nepřesností měření." },
          usndt: {},
          mdt: {},
          dt: {}
        }
      }
  
  
  
    },
  
}