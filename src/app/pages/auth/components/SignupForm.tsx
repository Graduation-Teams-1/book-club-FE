import {
  Text,
  Button,
  Checkbox,
  TextInput,
  PasswordInput,
  Radio,
  Group,
  Progress,
} from "@mantine/core";
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { GoogleButton } from "./GoogleButton";
import { FacebookButton } from "./FacebookButton";
import { useForm, FormProvider, Controller } from "react-hook-form";
import { useEffect, useState } from "react";
import { useSignupMutation } from "~/app/store/api/auth/authApi";
import { signupSchema } from "../Schema";
import DatePicker from "~/base/components/DatePickerInput";

const GENRES = [
  { id: 1, label: "Fiction" },
  { id: 2, label: "Non-Fiction" },
  { id: 3, label: "Mystery" },
  { id: 4, label: "Fantasy" },
];

const steps = ["Account Info", "Tell Us"];

const SignupWizard = () => {
  const navigate = useNavigate();
  const [signup, { isLoading, isSuccess }] = useSignupMutation();
  const [step, setStep] = useState(0);

  const methods = useForm({
    resolver: yupResolver(signupSchema),
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
      gender: undefined,
      birthDate: new Date("2025-01-01"),
      location: "",
      favouriteGenresId: [],
      termsAccepted: false,
    },
  });

  const {
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
    control,
  } = methods;

  useEffect(() => {
    if (isSuccess) {
      navigate("/");
    }
  }, [isSuccess, navigate]);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSubmit = async (data: any) => {
    const payload = {
      ...data,
      birthDate:
        data.birthDate instanceof Date
          ? data.birthDate.toISOString().split("T")[0]
          : data.birthDate || null,
    };
    try {
      await signup(payload).unwrap();
    } catch (error) {
      // Log the error response from the API
      // eslint-disable-next-line no-console
      console.error("API error:", error);
    }
  };

  const nextStep = () => setStep((s) => Math.min(s + 1, steps.length - 1));
  const prevStep = () => setStep((s) => Math.max(s - 1, 0));

  return (
    <FormProvider {...methods}>
      <form
        className="max-w-1/2 flex h-screen flex-col items-center justify-center gap-3 p-4 xl:px-24"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Group grow gap={5} mt="xs">
          <Progress
            size="xs"
            color="#402905"
            value={((step + 1) / steps.length) * 100}
            transitionDuration={50}
            className="!bg-[#EAD0A8]"
          />
        </Group>
        <Text className="text-center" component="h1">
          {steps[step]}
        </Text>
        {step === 0 && (
          <>
            <TextInput
              label="Email Address"
              error={errors.email?.message}
              {...methods.register("email")}
              required
              size="lg"
              radius="xl"
              className="w-full"
              placeholder="Enter your email address"
              classNames={{
                input: "!border-[#9E896A]",
                label: "!text-[#402905]",
                required: "!text-red",
              }}
            />
            <TextInput
              label="User Name"
              size="lg"
              required
              radius="xl"
              className="w-full"
              placeholder="Enter your name"
              {...methods.register("fullName")}
              error={errors.fullName?.message}
              classNames={{
                input: "!border-[#9E896A] ",
                label: "!text-[#402905]",
                required: "!text-red",
              }}
            />
            <PasswordInput
              radius={"xl"}
              label="Password"
              placeholder="Enter your password"
              size="lg"
              className="w-full"
              {...methods.register("password")}
              error={errors.password?.message}
              classNames={{
                input: "!border-[#9E896A] ",
                label: "!text-[#402905]",
                required: "!text-red",
              }}
            />
            <Checkbox
              label="By signing up, you accept our terms of use and acknowledge our privacy policy"
              color="#402905"
              {...methods.register("termsAccepted")}
              classNames={{
                label: "!text-[#4A4A4A] text-[15px] font-normal text-center",
              }}
              className="!py-2"
            />
          </>
        )}
        {step === 1 && (
          <>
            <Controller
              control={control}
              name="gender"
              render={({ field }) => (
                <Radio.Group
                  label="Gender"
                  classNames={{ label: "!text-[#76552B] !text-xl" }}
                  className="pt-5"
                  value={field.value}
                  onChange={field.onChange}
                  error={errors.gender?.message}
                >
                  <div className="flex items-center gap-3 py-5">
                    <Radio value="Male" label="Male" color="#402905" />
                    <Radio value="Female" label="Female" color="#402905" />
                  </div>
                </Radio.Group>
              )}
            />
            <div className="w-1/2">
              <Controller
                control={control}
                name="birthDate"
                render={({ field }) => (
                  <DatePicker
                    label="Birth Date"
                    placeholder="Pick a date"
                    value={
                      field.value instanceof Date
                        ? field.value.toISOString().split("T")[0]
                        : field.value || undefined
                    }
                    onChange={field.onChange}
                    error={errors.birthDate?.message as string}
                  />
                )}
              />
            </div>
            <TextInput
              label="Location"
              size="lg"
              required
              radius="xl"
              className="w-full"
              placeholder="Enter your location"
              {...methods.register("location")}
              error={errors.location?.message}
              classNames={{
                input: "!border-[#9E896A] ",
                label: "!text-[#402905]",
                required: "!text-red",
              }}
            />
            <div className="flex flex-wrap gap-3 pt-5">
              {GENRES.map((genre) => (
                <Button
                  variant={
                    watch("favouriteGenresId").includes(genre.id)
                      ? "filled"
                      : "outline"
                  }
                  key={genre.id}
                  onClick={(e) => {
                    e.preventDefault();
                    const current = watch("favouriteGenresId");
                    setValue(
                      "favouriteGenresId",
                      current.includes(genre.id)
                        ? current.filter((g) => g !== genre.id)
                        : [...current, genre.id],
                    );
                  }}
                  className={`rounded-lg border px-4 py-2 ${
                    watch("favouriteGenresId").includes(genre.id)
                      ? "!bg-[#402905] !text-white"
                      : "!border-[#40290580] !bg-white !text-[#402905]"
                  }`}
                >
                  {genre.label}
                </Button>
              ))}
            </div>
            {errors.favouriteGenresId && (
              <Text c="red" size="sm">
                {errors.favouriteGenresId.message as string}
              </Text>
            )}
          </>
        )}
        <div className="flex w-full items-center justify-between pt-5">
          <Button
            variant="outline"
            w={150}
            className="!text-[#402905]"
            onClick={prevStep}
            disabled={step === 0}
            type="button"
          >
            Previous
          </Button>
          {step < steps.length - 1 ? (
            <Button
              color="#402905"
              w={150}
              onClick={async () => {
                const valid = await methods.trigger([
                  "email",
                  "fullName",
                  "password",
                  "termsAccepted",
                ]);
                if (valid) nextStep();
              }}
              type="button"
            >
              Next
            </Button>
          ) : (
            <Button
              color="#402905"
              w={150}
              type="submit"
              loading={isLoading}
              disabled={isLoading}
              aria-label="Submit"
            >
              Register
            </Button>
          )}
        </div>
        <div className="flex items-center justify-center gap-4 pt-4">
          <GoogleButton w={235} h={50}>
            Sign up with Google
          </GoogleButton>
          <FacebookButton w={235} h={50}>
            Sign up with Facebook
          </FacebookButton>
        </div>
      </form>
    </FormProvider>
  );
};

export default SignupWizard;
