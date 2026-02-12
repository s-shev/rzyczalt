import { Box, Stack, Typography } from "@mui/material";

const CalculatorHeader = () => {
  return (
    <Box className="section-fade">
      <Stack spacing={1}>
        <Typography
          variant="h1"
          sx={{ fontSize: { xs: "2.4rem", md: "3.6rem" } }}
        >
          Ryczałt 2026 Calculator
        </Typography>
        <Typography variant="subtitle1" color="text.secondary">
          Monthly view of your gross income converted into net take-home, with a
          clean breakdown of all obligatory payments.
        </Typography>
      </Stack>
    </Box>
  );
};

export default CalculatorHeader;
