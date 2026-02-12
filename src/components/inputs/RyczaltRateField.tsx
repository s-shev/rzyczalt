import {
  Box,
  FormControl,
  MenuItem,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { RYCZALT_2026 } from "../../data/ryczalt2026";
import { formatPercent } from "../../lib/formatters";
import InfoTooltip from "../InfoTooltip";

type RyczaltRateFieldProps = {
  rate: number;
  onRateChange: (value: number) => void;
};

const RyczaltRateField = ({ rate, onRateChange }: RyczaltRateFieldProps) => {
  return (
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
      <Box sx={{ alignSelf: { xs: "flex-start", sm: "center" } }}>
        <InfoTooltip
          ariaLabel="What is the ryczalt rate?"
          title={
            <Stack spacing={0.5}>
              <Typography variant="subtitle2">
                What is the ryczalt rate?
              </Typography>
              <Typography variant="body2">
                It is the flat tax percentage assigned to your business
                activity. Pick the rate for your PKD. This calculator assumes
                one rate for the entire income.
              </Typography>
              <Typography variant="caption">
                If you have multiple activities with different rates, run
                separate scenarios and add the results together.
              </Typography>
            </Stack>
          }
        />
      </Box>
    </Stack>
  );
};

export default RyczaltRateField;
