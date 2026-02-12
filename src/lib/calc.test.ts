import { describe, expect, it } from "vitest";
import Decimal from "decimal.js";
import { calcRyczalt } from "./calc";

describe("calcRyczalt", () => {
  it("calculates ulga na start without social insurance", () => {
    const result = calcRyczalt({
      grossIncome: 10000,
      ryczaltRate: 0.12,
      zusStage: "ulga",
      sicknessPaid: true,
    });

    const expectedHealth = new Decimal(0.09).mul(9228.64).mul(1.0);
    const expectedTaxBase = new Decimal(10000).sub(expectedHealth.mul(0.5));
    const expectedTax = expectedTaxBase.mul(0.12);
    const expectedNet = new Decimal(10000).sub(expectedTax).sub(expectedHealth);

    expect(result.socialInsurance.toNumber()).toBeCloseTo(0, 6);
    expect(result.healthContribution.toNumber()).toBeCloseTo(
      expectedHealth.toNumber(),
      6,
    );
    expect(result.taxDue.toNumber()).toBeCloseTo(expectedTax.toNumber(), 6);
    expect(result.netIncome.toNumber()).toBeCloseTo(expectedNet.toNumber(), 6);
  });
});
