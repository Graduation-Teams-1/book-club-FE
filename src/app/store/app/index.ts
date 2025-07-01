import { combineReducers } from "@reduxjs/toolkit";
import settings from "./settingsSlice";
import navigation from "./navigationSlice";
import tabs from "./tabsSlice";
import headers from "./tableHeaderSlice";
import activeProduct from "./activeProductSlice";

const appReducers = combineReducers({
  settings,
  navigation,
  tabs,
  headers,
  activeProduct,
});

export default appReducers;
