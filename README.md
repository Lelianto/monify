# Monify

[![npm version](https://img.shields.io/npm/v/monify-ts.svg)](https://www.npmjs.com/package/monify-ts)
[![license](https://img.shields.io/npm/l/monify-ts.svg)](./LICENSE)

Small, zero-dependency TypeScript utilities for locale-aware currency and unit
formatting. Monify is built on the standard `Intl.NumberFormat` API, ships its
own types, and works in Node.js and modern browsers.

## Install

```sh
npm install monify-ts
```

## Currency formatting

```ts
import { format, formatCurrency } from "monify-ts";

formatCurrency(1_234_567.89, { currency: "USD" });
// "$1,234,567.89"

formatCurrency(1_234_567.89, { currency: "IDR" });
// "Rp 1.234.567,89"

formatCurrency(1_500_000, {
  currency: "USD",
  compact: true,
  decimalDigits: 1,
});
// "$1.5M"

format(1_234.5, {
  currency: "EUR",
  locale: "de-DE",
  decimalDigits: 1,
});
// "1.234,5 €"
```

`formatCurrency(amount, options)` is the recommended API. `format` accepts the
same options and continues to support the positional API from Monify 1.0.

### Currency options

| Option | Type | Default | Description |
| --- | --- | --- | --- |
| `currency` | `string` | `"USD"` | ISO 4217 currency code |
| `locale` | `string` | inferred | BCP 47 locale |
| `compact` | `boolean` | `false` | Use compact notation |
| `decimalDigits` | `number` | currency default | Fraction digits, from 0 to 20 |
| `useSpacing` | `boolean` | `true` | Keep spacing around the symbol |
| `currencyDisplay` | `Intl` option | `"symbol"` | Symbol, narrow symbol, code, or name |
| `compactDisplay` | `Intl` option | `"short"` | Short or long compact notation |

Currency locale inference is provided for 41 common currencies. Any valid
currency and locale supported by the runtime can still be passed explicitly.

## Unit formatting

```ts
import { formatUnit } from "monify-ts";

formatUnit(1_000, "kilometer");
// "1,000 km"

formatUnit(1_234.56, "liter", {
  locale: "en-US",
  thousandSeparator: "_",
  decimalDigits: 1,
  unitDisplay: "long",
});
// "1_234.6 liters"
```

The legacy `formatUnit(value, unit, locale, thousandSeparator)` signature is
also supported.

## Compatibility

- Node.js 18 or newer
- Modern browsers with `Intl.NumberFormat`
- CommonJS (`require`) and TypeScript/ES module imports
- No runtime dependencies

Output can differ slightly between runtime versions because locale data is
provided by the JavaScript engine.

## Development

```sh
npm test
npm run build
npm run check
```

## License

[MIT](./LICENSE)
