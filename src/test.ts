import { Monify } from './index';

const usd = new Monify('en-US', 'USD');
console.log(usd.format(1234567.89)); // $1,234,567.89
console.log(usd.format(1234567.89, true)); // $1.23M

const idr = new Monify('id-ID', 'IDR');
console.log(idr.format(1234567)); // Rp1.234.567
console.log(idr.format(1234567, true)); // Rp1.23M

const eur = new Monify('de-DE', 'EUR');
console.log(eur.format(987654.32)); // 987.654,32 €

const jpy = new Monify('ja-JP', 'JPY');
console.log(jpy.format(5000000)); // ¥5,000,000
