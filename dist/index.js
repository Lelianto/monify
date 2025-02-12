"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CurrencyFormatter = void 0;
class CurrencyFormatter {
    constructor(locale = 'en-US', currency = 'USD', decimalPlaces = 2) {
        this.locale = locale;
        this.currency = currency;
        this.decimalPlaces = decimalPlaces;
    }
    format(amount) {
        return new Intl.NumberFormat(this.locale, {
            style: 'currency',
            currency: this.currency,
            minimumFractionDigits: this.decimalPlaces,
        }).format(amount);
    }
}
exports.CurrencyFormatter = CurrencyFormatter;
