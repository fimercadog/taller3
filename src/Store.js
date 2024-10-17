import { configureStore } from "@reduxjs/toolkit";
import reducers from "./reducers";

const store = configureStore( {
    reducer: {
        taller3: reducers
    }
} ) ;

export default store ;