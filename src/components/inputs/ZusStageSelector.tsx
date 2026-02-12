import {
  Box,
  Stack,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import InfoTooltip from "../InfoTooltip";
import type { ZusStage } from "../../lib/calc";
import ZusStageExplanation from "./ZusStageExplanation";

type ZusStageSelectorProps = {
  zusStage: ZusStage;
  onZusStageChange: (value: ZusStage) => void;
};

const ZusStageSelector = ({
  zusStage,
  onZusStageChange,
}: ZusStageSelectorProps) => {
  return (
    <Box>
      <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 1 }}>
        <Typography variant="subtitle2">ZUS stage</Typography>
        <InfoTooltip
          ariaLabel="What is the ZUS stage?"
          title={
            <Stack spacing={0.5}>
              <Typography variant="subtitle2">
                What is the ZUS stage?
              </Typography>
              <Typography variant="body2">
                ZUS stage determines which social insurance components are due
                based on business tenure. It affects pension, disability,
                accident, sickness, and labor fund contributions.
              </Typography>
            </Stack>
          }
        />
      </Stack>
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
      <ZusStageExplanation zusStage={zusStage} />
    </Box>
  );
};

export default ZusStageSelector;
