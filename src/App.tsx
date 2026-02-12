import { useMemo, useState } from "react";
import {
  Box,
  Chip,
  Container,
  Divider,
  FormControl,
  FormControlLabel,
  Grid,
  InputAdornment,
  MenuItem,
  Paper,
  Stack,
  Switch,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import Decimal from "decimal.js";
import { calcRyczalt, ZusStage } from "./lib/calc";
import { RYCZALT_2026 } from "./data/ryczalt2026";

const formatCurrency = (value: Decimal) =>
  new Intl.NumberFormat("pl-PL", {
    style: "currency",
    currency: "PLN",
    minimumFractionDigits: 2,
  }).format(value.toNumber());

const formatPercent = (value: number) =>
  `${new Decimal(value).mul(100).toFixed(1)}%`;

const getTierLabel = (annualRevenue: Decimal) => {
  const { tierThresholds } = RYCZALT_2026;
  if (annualRevenue.lte(tierThresholds.lowMax)) {
    return "Tier 1";
  }
  if (annualRevenue.lte(tierThresholds.midMax)) {
    return "Tier 2";
  }
  return "Tier 3";
};

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
          <Box className="section-fade">
            <Stack spacing={1}>
              <Typography
                variant="h1"
                sx={{ fontSize: { xs: "2.4rem", md: "3.6rem" } }}
              >
                Ryczałt 2026 Calculator
              </Typography>
              <Typography variant="subtitle1" color="text.secondary">
                Monthly view of your gross income converted into net take-home,
                with a clean breakdown of all obligatory payments.
              </Typography>
            </Stack>
          </Box>

          <Grid container spacing={3} className="section-fade delay-1">
            <Grid item xs={12} md={6}>
              <Paper
                elevation={0}
                sx={{ p: { xs: 3, md: 4 }, border: "1px solid #E6DDD0" }}
              >
                <Stack spacing={3}>
                  <Box>
                    <Typography variant="h3" sx={{ mb: 0.5 }}>
                      Inputs
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      All amounts are monthly. Tier multiplier is determined
                      from annual revenue (monthly gross x 12).
                    </Typography>
                  </Box>

                  <TextField
                    label="Gross income (monthly)"
                    value={grossIncome}
                    onChange={(event) => setGrossIncome(event.target.value)}
                    type="number"
                    fullWidth
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">PLN</InputAdornment>
                      ),
                    }}
                  />

                  <FormControl fullWidth>
                    <TextField
                      select
                      label="Ryczałt rate"
                      value={rate}
                      onChange={(event) => setRate(Number(event.target.value))}
                    >
                      {RYCZALT_2026.ryczaltRates.map((value) => (
                        <MenuItem key={value} value={value}>
                          {formatPercent(value)}
                        </MenuItem>
                      ))}
                    </TextField>
                  </FormControl>

                  <Box>
                    <Typography variant="subtitle2" sx={{ mb: 1 }}>
                      ZUS stage
                    </Typography>
                    <ToggleButtonGroup
                      exclusive
                      value={zusStage}
                      onChange={(_, value) => value && setZusStage(value)}
                      fullWidth
                    >
                      <ToggleButton value="ulga">Ulga na start</ToggleButton>
                      <ToggleButton value="maly">Mały ZUS</ToggleButton>
                      <ToggleButton value="duzy">Duży ZUS</ToggleButton>
                    </ToggleButtonGroup>
                  </Box>

                  <FormControlLabel
                    control={
                      <Switch
                        checked={sicknessPaid}
                        onChange={(event) =>
                          setSicknessPaid(event.target.checked)
                        }
                      />
                    }
                    label="Include sickness insurance"
                  />

                  <Divider />

                  <Stack direction="row" spacing={1} alignItems="center">
                    <Chip
                      label={`${getTierLabel(result.annualRevenue)} multiplier x${result.tierMultiplier.toFixed(2)}`}
                      color="primary"
                      variant="outlined"
                    />
                    <Typography variant="caption" color="text.secondary">
                      Annual revenue: {formatCurrency(result.annualRevenue)}
                    </Typography>
                  </Stack>
                </Stack>
              </Paper>
            </Grid>

            <Grid item xs={12} md={6}>
              <Stack spacing={3}>
                <Paper
                  elevation={0}
                  sx={{ p: { xs: 3, md: 4 }, border: "1px solid #E6DDD0" }}
                >
                  <Stack spacing={2}>
                    <Typography variant="h3">Net income</Typography>
                    <Typography
                      variant="h2"
                      color="primary"
                      sx={{ fontSize: "2.4rem" }}
                    >
                      {formatCurrency(result.netIncome)}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      After tax and ZUS contributions.
                    </Typography>
                    <Divider />
                    <Stack spacing={1.5}>
                      <Stack direction="row" justifyContent="space-between">
                        <Typography color="text.secondary">Tax due</Typography>
                        <Typography>{formatCurrency(result.taxDue)}</Typography>
                      </Stack>
                      <Stack direction="row" justifyContent="space-between">
                        <Typography color="text.secondary">
                          ZUS total
                        </Typography>
                        <Typography>
                          {formatCurrency(result.zusTotal)}
                        </Typography>
                      </Stack>
                    </Stack>
                  </Stack>
                </Paper>

                <Paper
                  elevation={0}
                  sx={{ p: { xs: 3, md: 4 }, border: "1px solid #E6DDD0" }}
                >
                  <Stack spacing={2}>
                    <Typography variant="h3">Breakdown</Typography>
                    <Stack spacing={1.2}>
                      <Stack direction="row" justifyContent="space-between">
                        <Typography color="text.secondary">
                          Health contribution
                        </Typography>
                        <Typography>
                          {formatCurrency(result.healthContribution)}
                        </Typography>
                      </Stack>
                      <Stack direction="row" justifyContent="space-between">
                        <Typography color="text.secondary">Pension</Typography>
                        <Typography>
                          {formatCurrency(result.socialBreakdown.pension)}
                        </Typography>
                      </Stack>
                      <Stack direction="row" justifyContent="space-between">
                        <Typography color="text.secondary">
                          Disability
                        </Typography>
                        <Typography>
                          {formatCurrency(result.socialBreakdown.disability)}
                        </Typography>
                      </Stack>
                      <Stack direction="row" justifyContent="space-between">
                        <Typography color="text.secondary">Sickness</Typography>
                        <Typography>
                          {formatCurrency(result.socialBreakdown.sickness)}
                        </Typography>
                      </Stack>
                      <Stack direction="row" justifyContent="space-between">
                        <Typography color="text.secondary">Accident</Typography>
                        <Typography>
                          {formatCurrency(result.socialBreakdown.accident)}
                        </Typography>
                      </Stack>
                      <Stack direction="row" justifyContent="space-between">
                        <Typography color="text.secondary">
                          Labor Fund
                        </Typography>
                        <Typography>
                          {formatCurrency(result.socialBreakdown.laborFund)}
                        </Typography>
                      </Stack>
                      <Divider />
                      <Stack direction="row" justifyContent="space-between">
                        <Typography color="text.secondary">
                          Social insurance total
                        </Typography>
                        <Typography>
                          {formatCurrency(result.socialInsurance)}
                        </Typography>
                      </Stack>
                    </Stack>
                  </Stack>
                </Paper>
              </Stack>
            </Grid>
          </Grid>

          <Paper
            elevation={0}
            className="section-fade delay-2"
            sx={{ p: { xs: 3, md: 4 }, border: "1px dashed #D7CCBD" }}
          >
            <Stack spacing={1}>
              <Typography variant="subtitle2">Assumptions</Typography>
              <Typography variant="body2" color="text.secondary">
                The calculator uses 2026 parameters and assumes the provided
                gross income is monthly. Health contribution is based on the
                tier multiplier from annual revenue.
              </Typography>
            </Stack>
          </Paper>
        </Stack>
      </Container>
    </Box>
  );
};

export default App;
