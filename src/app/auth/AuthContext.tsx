import {
  PropsWithChildren,
  createContext,
  //   useCallback,
  useEffect,
  useMemo,
} from "react";
import { SplashScreen } from "base/core";
import {
  //   authApi,
  useProfileQuery,
  //   useSignoutMutation,
} from "../store/api/auth/authApi";
import { useAppDispatch } from "../store";
import { setRoles } from "../store/app/navigationSlice";
import { User } from "../store/types";
// import { useNavigate } from "react-router-dom";

const AuthContext = createContext<{
  isAuthenticated: boolean;
  user?: User | Record<string, never>;
  signout?: () => void;
  isLoadingSignout?: boolean;
  isSignoutSuccess?: boolean;
}>({
  isAuthenticated: false,
  user: {},
  signout: () => {},
  isLoadingSignout: false,
  isSignoutSuccess: false,
});

function AuthProvider({ children }: PropsWithChildren) {
  const { data: user, isLoading, isSuccess: isUserSuccess } = useProfileQuery();
  //   const [logOut, { isLoading: isLoadingSignout, isSuccess: isSignoutSuccess }] =
  //     useSignoutMutation();

  const dispatch = useAppDispatch();
  //   const navigate = useNavigate();

  useEffect(() => {
    if (isUserSuccess && user) {
      dispatch(setRoles(user.permissions));
    }
  }, [isUserSuccess, user, dispatch]);

  //   const signout = useCallback(() => {
  //     logOut()
  //       .unwrap()
  //       .then(() => {
  //         dispatch(authApi.util.resetApiState());
  //         dispatch(setRoles([]));
  //         navigate("/sign-in");
  //       })
  //       .catch(() => {
  //         dispatch(authApi.util.resetApiState());
  //         dispatch(setRoles([]));
  //         navigate("/sign-in");
  //       });
  //   }, [dispatch, navigate]);

  const contextValue = useMemo(
    () => ({
      isAuthenticated: Boolean(user),
      user,
      //   signout,
      //   isLoadingSignout,
      //   isSignoutSuccess,
    }),
    [user],
  );

  return isLoading ? (
    <SplashScreen />
  ) : (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
}

export { AuthContext, AuthProvider };
