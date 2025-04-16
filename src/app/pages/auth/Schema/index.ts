import * as Yup from "yup";
// import { differenceInYears } from "date-fns";

export const signupSchema = Yup.object({
  fullName: Yup.string()
    .min(2, "First Name must be at least 2 characters")
    .max(50, "First Name must be at most 50 characters")
    .required("First name is required")
    .test(
      "is-valid-length",
      "First name must be between 2 and 50 characters",
      (value) => {
        const isValid = value && value.length >= 2 && value.length <= 50;
        return Boolean(isValid);
      },
    ),

  email: Yup.string()
    .email("Please enter a valid email address")
    .required("Email is required")
    .test("is-valid-email", "Email is invalid", (value) => {
      const isValid = value.includes("@");
      return Boolean(isValid);
    }),

  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
    .matches(/[a-z]/, "Password must contain at least one lowercase letter")
    .matches(/\d/, "Password must contain at least one number")
    .matches(
      /[$&+,:;=?@#|'<>.^*()%!-]/,
      "Password must contain at least one special character",
    )
    .required("Password is required"),
  // birthDate: Yup.string()
  //   .required("Date of birth is required")
  //   .test("age", "You must be at least 18 years old", (value) => {
  //     if (!value) return false;
  //     return differenceInYears(new Date(), new Date(value)) >= 18;
  //   }),
  // location: Yup.string().required(),
  // gender: Yup.mixed<"Male" | "Female" | "Other">()
  //   .oneOf(["Male", "Female", "Other"], "Invalid gender")
  //   .required("Gender is required"),

  // acceptTerms: Yup.boolean()
  //   .required("You must accept the terms and conditions")
  //   .oneOf([true], "You must accept the terms and conditions"),
});

export const signinSchema = Yup.object().shape({
  email: Yup.string()
    .email("Please enter valid email")
    .required("Email is required"),
  password: Yup.string().required("Password is required"),
  remember: Yup.boolean(),
});

export const forgotPasswordSchema = Yup.object().shape({
  email: Yup.string()
    .email("Please enter valid email")
    .required("Email is required"),
});

export const restPasswordSchema = Yup.object().shape({
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
    .matches(/[a-z]/, "Password must contain at least one lowercase letter")
    .matches(/\d/, "Password must contain at least one number")
    .matches(
      /[$&+,:;=?@#|'<>.^*()%!-]/,
      "Password must contain at least one special character",
    )
    .required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), undefined], "Passwords do not match")
    .required("Please confirm your password"),
});
