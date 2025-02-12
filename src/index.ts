export class CurrencyFormatter {
    private locale: string;
    private currency: string;
    private decimalPlaces: number;

    constructor(locale: string = 'en-US', currency: string = 'USD', decimalPlaces: number = 2) {
        this.locale = locale;
        this.currency = currency;
        this.decimalPlaces = decimalPlaces;
    }

    format(amount: number): string {
        return new Intl.NumberFormat(this.locale, {
            style: 'currency',
            currency: this.currency,
            minimumFractionDigits: this.decimalPlaces,
        }).format(amount);
    }
}
