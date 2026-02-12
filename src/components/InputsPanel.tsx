import {
  Box,
  Chip,
  Divider,
  FormControl,
  FormControlLabel,
  InputAdornment,
  IconButton,
  MenuItem,
  Paper,
  Stack,
  Switch,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { styled } from "@mui/material/styles";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import type { TooltipProps } from "@mui/material/Tooltip";
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

const StyledTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: "#0F1F1A",
    color: "#F7F2E9",
    borderRadius: 12,
    padding: theme.spacing(1.2, 1.4),
    boxShadow: "0 16px 40px rgba(9, 20, 16, 0.25)",
    maxWidth: 280,
  },
  [`& .${tooltipClasses.arrow}`]: {
    color: "#0F1F1A",
  },
}));

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

        <TextField
          label="Gross income (monthly)"
          value={grossIncome}
          onChange={(event) => onGrossIncomeChange(event.target.value)}
          type="number"
          size="small"
          fullWidth
          InputProps={{
            endAdornment: <InputAdornment position="end">PLN</InputAdornment>,
          }}
        />

        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={{ xs: 1.2, sm: 1 }}
          alignItems={{ xs: "stretch", sm: "center" }}
        >
          <FormControl fullWidth>
            <TextField
              select
              label="Ryczalt rate"
              value={rate}
              onChange={(event) => onRateChange(Number(event.target.value))}
              size="small"
            >
              {RYCZALT_2026.ryczaltRates.map((value) => (
                <MenuItem key={value} value={value}>
                  {formatPercent(value)}
                </MenuItem>
              ))}
            </TextField>
          </FormControl>
          <StyledTooltip
            title={
              <Stack spacing={0.5}>
                <Typography variant="subtitle2">
                  What is the ryczalt rate?
                </Typography>
                <Typography variant="body2">
                  It is the flat tax percentage tied to your business activity.
                  Choose the rate assigned to your activity (PKD). This
                  calculator assumes a single rate for the whole income.
                </Typography>
                <Typography variant="caption">
                  If you have multiple activities with different rates, run
                  separate scenarios and combine the results.
                </Typography>
              </Stack>
            }
            placement="top"
            arrow
          >
            <IconButton
              size="small"
              aria-label="What is the ryczalt rate?"
              sx={{
                alignSelf: { xs: "flex-start", sm: "center" },
                border: "1px solid #E6DDD0",
                backgroundColor: "#FFF9F1",
              }}
            >
              <InfoOutlinedIcon fontSize="small" />
            </IconButton>
          </StyledTooltip>
        </Stack>

        <Box>
          <Typography variant="subtitle2" sx={{ mb: 1 }}>
            ZUS stage
          </Typography>
          <ToggleButtonGroup
            exclusive
            value={zusStage}
            onChange={(_, value) => value && onZusStageChange(value)}
            fullWidth
            sx={{
              flexWrap: { xs: "wrap", sm: "nowrap" },
              gap: { xs: 1, sm: 0 },
              "& .MuiToggleButton-root": {
                flex: { xs: "1 1 100%", sm: "1 1 auto" },
              },
            }}
          >
            <ToggleButton value="ulga" size="small">
              Ulga na start
            </ToggleButton>
            <ToggleButton value="maly" size="small">
              Mały ZUS
            </ToggleButton>
            <ToggleButton value="duzy" size="small">
              Duży ZUS
            </ToggleButton>
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
          sx={{
            m: 0,
            alignItems: { xs: "flex-start", sm: "center" },
          }}
        />

        <Divider />

        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={{ xs: 0.6, sm: 1 }}
          alignItems={{ xs: "flex-start", sm: "center" }}
        >
          <Chip
            label={`${getTierLabel(annualRevenue)} multiplier x${tierMultiplier.toFixed(2)}`}
            color="primary"
            variant="outlined"
            sx={{ alignSelf: { xs: "flex-start", sm: "center" } }}
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
