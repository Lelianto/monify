"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatCurrency = formatCurrency;
exports.format = format;
const currencyToLocale = {
    USD: "en-US", // US Dollar
    EUR: "de-DE", // Euro
    IDR: "id-ID", // Indonesian Rupiah
    JPY: "ja-JP", // Japanese Yen
    GBP: "en-GB", // British Pound
    AUD: "en-AU", // Australian Dollar
    CAD: "en-CA", // Canadian Dollar
    CNY: "zh-CN", // Chinese Yuan
    INR: "en-IN", // Indian Rupee
    KRW: "ko-KR", // South Korean Won
    CHF: "de-CH", // Swiss Franc
    SGD: "en-SG", // Singapore Dollar
    HKD: "zh-HK", // Hong Kong Dollar
    MYR: "ms-MY", // Malaysian Ringgit
    PHP: "en-PH", // Philippine Peso
    THB: "th-TH", // Thai Baht
    NZD: "en-NZ", // New Zealand Dollar
    BRL: "pt-BR", // Brazilian Real
    RUB: "ru-RU", // Russian Ruble
    MXN: "es-MX", // Mexican Peso
    ZAR: "en-ZA", // South African Rand
    SAR: "ar-SA", // Saudi Riyal
    AED: "ar-AE", // UAE Dirham
    TRY: "tr-TR", // Turkish Lira
    SEK: "sv-SE", // Swedish Krona
    NOK: "nb-NO", // Norwegian Krone
    DKK: "da-DK", // Danish Krone
    PLN: "pl-PL", // Polish Złoty
    HUF: "hu-HU", // Hungarian Forint
    CZK: "cs-CZ", // Czech Koruna
    ILS: "he-IL", // Israeli Shekel
    ARS: "es-AR", // Argentine Peso
    CLP: "es-CL", // Chilean Peso
    COP: "es-CO", // Colombian Peso
    PEN: "es-PE", // Peruvian Sol
    VND: "vi-VN", // Vietnamese Dong
    BDT: "bn-BD", // Bangladeshi Taka
    PKR: "ur-PK", // Pakistani Rupee
    EGP: "ar-EG", // Egyptian Pound
    NGN: "en-NG", // Nigerian Naira
    KES: "en-KE", // Kenyan Shilling
};
function normalizeCurrency(currency) {
    return currency.trim().toUpperCase();
}
function normalizeSpacing(value, useSpacing) {
    const normalized = value.replace(/[\u00a0\u202f]/g, " ");
    return useSpacing ? normalized : normalized.replace(/\s/g, "");
}
/**
 * Format a monetary value using the platform's Intl implementation.
 */
function formatCurrency(amount, options = {}) {
    const currency = normalizeCurrency(options.currency ?? "USD");
    const locale = options.locale ?? currencyToLocale[currency] ?? "en-US";
    const decimalDigits = options.decimalDigits;
    if (decimalDigits !== undefined &&
        (!Number.isInteger(decimalDigits) || decimalDigits < 0 || decimalDigits > 20)) {
        throw new RangeError("decimalDigits must be an integer between 0 and 20");
    }
    return normalizeSpacing(new Intl.NumberFormat(locale, {
        style: "currency",
        currency,
        currencyDisplay: options.currencyDisplay,
        notation: options.compact ? "compact" : "standard",
        compactDisplay: options.compactDisplay,
        minimumFractionDigits: decimalDigits,
        maximumFractionDigits: decimalDigits,
    }).format(amount), options.useSpacing ?? true);
}
function format(amount, currencyOrOptions = "USD", locale, abbreviate = false, useSuffix = true, decimalDigits, useSpacing = true) {
    if (typeof currencyOrOptions !== "string") {
        return formatCurrency(amount, currencyOrOptions);
    }
    const currency = normalizeCurrency(currencyOrOptions);
    if (abbreviate) {
        const suffixes = ["", "K", "M", "B", "T"];
        let suffixIndex = 0;
        while (Math.abs(amount) >= 1000 && suffixIndex < suffixes.length - 1) {
            amount /= 1000;
            suffixIndex++;
        }
        return useSuffix
            ? `${amount.toFixed(decimalDigits ?? 2)}${suffixes[suffixIndex]}`
            : amount.toFixed(decimalDigits ?? 2);
    }
    return formatCurrency(amount, {
        currency,
        locale,
        decimalDigits,
        useSpacing,
    })
        .replace("¥", "￥")
        .replace("Rs", "₨");
}
//# sourceMappingURL=index.js.map