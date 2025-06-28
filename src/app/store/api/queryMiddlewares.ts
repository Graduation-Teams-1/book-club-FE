import { Middleware } from "@reduxjs/toolkit";
import { authApi } from "./auth/authApi";
import { clubsApi } from "./clubs/clubsApi";
import { genresApi } from "./generes/genres";

const middlewares: Middleware[] = [
  authApi.middleware,
  clubsApi.middleware,
  genresApi.middleware,
];

export default middlewares;
