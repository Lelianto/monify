"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./index");
const usdFormatter = new index_1.CurrencyFormatter('en-US', 'USD');
console.log(usdFormatter.format(1234.5)); // $1,234.50
const idrFormatter = new index_1.CurrencyFormatter('id-ID', 'IDR', 0);
console.log(idrFormatter.format(1234567)); // Rp1.234.567
