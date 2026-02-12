export const RYCZALT_2026 = {
  year: 2026,
  averageWageEnterpriseSector: 9228.64,
  forecastedAverageMonthlyWage: 9420.0,
  minimumSalary: 4806.0,
  accidentInsuranceRate: 0.0167,
  healthContributionRate: 0.09,
  tierMultipliers: {
    low: 0.6,
    mid: 1.0,
    high: 1.8,
  },
  tierThresholds: {
    lowMax: 60000,
    midMax: 300000,
  },
  ryczaltRates: [0.02, 0.03, 0.055, 0.085, 0.12, 0.14, 0.15, 0.17],
  socialInsuranceBase: {
    malyZUS: 0.3,
    duzyZUS: 0.6,
  },
  socialRates: {
    pension: 0.1952,
    disability: 0.08,
    sickness: 0.0245,
    accident: 0.0167,
    laborFund: 0.0245,
  },
} as const;
