import { Divider, Paper, Stack, Typography } from "@mui/material";
import Decimal from "decimal.js";
import { formatCurrency } from "../lib/formatters";

type NetIncomePanelProps = {
  netIncome: Decimal;
  taxDue: Decimal;
  zusTotal: Decimal;
};

const NetIncomePanel = ({
  netIncome,
  taxDue,
  zusTotal,
}: NetIncomePanelProps) => {
  return (
    <Paper
      elevation={0}
      sx={{ p: { xs: 3, md: 4 }, border: "1px solid #E6DDD0" }}
    >
      <Stack spacing={2}>
        <Typography variant="h3">Net income</Typography>
        <Typography variant="h2" color="primary" sx={{ fontSize: "2.4rem" }}>
          {formatCurrency(netIncome)}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          After tax and ZUS contributions.
        </Typography>
        <Divider />
        <Stack spacing={1.5}>
          <Stack direction="row" justifyContent="space-between">
            <Typography color="text.secondary">Tax due</Typography>
            <Typography>{formatCurrency(taxDue)}</Typography>
          </Stack>
          <Stack direction="row" justifyContent="space-between">
            <Typography color="text.secondary">ZUS total</Typography>
            <Typography>{formatCurrency(zusTotal)}</Typography>
          </Stack>
        </Stack>
      </Stack>
    </Paper>
  );
};

export default NetIncomePanel;
