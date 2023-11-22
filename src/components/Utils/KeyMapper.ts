import _ from "lodash";

const formatKey = ( source:string, length: number = 20 ): string => {
    return _.camelCase( _.deburr( _.truncate( source, {
        length: length,
        omission: ""
    } ) ) );
}

export default formatKey;