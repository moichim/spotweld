import React, { MouseEventHandler } from "react";
import formatKey from "../Utils/KeyMapper";
import { ComparaisonMethodOutputData } from "./Comparaison";
import ListChecker from "./ListChecker";

interface ListItemProperties extends ComparaisonMethodOutputData {
    collapsible: boolean,
    active: boolean,
    clickHandler?: MouseEventHandler
}

const ListItem = ( props: ListItemProperties ) => {

    let classes = [
        "item",
        "border",
        "rounded-lg",
        "mb-3",
        "bg-white"
    ];

    let headline_classes: string[] = [
        "px-4",
        "py-6"
    ];

    let collapsible_classes: string[] = [
        "overflow-hidden"
    ];

    if ( props.collapsible ) {
        headline_classes.push( "hover:bg-primary-100 cursor-pointer" );
        if (props.active) {
            headline_classes.push( "border-b" );
        }
    } else {
        headline_classes.push( "border-b" );
    }

    let show_items = props.collapsible === true
        ? props.active
        : true;

    return <div key={ formatKey( props.name ) + "__zloba" } className={ classes.join(" ") }>
            <div 
                className={ headline_classes.join( " " ) } 
                onClick={ props.clickHandler }
            >
                <h4 className="font-bold text-2xl text-center lg:text-left">{props.name}</h4>
            </div>
            { show_items && <div className={ collapsible_classes.join(" ") }>
                <div className="p-4">
                    { props.description !== undefined && <p className="text-lg pb-4">{props.description}</p> }

                    {props.values.map(value => {
                        return <ListChecker key={formatKey( value.name ) + value.description } {...value} />;
                    })}
                </div>
            </div>
            }
        </div>

}

export default ListItem;