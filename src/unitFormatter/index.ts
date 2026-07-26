export interface UnitFormatOptions {
	locale?: string;
	thousandSeparator?: string;
	unitDisplay?: Intl.NumberFormatOptions["unitDisplay"];
	decimalDigits?: number;
}

function replaceGroupSeparators(
	formatter: Intl.NumberFormat,
	value: number,
	separator: string,
): string {
	return formatter
		.formatToParts(value)
		.map((part) => (part.type === "group" ? separator : part.value))
		.join("");
}

export function formatUnit(
	value: number,
	unit: string,
	options?: UnitFormatOptions,
): string;
export function formatUnit(
	value: number,
	unit: string,
	locale?: string,
	thousandSeparator?: string,
): string;
export function formatUnit(
	value: number,
	unit: string,
	localeOrOptions: string | UnitFormatOptions = "en-US",
	thousandSeparator?: string,
): string {
	const options =
		typeof localeOrOptions === "string"
			? { locale: localeOrOptions, thousandSeparator }
			: localeOrOptions;
	const decimalDigits = options.decimalDigits;
	if (
		decimalDigits !== undefined &&
		(!Number.isInteger(decimalDigits) || decimalDigits < 0 || decimalDigits > 20)
	) {
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
