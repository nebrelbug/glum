export default class NomNom {
    size: number;
    values: Array<Symbol>;
    nameMap: {
        [index: string]: string;
    };
    [index: string]: any;
    constructor(...enumNames: string[]);
    getName(sym: Symbol): string;
}
