export class Monify {
	private locale: string;
	private currency: string;
	private decimalPlaces: number;

	// Currency-specific decimal settings
	private static CURRENCY_DECIMALS: Record<string, number> = {
		USD: 2, IDR: 0, JPY: 0, EUR: 2, GBP: 2, AUD: 2, CAD: 2, INR: 2, CNY: 2
	};

	constructor(locale: string = 'en-US', currency: string = 'USD') {
		this.locale = locale;
		this.currency = currency;
		this.decimalPlaces = Monify.CURRENCY_DECIMALS[currency] ?? 2; // Default to 2 decimals
	}

	format(amount: number, abbreviate: boolean = false): string {
		if (abbreviate) {
			return this.formatAbbreviated(amount);
		}

		return new Intl.NumberFormat(this.locale, {
			style: 'currency',
			currency: this.currency,
			minimumFractionDigits: this.decimalPlaces,
		}).format(amount);
	}

	private formatAbbreviated(amount: number): string {
		const suffixes = ['', 'K', 'M', 'B', 'T'];
		let value = amount;
		let suffixIndex = 0;

		while (value >= 1000 && suffixIndex < suffixes.length - 1) {
			value /= 1000;
			suffixIndex++;
		}

		return new Intl.NumberFormat(this.locale, {
			style: 'currency',
			currency: this.currency,
			minimumFractionDigits: this.decimalPlaces,
		}).format(value) + suffixes[suffixIndex];
	}
}
