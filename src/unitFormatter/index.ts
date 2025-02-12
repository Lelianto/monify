export function formatUnit(
	value: number,
	unit: string,
	locale: string = "en-US",
	thousandSeparator?: string
): string {
	const formatted = new Intl.NumberFormat(locale, { style: "unit", unit }).format(value);

	if (thousandSeparator) {
		const defaultSeparator = new Intl.NumberFormat(locale)
			.format(1000)
			.replace(/\d/g, "")[0]; // Extract default separator

		return formatted.replace(new RegExp(`\\${defaultSeparator}`, "g"), thousandSeparator);
	}

	return formatted;
}
