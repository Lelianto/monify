# 🌍 Monify - A Simple Currency Formatter

Monify is a lightweight **currency formatting** library built with **TypeScript**. It supports multiple currencies and provides flexible formatting options.

## 📦 Installation

```sh
npm install monify-ts
```
or 
with yarn:
```sh
yarn add monify-ts
```
## 🚀 Usage
```sh
import { format } from "monify-ts";
```

## 📦 Basic Usage
```sh
console.log(format(1234567.89, "USD")); // "$1,234,567.89"
console.log(format(1234567.89, "EUR")); // "1.234.567,89 €"
console.log(format(1234567.89, "IDR")); // "Rp 1.234.567,00"

// Custom decimal digits
console.log(format(1234567.89, "JPY", 0)); // "¥1,234,567"

// Disable currency symbol spacing
console.log(format(1234567.89, "GBP", 2, false, false)); // "£1,234,567.89"

// Enable suffix formatting
console.log(format(1500000, "USD", 2, true)); // "$1.5M"
```
## 📜 API Reference
```sh
format(
  value: number,
  currency: string,
  decimalDigits?: number,  // Optional (Default: Auto)
  useSuffix?: boolean,     // Optional (Default: false) → Enable "K, M, B" suffix
  useSpace?: boolean       // Optional (Default: true) → Add space between symbol and number
): string
```
## 🌎 Supported Currencies

| Currency             | Code | Example Output         |
|----------------------|------|------------------------|
| US Dollar           | USD  | `$1,234,567.89`       |
| Euro               | EUR  | `1.234.567,89 €`      |
| Indonesian Rupiah   | IDR  | `Rp 1.234.567,00`     |
| Japanese Yen        | JPY  | `¥1,234,567`         |
| British Pound       | GBP  | `£1,234,567.89`       |
| Australian Dollar   | AUD  | `$1,234,567.89`       |
| Canadian Dollar     | CAD  | `$1,234,567.89`       |
| Chinese Yuan       | CNY  | `￥1,234,567.89`     |
| Indian Rupee       | INR  | `₹12,34,567.89`      |
| South Korean Won    | KRW  | `₩1,234,567`        |
| Swiss Franc        | CHF  | `CHF 1’234’567.89`  |
| Singapore Dollar   | SGD  | `$1,234,567.89`       |
| Hong Kong Dollar   | HKD  | `HK$1,234,567.89`     |
| Malaysian Ringgit  | MYR  | `RM 1,234,567.89`     |
| Philippine Peso    | PHP  | `₱1,234,567.89`       |
| Thai Baht         | THB  | `฿1,234,567.89`      |
| New Zealand Dollar | NZD  | `$1,234,567.89`       |
| Brazilian Real     | BRL  | `R$ 1.234.567,89`     |
| Russian Ruble      | RUB  | `1 234 567,89 ₽`     |
| Mexican Peso       | MXN  | `$1,234,567.89`       |
| South African Rand | ZAR  | `R 1,234,567.89`      |
| Turkish Lira       | TRY  | `₺1.234.567,89`      |
| Swedish Krona      | SEK  | `1 234 567,89 kr`    |
| Norwegian Krone    | NOK  | `kr 1 234 567,89`    |
| Danish Krone      | DKK  | `1.234.567,89 kr.`  |
| Polish Zloty      | PLN  | `1 234 567,89 zł`    |
| Hungarian Forint   | HUF  | `1 234 567,89 Ft`    |
| Czech Koruna      | CZK  | `1 234 567,89 Kč`    |
| Argentine Peso    | ARS  | `$ 1.234.567,89`    |
| Chilean Peso      | CLP  | `$1.234.568`        |
| Colombian Peso    | COP  | `$ 1.234.567,89`    |
| Peruvian Sol      | PEN  | `S/ 1,234,567.89`    |
| Vietnamese Dong   | VND  | `1.234.568 ₫`       |
| Pakistani Rupee   | PKR  | `₨ 1,234,567.89`    |
| Nigerian Naira    | NGN  | `₦1,234,567.89`    |
| Kenyan Shilling   | KES  | `Ksh 1,234,567.89`   |

## 🧪 Running Tests
To run tests, use:
```sh
npm test
```
or
```sh
yarn test
```
Tests are written using Jest, covering multiple currencies to ensure accuracy.

## 🤝 Contributing
Contributions are welcome! To contribute:

```sh
Fork the repository.
Clone your forked repo.
Create a new feature branch.
Implement and test changes.
Submit a pull request.
```
## 📜 License
Monify is released under the MIT License.

## 📩 Support
For questions or issues, open a GitHub Issue or contact me at [lelianto.eko@gmail.com].