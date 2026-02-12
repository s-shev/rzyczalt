import { useMemo, useState } from "react";
import { Box, Container, Grid, Stack } from "@mui/material";
import { calcRyczalt, ZusStage } from "./lib/calc";
import AssumptionsPanel from "./components/AssumptionsPanel";
import BreakdownPanel from "./components/BreakdownPanel";
import CalculatorHeader from "./components/CalculatorHeader";
import InputsPanel from "./components/InputsPanel";
import NetIncomePanel from "./components/NetIncomePanel";

const App = () => {
  const [grossIncome, setGrossIncome] = useState("15000");
  const [rate, setRate] = useState<number>(0.12);
  const [zusStage, setZusStage] = useState<ZusStage>("maly");
  const [sicknessPaid, setSicknessPaid] = useState(true);

  const grossValue = useMemo(() => {
    const normalized = grossIncome.replace(/,/g, ".");
    const parsed = Number(normalized);
    return Number.isFinite(parsed) ? parsed : 0;
  }, [grossIncome]);

  const result = useMemo(
    () =>
      calcRyczalt({
        grossIncome: grossValue,
        ryczaltRate: rate,
        zusStage,
        sicknessPaid,
      }),
    [grossValue, rate, zusStage, sicknessPaid],
  );

  return (
    <Box position="relative" overflow="hidden">
      <Box className="hero-glow" />
      <Container
        maxWidth="lg"
        sx={{ py: { xs: 5, md: 8 }, position: "relative" }}
      >
        <Stack spacing={4}>
          <CalculatorHeader />

          <Grid container spacing={3} className="section-fade delay-1">
            <Grid item xs={12} md={6}>
              <InputsPanel
                grossIncome={grossIncome}
                onGrossIncomeChange={setGrossIncome}
                rate={rate}
                onRateChange={setRate}
                zusStage={zusStage}
                onZusStageChange={setZusStage}
                sicknessPaid={sicknessPaid}
                onSicknessPaidChange={setSicknessPaid}
                annualRevenue={result.annualRevenue}
                tierMultiplier={result.tierMultiplier}
              />
            </Grid>

            <Grid item xs={12} md={6}>
              <Stack spacing={3}>
                <NetIncomePanel
                  netIncome={result.netIncome}
                  taxDue={result.taxDue}
                  zusTotal={result.zusTotal}
                />

                <BreakdownPanel
                  healthContribution={result.healthContribution}
                  socialBreakdown={result.socialBreakdown}
                  socialInsurance={result.socialInsurance}
                />
              </Stack>
            </Grid>
          </Grid>

          <AssumptionsPanel />
        </Stack>
      </Container>
    </Box>
  );
};

export default App;
