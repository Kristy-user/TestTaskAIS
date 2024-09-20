import { RootState } from '../reducers/rootReducer'; // Import RootState

export const userSelector = (store: RootState) => store.userReducer.user;
export const userLogInSelector = (store: RootState) => store.userReducer.isLoggedIn;
