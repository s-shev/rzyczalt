import { Box } from "@mui/material";
import type { ReactNode } from "react";

type FormulaBlockProps = {
  children: ReactNode;
};

const FormulaBlock = ({ children }: FormulaBlockProps) => {
  return (
    <Box
      sx={{
        px: 1.5,
        py: 1,
        borderRadius: 0.75,
        border: "1px solid #DCD3C4",
        backgroundColor: "#F9F6F0",
        color: "#2A2520",
        fontFamily:
          "ui-monospace, SFMono-Regular, SFMono, Menlo, Monaco, Consolas, monospace",
        fontSize: "0.75rem",
        lineHeight: 1.5,
      }}
    >
      {children}
    </Box>
  );
};

export default FormulaBlock;
