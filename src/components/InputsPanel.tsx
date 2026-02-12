import { Box, Divider, Paper, Stack, Typography } from "@mui/material";
import { RYCZALT_2026 } from "../data/ryczalt2026";
import { ZusStage } from "../lib/calc";
import { formatPercent } from "../lib/formatters";
import GrossIncomeField from "./inputs/GrossIncomeField";
import RyczaltRateField from "./inputs/RyczaltRateField";
import SicknessToggle from "./inputs/SicknessToggle";
import ZusStageSelector from "./inputs/ZusStageSelector";

type InputsPanelProps = {
  grossIncome: string;
  onGrossIncomeChange: (value: string) => void;
  rate: number;
  onRateChange: (value: number) => void;
  zusStage: ZusStage;
  onZusStageChange: (value: ZusStage) => void;
  sicknessPaid: boolean;
  onSicknessPaidChange: (value: boolean) => void;
};

const InputsPanel = ({
  grossIncome,
  onGrossIncomeChange,
  rate,
  onRateChange,
  zusStage,
  onZusStageChange,
  sicknessPaid,
  onSicknessPaidChange,
}: InputsPanelProps) => {
  const sicknessRateLabel = formatPercent(RYCZALT_2026.socialRates.sickness);

  return (
    <Paper
      elevation={0}
      sx={{ p: { xs: 2, sm: 2.5, md: 4 }, border: "1px solid #E6DDD0" }}
    >
      <Stack spacing={{ xs: 2, md: 3 }}>
        <Box>
          <Typography variant="h3" sx={{ mb: 0.5 }}>
            Inputs
          </Typography>
          <Typography variant="body2" color="text.secondary">
            All amounts are monthly. Tier multiplier is determined from annual
            revenue (monthly gross x 12).
          </Typography>
        </Box>

        <GrossIncomeField value={grossIncome} onChange={onGrossIncomeChange} />

        <RyczaltRateField rate={rate} onRateChange={onRateChange} />

        <ZusStageSelector
          zusStage={zusStage}
          onZusStageChange={onZusStageChange}
        />

        {zusStage !== "ulga" && (
          <SicknessToggle
            checked={sicknessPaid}
            onChange={onSicknessPaidChange}
            tooltipTitle={
              <Stack spacing={0.5}>
                <Typography variant="subtitle2">
                  What is sickness insurance?
                </Typography>
                <Typography variant="body2">
                  Voluntary contribution at {sicknessRateLabel} of the social
                  insurance base.
                </Typography>
                <Typography variant="caption">Opt-in benefits:</Typography>
                <Typography
                  component="ul"
                  variant="caption"
                  sx={{ pl: 2, m: 0 }}
                >
                  <li>Paid sick leave (L4) allowance.</li>
                  <li>Maternity/paternity benefits (incl. Kosiniakowe).</li>
                  <li>Rehabilitation benefit after 182 days of L4.</li>
                  <li>Care allowance for a sick child.</li>
                </Typography>
              </Stack>
            }
          />
        )}
      </Stack>
    </Paper>
  );
};

export default InputsPanel;
