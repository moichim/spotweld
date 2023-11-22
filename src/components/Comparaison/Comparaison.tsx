"use client";

import React, { useState } from "react";
import _ from "lodash";
import TableRow from "./TableRow";
import ListChecker from "./ListChecker";
import ListItem from "./ListItem";
import formatKey from "../Utils/KeyMapper";

export type AvailableMethods = "spot" | "irndt" | "usndt" | "mdt" | "dt";

export type ComparaisonProperties = {
    rows: {
        [index: string]: ComparaisonProperty
    },
    columns: {
        [index: string]: {
            name: string,
            description?: string,
            slug: string
        }
    }
};



/**
 * List of property Values
 */
export type PropertyValuesList = {
    spot: ComparaisonPropertyValue,
    irndt: ComparaisonPropertyValue,
    usndt: ComparaisonPropertyValue,
    mdt: ComparaisonPropertyValue,
    dt: ComparaisonPropertyValue
}

/**
 * A single property and its name and its rows value
 */
export type ComparaisonProperty = {
    name: string,
    description: string | React.ReactNode,
    falsy?: string,
    methods: PropertyValuesList
}

/** 
 * A single value that can be rendered as cell or row 
 */
export type ComparaisonPropertyValue = {
    true?: boolean,
    description?: string | React.ReactNode,
    slug?: string,
    isHighlighted?: boolean
}

export type ComparaisonMethodPropertyValue = {
    name: string,
    description: string | React.ReactNode,
    value: ComparaisonPropertyValue,
    falsy?: string
}

export type ComparaisonMethodOutputData = {
    name: string,
    description: string,
    values: ComparaisonMethodPropertyValue[],
    slug: string
}



const Comparaison = (props: ComparaisonProperties) => {

    const [ active, setActive ] = useState<string|undefined>( );

    /**
     * Get data of one single method retrieved by key
     */
    const getMethodData = (column: AvailableMethods): ComparaisonMethodOutputData => {

        const m = {
            name: props.columns[column].name,
            description: props.columns[column].description,
            values: [] as ComparaisonMethodPropertyValue[],
            slug: props.columns[ column ].slug
        } as ComparaisonMethodOutputData;

        Object.keys(props.rows).forEach(prop => {

            Object.keys(props.rows[prop].methods).forEach(method => {
                if (method === column) {
                    if (props.rows[prop].methods[method].true !== undefined) {

                        const property: ComparaisonMethodPropertyValue = {
                            name: props.rows[prop].name,
                            description: props.rows[prop].description,
                            value: props.rows[prop].methods[method],
                            falsy: props.rows[prop].falsy
                        };

                        m.values.push(property);

                    }
                }
            });

        });

        return m;

    }

    const getMethodListData = () => {

        return [
            "irndt",
            "usndt",
            "mdt",
            "dt"
        ].map((key: string) => getMethodData(key as AvailableMethods));

    }

    const renderMethodList = () => {

        return getMethodListData().map( d => {

            return renderListItem( d, true );
            
        });

    }

    const renderListItem = (d: ComparaisonMethodOutputData, collapsible: boolean = false) => {

        return <ListItem 
            {...d} 
            active={ d.slug === active } 
            collapsible={ collapsible } 
            clickHandler={ () => setActive( d.slug ) }
            key={ formatKey( d.name ) }
        />

    }

    const renderTable = () => {

        return Object.values(props.rows).map(property => {
            return <TableRow {...property} key={ formatKey( property.name ) }/>
        });

    }


    return <div >

        <div className="xl:hidden">

            { renderListItem( getMethodData( "spot" ), false ) }

            <h4 className="text-2xl font-bold text-gray-500 text-center pt-12 pb-16">Srovnání s konkurečními řešeními</h4>

            <div className="method-list">
                {renderMethodList()}
            </div>

        </div>

        <table className="table-fixed __table-compares hidden xl:table mx-auto">

            <thead>

                <tr>
                    <td></td>
                    <td colSpan={3} className="bg-white border text-center">Automatizované</td>
                    <td colSpan={2} className="bg-white border text-center">Manuální</td>
                </tr>

                <tr>
                    <td></td>
                    <th className="bg-white border">{props.columns.spot.name}</th>
                    <th className="bg-white border">{/*props.columns.irndt.name*/}Stávající <abbr title="Infračervené nedestruktivní testování">IR NDT</abbr> metody</th>
                    <th className="bg-white border">{props.columns.usndt.name}</th>
                    <th className="bg-white border">{props.columns.mdt.name}</th>
                    <th className="bg-white border">{props.columns.dt.name}</th>
                </tr>

                <tr>
                    <td className="border bg-white"><strong>Princip</strong></td>
                    <td className="bg-success-100 border text-center">Laser + pomalá termokamera</td>
                    <td className="bg-white border text-center">Záblesk + rychlá termokamera</td>
                    <td className="bg-white border text-center">Robotizovaná ultrazvuková sonda</td>
                    <td className="bg-white border text-center">Manuální ultrazvuková sonda</td>
                    <td className="bg-white border text-center">Sekáčová zkouška, výbrus, tahová zkouška</td>
                </tr>

            </thead>

            <tbody>

                {renderTable()}

            </tbody>


        </table>

    </div>

}

export default Comparaison;


