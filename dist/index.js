"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
function format(amount, currency = "USD", locale, // Locale is now optional
abbreviate = false, useSuffix = true, decimalDigits, useSpacing = true) {
    // Determine locale automatically if not provided
    const resolvedLocale = locale || currencyToLocale[currency] || "en-US";
    let formattedAmount;
    if (abbreviate) {
        const suffixes = ["", "K", "M", "B", "T"];
        let suffixIndex = 0;
        while (amount >= 1000 && suffixIndex < suffixes.length - 1) {
            amount /= 1000;
            suffixIndex++;
        }
        formattedAmount = useSuffix
            ? `${amount.toFixed(decimalDigits !== null && decimalDigits !== void 0 ? decimalDigits : 2)}${suffixes[suffixIndex]}`
            : amount.toFixed(decimalDigits !== null && decimalDigits !== void 0 ? decimalDigits : 2);
    }
    else {
        formattedAmount = new Intl.NumberFormat(resolvedLocale, {
            style: "currency",
            currency,
            minimumFractionDigits: decimalDigits,
            maximumFractionDigits: decimalDigits,
        }).format(amount);
    }
    // Handle spacing based on user preference
    if (!useSpacing) {
        formattedAmount = formattedAmount.replace(/\s/, "");
    }
    else {
        formattedAmount = formattedAmount.replace(/\u00A0/g, " ");
    }
    formattedAmount = formattedAmount.replace("¥", "￥");
    formattedAmount = formattedAmount.replace("Rs", "₨");
    return formattedAmount;
}
