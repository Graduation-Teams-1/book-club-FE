import { DateInput } from "@mantine/dates";
import "@mantine/dates/styles.css";
import { format } from "date-fns";

export default function DatePicker({
  label,
  placeholder,
  error,
  value,
  required,
  onChange,
}: Readonly<{
  label: string;
  placeholder: string;
  error?: string;
  value?: string;
  required?: boolean;
  onChange?: (value: string) => void;
}>) {
  return (
    <DateInput
      label={label}
      placeholder={placeholder}
      error={error}
      required={required}
      value={value ? new Date(value) : null}
      onChange={(date) => {
        onChange?.(date ? format(date, "yyyy-MM-dd") : "");
      }}
    />
  );
}
