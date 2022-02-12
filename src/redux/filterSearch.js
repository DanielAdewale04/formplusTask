import { createSlice} from "@reduxjs/toolkit";


const searchSlice = createSlice({
    name: "searchSlice",
    initialState: "",
    reducers: {
        storeSearch: (state, action) => action.payload
    }
})

export default searchSlice;

