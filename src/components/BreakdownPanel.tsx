import { Divider, Paper, Stack, Typography } from "@mui/material";
import { CalcOutput } from "../lib/calc";
import { formatCurrency } from "../lib/formatters";

type BreakdownPanelProps = {
  healthContribution: CalcOutput["healthContribution"];
  socialBreakdown: CalcOutput["socialBreakdown"];
  socialInsurance: CalcOutput["socialInsurance"];
};

const BreakdownPanel = ({
  healthContribution,
  socialBreakdown,
  socialInsurance,
}: BreakdownPanelProps) => {
  return (
    <Paper
      elevation={0}
      sx={{ p: { xs: 2, sm: 2.5, md: 4 }, border: "1px solid #E6DDD0" }}
    >
      <Stack spacing={{ xs: 1.3, md: 2 }}>
        <Typography variant="h3">Breakdown</Typography>
        <Stack spacing={{ xs: 0.9, md: 1.2 }}>
          <Stack direction="row" justifyContent="space-between" spacing={1.5}>
            <Typography color="text.secondary">Health contribution</Typography>
            <Typography>{formatCurrency(healthContribution)}</Typography>
          </Stack>
          <Stack direction="row" justifyContent="space-between" spacing={1.5}>
            <Typography color="text.secondary">Pension</Typography>
            <Typography>{formatCurrency(socialBreakdown.pension)}</Typography>
          </Stack>
          <Stack direction="row" justifyContent="space-between" spacing={1.5}>
            <Typography color="text.secondary">Disability</Typography>
            <Typography>
              {formatCurrency(socialBreakdown.disability)}
            </Typography>
          </Stack>
          <Stack direction="row" justifyContent="space-between" spacing={1.5}>
            <Typography color="text.secondary">Sickness</Typography>
            <Typography>{formatCurrency(socialBreakdown.sickness)}</Typography>
          </Stack>
          <Stack direction="row" justifyContent="space-between" spacing={1.5}>
            <Typography color="text.secondary">Accident</Typography>
            <Typography>{formatCurrency(socialBreakdown.accident)}</Typography>
          </Stack>
          <Stack direction="row" justifyContent="space-between" spacing={1.5}>
            <Typography color="text.secondary">Labor Fund</Typography>
            <Typography>{formatCurrency(socialBreakdown.laborFund)}</Typography>
          </Stack>
          <Divider />
          <Stack direction="row" justifyContent="space-between" spacing={1.5}>
            <Typography color="text.secondary">
              Social insurance total
            </Typography>
            <Typography>{formatCurrency(socialInsurance)}</Typography>
          </Stack>
        </Stack>
      </Stack>
    </Paper>
  );
};

export default BreakdownPanel;
