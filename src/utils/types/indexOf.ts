export type IndexOf<
    Data = any, 
    Index extends string | number | symbol = string
> = {
    [index in Index]: Data
}