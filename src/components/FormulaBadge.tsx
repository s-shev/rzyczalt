import { Box } from "@mui/material";
import type { ReactNode } from "react";

type FormulaBadgeProps = {
  children: ReactNode;
};

const FormulaBadge = ({ children }: FormulaBadgeProps) => {
  return (
    <Box
      component="span"
      sx={{
        px: 0.6,
        py: 0.15,
        borderRadius: 999,
        border: "1px solid #D5CBB8",
        backgroundColor: "#EFE6D5",
        color: "#4A4238",
        fontSize: "0.7rem",
        lineHeight: 1.2,
        whiteSpace: "nowrap",
      }}
    >
      {children}
    </Box>
  );
};

export default FormulaBadge;
