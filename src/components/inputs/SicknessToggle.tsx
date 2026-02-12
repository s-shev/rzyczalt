import { Stack, Switch, Typography } from "@mui/material";
import InfoTooltip from "../InfoTooltip";
import type { ReactNode } from "react";

type SicknessToggleProps = {
  checked: boolean;
  onChange: (value: boolean) => void;
  tooltipTitle: ReactNode;
};

const SicknessToggle = ({
  checked,
  onChange,
  tooltipTitle,
}: SicknessToggleProps) => {
  return (
    <Stack direction="row" spacing={1} alignItems="center">
      <Switch
        id="sickness-insurance"
        checked={checked}
        onChange={(event) => onChange(event.target.checked)}
      />
      <Typography
        component="label"
        htmlFor="sickness-insurance"
        variant="body2"
        sx={{ cursor: "pointer" }}
      >
        Include sickness insurance
      </Typography>
      <InfoTooltip
        ariaLabel="What is sickness insurance?"
        title={tooltipTitle}
      />
    </Stack>
  );
};

export default SicknessToggle;
