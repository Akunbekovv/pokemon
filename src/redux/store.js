import {configureStore} from "@reduxjs/toolkit";
import pockemonsSlices from "./slices/pockemonsSlices";
import pockemonSlice from "./slices/pockemonSlice";

export const store = configureStore({
    reducer : {
        pockemonsSlices,
        pockemonSlice
    }
})