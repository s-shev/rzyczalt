import { Paper, Stack, Typography } from "@mui/material";

const AssumptionsPanel = () => {
  return (
    <Paper
      elevation={0}
      className="section-fade delay-2"
      sx={{ p: { xs: 2, sm: 2.5, md: 4 }, border: "1px dashed #D7CCBD" }}
    >
      <Stack spacing={1}>
        <Typography variant="subtitle2">Assumptions</Typography>
        <Typography variant="body2" color="text.secondary">
          The calculator uses 2026 parameters and assumes the provided gross
          income is monthly. Health contribution is based on the tier multiplier
          from annual revenue.
        </Typography>
      </Stack>
    </Paper>
  );
};

export default AssumptionsPanel;
