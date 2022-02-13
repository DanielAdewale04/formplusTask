import React from "react";
import { createSlice } from "@reduxjs/toolkit";

const getCategory = createSlice({
    name: "getCategory",
    initialState: "All",
    reducers: {
        getCat: (state, action) => action.payload
    }
})

export default getCategory;