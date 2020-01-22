interface NameMap {
    [index: string]: string;
}
export default class Glum {
    size: number;
    values: Array<Symbol>;
    nameMap: NameMap;
    constructor(...enumNames: Array<string | Function>);
    getName(sym: Symbol): string;
    has(key: Symbol): boolean;
    [index: string]: any;
}
export {};
