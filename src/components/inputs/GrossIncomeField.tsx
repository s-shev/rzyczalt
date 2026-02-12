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
      onChange={(event) => onChange(event.target.value.replace(/,/g, "."))}
      type="text"
      size="small"
      fullWidth
      inputProps={{ inputMode: "decimal", pattern: "^[0-9]*[.,]?[0-9]*$" }}
      InputProps={{
        endAdornment: <InputAdornment position="end">PLN</InputAdornment>,
      }}
    />
  );
};

export default GrossIncomeField;
