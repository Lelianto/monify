export declare class CurrencyFormatter {
    private locale;
    private currency;
    private decimalPlaces;
    constructor(locale?: string, currency?: string, decimalPlaces?: number);
    format(amount: number): string;
}
