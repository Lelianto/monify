import { CurrencyFormatter } from './index';

const usdFormatter = new CurrencyFormatter('en-US', 'USD');
console.log(usdFormatter.format(1234.5)); // $1,234.50

const idrFormatter = new CurrencyFormatter('id-ID', 'IDR', 0);
console.log(idrFormatter.format(1234567)); // Rp1.234.567
