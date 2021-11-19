import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import rootReducer from "./rootReducer";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
const persistConfig = {
  key: "root",
  storage,
};
const middleWare = [logger];
const persistedReducer = persistReducer(persistConfig, rootReducer);
// const store = createStore(rootReducer, applyMiddleware(...middleWare));

export const store = createStore(
  persistedReducer,
  applyMiddleware(...middleWare)
);
export const persistor = persistStore(store);

// // const store = () => {
// //   let store = createStore(persistedReducer, applyMiddleware(...middleWare));
// //   let persistor = persistStore(store);
// //   return { store, persistor };
// // };

// const Store = {
//   store,
//   persistor,
// };

// export default Store;
