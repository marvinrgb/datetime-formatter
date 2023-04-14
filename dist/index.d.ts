declare module '@marvinrgb/datetime-formatter';
declare class DateTime extends Date {
    constructor(x: any);
    private lZ;
    private allowedSymbols;
    format(format: string): string;
}