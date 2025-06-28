import { authApi } from "./auth/authApi";
import { clubsApi } from "./clubs/clubsApi";
import { genresApi } from "./generes/genres";

export default {
  [authApi.reducerPath]: authApi.reducer,
  [clubsApi.reducerPath]: clubsApi.reducer,
  [genresApi.reducerPath]: genresApi.reducer,
};
