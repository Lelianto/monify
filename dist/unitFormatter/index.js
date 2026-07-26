"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatUnit = formatUnit;
function replaceGroupSeparators(formatter, value, separator) {
    return formatter
        .formatToParts(value)
        .map((part) => (part.type === "group" ? separator : part.value))
        .join("");
}
function formatUnit(value, unit, localeOrOptions = "en-US", thousandSeparator) {
    const options = typeof localeOrOptions === "string"
        ? { locale: localeOrOptions, thousandSeparator }
        : localeOrOptions;
    const decimalDigits = options.decimalDigits;
    if (decimalDigits !== undefined &&
        (!Number.isInteger(decimalDigits) || decimalDigits < 0 || decimalDigits > 20)) {
        throw new RangeError("decimalDigits must be an integer between 0 and 20");
    }
    const formatter = new Intl.NumberFormat(options.locale ?? "en-US", {
        style: "unit",
        unit,
        unitDisplay: options.unitDisplay,
        minimumFractionDigits: decimalDigits,
        maximumFractionDigits: decimalDigits,
    });
    const formatted = options.thousandSeparator !== undefined
        ? replaceGroupSeparators(formatter, value, options.thousandSeparator)
        : formatter.format(value);
    return formatted.replace(/[\u00a0\u202f]/g, " ");
}
//# sourceMappingURL=index.js.map