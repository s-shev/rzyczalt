import { InputAdornment, TextField } from "@mui/material";

type GrossIncomeFieldProps = {
  value: string;
  onChange: (value: string) => void;
};

const GrossIncomeField = ({ value, onChange }: GrossIncomeFieldProps) => {
  return (
    <TextField
      label="Gross income (monthly)"
      value={value}
      onChange={(event) => onChange(event.target.value)}
      type="number"
      size="small"
      fullWidth
      InputProps={{
        endAdornment: <InputAdornment position="end">PLN</InputAdornment>,
      }}
    />
  );
};

export default GrossIncomeField;
