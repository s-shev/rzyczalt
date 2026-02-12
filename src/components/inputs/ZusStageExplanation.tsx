import { Box, Stack, Typography } from "@mui/material";
import type { ZusStage } from "../../lib/calc";

type ZusStageExplanationProps = {
  zusStage: ZusStage;
};

const ZusStageExplanation = ({ zusStage }: ZusStageExplanationProps) => {
  return (
    <Box sx={{ mt: 1.2 }}>
      {zusStage === "ulga" && (
        <Stack spacing={0.4}>
          <Typography variant="body2" color="text.secondary">
            For new JDG entrepreneurs, social insurance is not due and only the
            health contribution applies for up to 6 months.
          </Typography>
          <Typography variant="caption" color="text.secondary">
            Eligibility criteria:
          </Typography>
          <Typography
            component="ul"
            variant="caption"
            color="text.secondary"
            sx={{ pl: 2, m: 0 }}
          >
            <li>No JDG in the last 60 months (5 years).</li>
            <li>
              No providing the same services to a former employer from the
              current or previous year.
            </li>
          </Typography>
        </Stack>
      )}
      {zusStage === "maly" && (
        <Stack spacing={0.4}>
          <Typography variant="body2" color="text.secondary">
            Applies for 24 full months after the 6-month start-up relief.
          </Typography>
          <Typography variant="caption" color="text.secondary">
            Eligibility criteria:
          </Typography>
          <Typography
            component="ul"
            variant="caption"
            color="text.secondary"
            sx={{ pl: 2, m: 0 }}
          >
            <li>Ulga na start completed or skipped.</li>
            <li>No JDG in the last 60 months (5 years).</li>
            <li>
              No providing the same services to a former employer from the
              current or previous year.
            </li>
          </Typography>
        </Stack>
      )}
      {zusStage === "duzy" && (
        <Stack spacing={0.4}>
          <Typography variant="body2" color="text.secondary">
            Standard ZUS.
          </Typography>
          <Typography variant="caption" color="text.secondary">
            Eligibility criteria:
          </Typography>
          <Typography
            component="ul"
            variant="caption"
            color="text.secondary"
            sx={{ pl: 2, m: 0 }}
          >
            <li>
              Ulga na start and Preferential ZUS are completed or skipped.
            </li>
            <li>
              B2B for a former employer with the same tasks in the current or
              previous year.
            </li>
            <li>
              Not eligible for Mały ZUS Plus (annual revenue over 120,000 PLN in
              the previous year).
            </li>
          </Typography>
        </Stack>
      )}
    </Box>
  );
};

export default ZusStageExplanation;
