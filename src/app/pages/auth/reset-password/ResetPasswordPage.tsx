// import AuthLayout from "../components/AuthLayout";
// import { useSearchParams } from "react-router-dom";
// import resetPasswordLogo from "assets/imgs/reset-password.svg";
// // import ResetPasswordForm from "../components/ResetPasswordForm";
// import { FormType } from "../enum";
// export default function ResetPasswordPage() {
//   const [searchParams] = useSearchParams();
//   const token = searchParams.get("token");

//   return (
//     <AuthLayout image={resetPasswordLogo} type={FormType.RESET_PASSWORD}>
//       {token ? (
//         // <ResetPasswordForm token={token} />
//         <div></div>
//       ) : (
//         <div className="text-center text-red-500">Invalid Reset token</div>
//       )}
//     </AuthLayout>
//   );
// }
