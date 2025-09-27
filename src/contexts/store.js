import { configureStore } from "@reduxjs/toolkit";
import enderecoReducer from "./enderecoSlice";

export default configureStore({
    reducer: {
        endereco: enderecoReducer
    }
});