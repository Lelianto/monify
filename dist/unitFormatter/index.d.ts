export interface UnitFormatOptions {
    locale?: string;
    thousandSeparator?: string;
    unitDisplay?: Intl.NumberFormatOptions["unitDisplay"];
    decimalDigits?: number;
}
export declare function formatUnit(value: number, unit: string, options?: UnitFormatOptions): string;
export declare function formatUnit(value: number, unit: string, locale?: string, thousandSeparator?: string): string;
//# sourceMappingURL=index.d.ts.map