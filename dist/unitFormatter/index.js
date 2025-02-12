"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatUnit = formatUnit;
function formatUnit(value, unit, locale = "en-US", thousandSeparator) {
    const formatted = new Intl.NumberFormat(locale, { style: "unit", unit }).format(value);
    if (thousandSeparator) {
        const defaultSeparator = new Intl.NumberFormat(locale)
            .format(1000)
            .replace(/\d/g, "")[0]; // Extract default separator
        return formatted.replace(new RegExp(`\\${defaultSeparator}`, "g"), thousandSeparator);
    }
    return formatted;
}
