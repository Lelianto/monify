import { formatUnit } from "./index";

describe("formatUnit function - Unit Formatting Tests", () => {
	test("formats distance in kilometers with default locale", () => {
		expect(formatUnit(1000, "kilometer")).toBe("1,000 km");
	});

	test("formats weight in grams with German locale", () => {
		expect(formatUnit(5000, "gram", "de-DE")).toBe("5.000 g");
	});

	test("applies custom thousand separator (dot) in US locale", () => {
		expect(formatUnit(1000000, "kilometer", "en-US", ".")).toBe("1.000.000 km");
	});

	test("applies custom thousand separator (space) in French locale", () => {
		expect(formatUnit(1000000, "kilogram", "fr-FR", " ")).toBe("1 000 000 kg");
	});

	test("applies custom thousand separator (underscore) in Japanese locale", () => {
		expect(formatUnit(1000000, "liter", "ja-JP", "_")).toBe("1_000_000 L");
	});

	test("handles zero value correctly", () => {
		expect(formatUnit(0, "meter")).toBe("0 m");
	});

	test("handles values without custom separator", () => {
		expect(formatUnit(12345, "mile", "en-US")).toBe("12,345 mi");
	});

	test("handles values with negative numbers", () => {
		expect(formatUnit(-1000, "kilogram", "en-US")).toBe("-1,000 kg");
	});
});
