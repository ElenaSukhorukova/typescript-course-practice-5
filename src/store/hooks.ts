import { useDispatch, useSelector, type TypedUseSelectorHook  } from "react-redux";
import { AppDispatch, AppRootState } from "./store";

type DispatchFunction = () => AppDispatch;

export const useCartDispatch: DispatchFunction = useDispatch;
export const useCartSelector: TypedUseSelectorHook<AppRootState> = useSelector;