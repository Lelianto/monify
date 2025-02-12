"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./index");
describe("format function - Currency Tests", () => {
    const testCases = [
        { amount: 1234567.89, currency: "USD", expected: "$1,234,567.89" },
        { amount: 1234567.89, currency: "EUR", expected: "1.234.567,89 €" },
        { amount: 1234567, currency: "IDR", expected: "Rp 1.234.567,00" },
        { amount: 1234567, currency: "JPY", expected: "￥1,234,567" },
        { amount: 1234567.89, currency: "GBP", expected: "£1,234,567.89" },
        { amount: 1234567.89, currency: "AUD", expected: "$1,234,567.89" },
        { amount: 1234567.89, currency: "CAD", expected: "$1,234,567.89" },
        { amount: 1234567.89, currency: "CNY", expected: "￥1,234,567.89" },
        { amount: 1234567.89, currency: "INR", expected: "₹12,34,567.89" },
        { amount: 1234567, currency: "KRW", expected: "₩1,234,567" },
        { amount: 1234567.89, currency: "CHF", expected: "CHF 1’234’567.89" },
        { amount: 1234567.89, currency: "SGD", expected: "$1,234,567.89" },
        { amount: 1234567.89, currency: "HKD", expected: "HK$1,234,567.89" },
        { amount: 1234567.89, currency: "MYR", expected: "RM 1,234,567.89" },
        { amount: 1234567.89, currency: "PHP", expected: "₱1,234,567.89" },
        { amount: 1234567.89, currency: "THB", expected: "฿1,234,567.89" },
        { amount: 1234567.89, currency: "NZD", expected: "$1,234,567.89" },
        { amount: 1234567.89, currency: "BRL", expected: "R$ 1.234.567,89" },
        { amount: 1234567.89, currency: "RUB", expected: "1 234 567,89 ₽" },
        { amount: 1234567.89, currency: "MXN", expected: "$1,234,567.89" },
        { amount: 1234567.89, currency: "ZAR", expected: "R 1,234,567.89" },
        { amount: 1234567.89, currency: "TRY", expected: "₺1.234.567,89" },
        { amount: 1234567.89, currency: "SEK", expected: "1 234 567,89 kr" },
        { amount: 1234567.89, currency: "NOK", expected: "kr 1 234 567,89" },
        { amount: 1234567.89, currency: "DKK", expected: "1.234.567,89 kr." },
        { amount: 1234567.89, currency: "PLN", expected: "1 234 567,89 zł" },
        { amount: 1234567.89, currency: "HUF", expected: "1 234 567,89 Ft" },
        { amount: 1234567.89, currency: "CZK", expected: "1 234 567,89 Kč" },
        { amount: 1234567.89, currency: "ARS", expected: "$ 1.234.567,89" },
        { amount: 1234567.89, currency: "CLP", expected: "$1.234.568" },
        { amount: 1234567.89, currency: "COP", expected: "$ 1.234.567,89" },
        { amount: 1234567.89, currency: "PEN", expected: "S/ 1,234,567.89" },
        { amount: 1234567.89, currency: "VND", expected: "1.234.568 ₫" },
        { amount: 1234567.89, currency: "PKR", expected: "₨ 1,234,567.89" },
        { amount: 1234567.89, currency: "NGN", expected: "₦1,234,567.89" },
        { amount: 1234567.89, currency: "KES", expected: "Ksh 1,234,567.89" },
    ];
    testCases.forEach(({ amount, currency, expected }) => {
        test(`formats ${currency} correctly`, () => {
            expect((0, index_1.format)(amount, currency)).toEqual(expected);
        });
    });
});
