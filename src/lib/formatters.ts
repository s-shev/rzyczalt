import Decimal from "decimal.js";
import { RYCZALT_2026 } from "../data/ryczalt2026";

export const formatCurrency = (value: Decimal) =>
  new Intl.NumberFormat("pl-PL", {
    style: "currency",
    currency: "PLN",
    minimumFractionDigits: 2,
  }).format(value.toNumber());

export const formatPercent = (value: number) =>
  `${new Decimal(value).mul(100).toFixed(1)}%`;

export const getTierLabel = (annualRevenue: Decimal) => {
  const { tierThresholds } = RYCZALT_2026;
  if (annualRevenue.lte(tierThresholds.lowMax)) {
    return "Tier 1";
  }
  if (annualRevenue.lte(tierThresholds.midMax)) {
    return "Tier 2";
  }
  return "Tier 3";
};
