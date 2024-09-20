import {RootState} from "../reducers/rootReducer";

export const globalErrors = (store: RootState) => store.globalAppStateReducer.errors;
