import { format, formatCurrency } from "./index";

describe("format function - Currency Tests", () => {
  test.each([
    ["USD", "$1,234,567.89"],
    ["EUR", "1.234.567,89 €"],
    ["JPY", "￥1,234,568"],
    ["INR", "₹12,34,567.89"],
    ["BRL", "R$ 1.234.567,89"],
  ])("formats %s using its inferred locale", (currency, expected) => {
    expect(format(1234567.89, currency)).toBe(expected);
  });

  test("honors an explicit locale", () => {
    expect(format(1234.5, "USD", "de-DE")).toBe("1.234,50 $");
  });

  test("can remove currency spacing", () => {
    expect(format(1234.5, "EUR", "de-DE", false, true, 2, false))
      .toBe("1.234,50€");
  });
});

describe("formatCurrency options API", () => {
  test("supports a compact, currency-aware format", () => {
    expect(formatCurrency(1500000, {
      currency: "USD",
      locale: "en-US",
      compact: true,
      decimalDigits: 1,
    })).toBe("$1.5M");
  });

  test("accepts options through the format alias", () => {
    expect(format(1234.5, {
      currency: "eur",
      locale: "de-DE",
      decimalDigits: 1,
    })).toBe("1.234,5 €");
  });

  test("abbreviates negative values in the legacy API", () => {
    expect(format(-1500000, "USD", "en-US", true, true, 1)).toBe("-1.5M");
  });

  test("rejects invalid decimal precision", () => {
    expect(() => formatCurrency(1, { decimalDigits: 21 })).toThrow(RangeError);
  });
});
