import {
  Box,
  Chip,
  Divider,
  FormControl,
  FormControlLabel,
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
import { RYCZALT_2026 } from "../data/ryczalt2026";
import { ZusStage } from "../lib/calc";
import { formatCurrency, formatPercent, getTierLabel } from "../lib/formatters";

type InputsPanelProps = {
  grossIncome: string;
  onGrossIncomeChange: (value: string) => void;
  rate: number;
  onRateChange: (value: number) => void;
  zusStage: ZusStage;
  onZusStageChange: (value: ZusStage) => void;
  sicknessPaid: boolean;
  onSicknessPaidChange: (value: boolean) => void;
  annualRevenue: Decimal;
  tierMultiplier: Decimal;
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
  annualRevenue,
  tierMultiplier,
}: InputsPanelProps) => {
  return (
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
            All amounts are monthly. Tier multiplier is determined from annual
            revenue (monthly gross x 12).
          </Typography>
        </Box>

        <TextField
          label="Gross income (monthly)"
          value={grossIncome}
          onChange={(event) => onGrossIncomeChange(event.target.value)}
          type="number"
          fullWidth
          InputProps={{
            endAdornment: <InputAdornment position="end">PLN</InputAdornment>,
          }}
        />

        <FormControl fullWidth>
          <TextField
            select
            label="Ryczałt rate"
            value={rate}
            onChange={(event) => onRateChange(Number(event.target.value))}
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
            onChange={(_, value) => value && onZusStageChange(value)}
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
              onChange={(event) => onSicknessPaidChange(event.target.checked)}
            />
          }
          label="Include sickness insurance"
        />

        <Divider />

        <Stack direction="row" spacing={1} alignItems="center">
          <Chip
            label={`${getTierLabel(annualRevenue)} multiplier x${tierMultiplier.toFixed(2)}`}
            color="primary"
            variant="outlined"
          />
          <Typography variant="caption" color="text.secondary">
            Annual revenue: {formatCurrency(annualRevenue)}
          </Typography>
        </Stack>
      </Stack>
    </Paper>
  );
};

export default InputsPanel;
