import {
  PropsWithChildren,
  createContext,
  useCallback,
  useMemo,
  useState,
  useEffect,
} from "react";
import { authApi, useSignoutMutation } from "../store/api/auth/authApi";
import { useAppDispatch } from "../store";
import { setRoles } from "../store/app/navigationSlice";
import { User } from "../store/types";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext<{
  isAuthenticated: boolean;
  user?: User | Record<string, never>;
  token?: string | null;
  setUser?: (user: User) => void;
  setToken?: (token: string) => void;
  signout?: () => void;
  isLoadingSignout?: boolean;
  isSignoutSuccess?: boolean;
}>({
  isAuthenticated: false,
  user: {},
  token: null,
  setUser: () => {},
  setToken: () => {},
  signout: () => {},
  isLoadingSignout: false,
  isSignoutSuccess: false,
});

function AuthProvider({ children }: PropsWithChildren) {
  const [user, setUser] = useState<User | Record<string, never>>({});
  const [token, setTokenState] = useState<string | null>(() =>
    localStorage.getItem("token"),
  );
  const [logOut, { isLoading: isLoadingSignout, isSuccess: isSignoutSuccess }] =
    useSignoutMutation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      localStorage.setItem("token", token);
    } else {
      localStorage.removeItem("token");
    }
  }, [token]);

  const setToken = (t: string) => {
    setTokenState(t);
    localStorage.setItem("token", t);
  };

  const signout = useCallback(() => {
    setTokenState(null);
    setUser({});
    localStorage.removeItem("token");
    logOut()
      .unwrap()
      .then(() => {
        dispatch(authApi.util.resetApiState());
        dispatch(setRoles([]));
        navigate("/");
      })
      .catch(() => {
        dispatch(authApi.util.resetApiState());
        dispatch(setRoles([]));
        navigate("/");
      });
  }, [dispatch, navigate, logOut]);

  const isAuthenticated = !!token;

  const contextValue = useMemo(
    () => ({
      isAuthenticated,
      user,
      token,
      setUser,
      setToken,
      signout,
      isLoadingSignout,
      isSignoutSuccess,
    }),
    [isAuthenticated, user, token, signout, isLoadingSignout, isSignoutSuccess],
  );

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
}

export { AuthContext, AuthProvider };
