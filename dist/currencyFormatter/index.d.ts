export interface CurrencyFormatOptions {
    /** ISO 4217 currency code. Defaults to USD. */
    currency?: string;
    /** BCP 47 locale. Inferred from the currency when omitted. */
    locale?: string;
    /** Use Intl compact notation (for example, "$1.2M"). */
    compact?: boolean;
    /** Number of fraction digits to display. */
    decimalDigits?: number;
    /** Remove whitespace between the currency symbol and value. */
    useSpacing?: boolean;
    /** Customize the currency display. */
    currencyDisplay?: Intl.NumberFormatOptions["currencyDisplay"];
    /** Customize compact output. */
    compactDisplay?: Intl.NumberFormatOptions["compactDisplay"];
}
/**
 * Format a monetary value using the platform's Intl implementation.
 */
export declare function formatCurrency(amount: number, options?: CurrencyFormatOptions): string;
/**
 * Backward-compatible formatter. New code should prefer the options object.
 */
export declare function format(amount: number, options?: CurrencyFormatOptions): string;
export declare function format(amount: number, currency?: string, locale?: string, abbreviate?: boolean, useSuffix?: boolean, decimalDigits?: number, useSpacing?: boolean): string;
//# sourceMappingURL=index.d.ts.map