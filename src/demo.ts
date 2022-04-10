import console from "console";

export function throwLiteral() {
    // eslint-disable-next-line @typescript-eslint/no-throw-literal
    throw "literal";
}

// eslint-disable-next-line @getify/proper-arrows/where
export const topLevelFatArrowFunction = (arg0: string) => {
    console.log(arg0);
};
