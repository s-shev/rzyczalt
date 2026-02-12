import { Box, Stack, Typography } from "@mui/material";

const CalculatorHeader = () => {
  return (
    <Box className="section-fade">
      <Stack spacing={{ xs: 0.5, md: 1 }}>
        <Typography variant="h1">Ryczałt 2026 Calculator</Typography>
        <Typography
          variant="subtitle1"
          color="text.secondary"
          sx={{ maxWidth: 640 }}
        >
          Monthly view of your gross income converted into net take-home, with a
          clean breakdown of all obligatory payments.
        </Typography>
      </Stack>
    </Box>
  );
};

export default CalculatorHeader;
