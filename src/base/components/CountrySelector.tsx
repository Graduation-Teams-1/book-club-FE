import { Select } from "@mantine/core";
import { Controller, useFormContext } from "react-hook-form";
import { countriesNames } from "../hooks/useCountries";

interface CountryFormData {
  country: string;
}

export default function CountrySelector() {
  const {
    control,
    formState: { errors },
  } = useFormContext<CountryFormData>();
  return (
    <Controller
      name="country"
      control={control}
      defaultValue=""
      render={({ field }) => (
        <Select
          {...field}
          label="Country"
          placeholder="Pick a country"
          value={field.value}
          data={countriesNames}
          error={errors.country?.message}
          onChange={(value) => field.onChange(value as string)}
          required
          searchable
        />
      )}
    />
  );
}
