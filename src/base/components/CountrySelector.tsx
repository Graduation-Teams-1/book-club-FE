import { Select } from "@mantine/core";
import { Controller, useFormContext } from "react-hook-form";
import { UserSignupBody } from "~/app/store/types";
import { countriesNames } from "../hooks/useCountries";

export default function CountrySelector() {
  const {
    control,
    formState: { errors },
  } = useFormContext<UserSignupBody>();
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
