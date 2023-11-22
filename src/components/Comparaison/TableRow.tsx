import React from "react";
import _ from "lodash";

import { ComparaisonProperty } from "./Comparaison";
import formatKey from "../Utils/KeyMapper";
import TableCell from "./TableCell";

/**
 * One row in the table corresponds to a comparaison property
 */
const TableRow = ( props: ComparaisonProperty ) => {

    let key = formatKey( props.name );

    return <tr key={ key }>

        <td className="border bg-white">
            <strong>{props.name}</strong>
            { ! _.isEmpty( props.description ) &&
                <div>{props.description}</div>
            }
        </td>

        { Object.entries( props.methods ).map( ([key, method]) => {

            method.slug = key;
            method.isHighlighted = key === "spot";

           return <TableCell key={`value_cell_${key}`} {...method} />

        } ) }

    </tr>

}

export default TableRow;