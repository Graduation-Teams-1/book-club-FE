import { useState } from "react";
import { Button, Group, Progress, Radio } from "@mantine/core";
import DatePicker from "~/base/components/DatePickerInput";
// import { FormProvider } from "react-hook-form";

const TellUs = () => {
  const [step, setStep] = useState(1); // Track the current step
  const totalSteps = 3; // Total number of steps
  const [favoriteGenre, setFavoriteGenre] = useState<string[]>([]);
  const handleNext = () => {
    if (step < totalSteps) setStep(step + 1);
  };

  const handlePrevious = () => {
    if (step > 1) setStep(step - 1);
  };
  const generData = [
    { value: "Fiction", label: "Fiction" },
    { value: "Non-Fiction", label: "Non-Fiction" },
    { value: "Mystery", label: "Mystery" },
    { value: "Fantasy", label: "Fantasy" },
  ];

  return (
    <form className="flex h-[100vh] items-center justify-center">
      <div className="w-1/2 rounded-3xl border border-[#402905] p-10">
        {/* Progress Bar */}
        <Group grow gap={5} mt="xs">
          <Progress
            size="xs"
            color="#402905"
            value={(step / totalSteps) * 100}
            transitionDuration={50}
            className="!bg-[#EAD0A8]"
          />
        </Group>

        {/* Form Content */}
        <h1 className="py-5 text-4xl font-bold capitalize text-[#402905]">
          {step === 1 && "Tell us about yourself"}
          {step === 2 && "Your Reading Preferences"}
          {step === 3 && "Finalize Your Profile"}
        </h1>

        {step === 1 && (
          <>
            <h4 className="text-xl text-[#83838C]">
              Help us personalize your book recommendations
            </h4>
            <Radio.Group
              label="Gender"
              classNames={{ label: "!text-[#76552B] !text-xl" }}
              className="pt-5"
            >
              <div className="flex items-center gap-3 py-5">
                <Radio value={"Male"} label="Male" color="#402905" />
                <Radio value={"Female"} label="Female" color="#402905" />
              </div>
            </Radio.Group>
            <div className="w-1/2">
              <DatePicker
                label="Birth Date"
                placeholder="Pick a date"
                // value={watch("dob")}
                // onChange={(date) => {
                //   setValue("dob", date);
                //   trigger("dob");
                // }}
                // error={errors.dob?.message as string}
              />
            </div>
          </>
        )}

        {step === 2 && (
          <>
            <h4 className="text-xl text-[#83838C]">
              What genres do you enjoy reading?
            </h4>
            <div className="flex flex-wrap gap-3 pt-5">
              {generData.map((genre) => (
                <Button
                  variant="outline"
                  key={genre.value}
                  onClick={() =>
                    setFavoriteGenre((prev) =>
                      prev.includes(genre.value)
                        ? prev.filter((g) => g !== genre.value)
                        : [...prev, genre.value],
                    )
                  }
                  className={`rounded-lg border px-4 py-2 ${
                    favoriteGenre.includes(genre.value)
                      ? "!bg-[#402905] !text-white"
                      : "!border-[#40290580] !bg-white !text-[#402905]"
                  }`}
                >
                  {genre.label}
                </Button>
              ))}
            </div>
          </>
        )}

        {step === 3 && (
          <>
            <h4 className="text-xl text-[#83838C]">
              Review your information and submit
            </h4>
            <p className="py-5 text-[#402905]">
              Thank you for providing your details. Click "Submit" to complete
              your profile.
            </p>
          </>
        )}

        {/* Navigation Buttons */}
        <div className="flex w-full items-center justify-between pt-5">
          <Button
            variant="outline"
            w={150}
            className="!text-[#402905]"
            onClick={handlePrevious}
            disabled={step === 1}
          >
            Previous
          </Button>
          {step < totalSteps ? (
            <Button color="#402905" w={150} onClick={handleNext}>
              Next
            </Button>
          ) : (
            <Button color="#402905" w={150}>
              Submit
            </Button>
          )}
        </div>
      </div>
    </form>
  );
};

export default TellUs;
