import React from "react";
import { ComparaisonMethodPropertyValue } from "./Comparaison";

import CheckerItem from "../GridItems/CheckerItem";

const ListChecker = (props: ComparaisonMethodPropertyValue) => {

    let name = props.value.true === false
        ? props.falsy
        : props.name;

    return <CheckerItem label={name!} description={props.value.description??""} true={props.value.true} className="pb-4"/>;

}

export default ListChecker;