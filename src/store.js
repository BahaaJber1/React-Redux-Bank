import { configureStore } from "@reduxjs/toolkit";

import accountReducer from "./featuers/accounts/accountSlice";
import customerReducer from "./featuers/customers/customerSlice";

const store = configureStore({
	reducer: { account: accountReducer, customer: customerReducer },
});

export default store;
