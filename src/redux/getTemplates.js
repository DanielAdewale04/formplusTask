import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const ApiUrl = "https://front-end-task-dot-result-analytics-dot-fpls-dev.uc.r.appspot.com/api/v1/public/task_templates";

export const getTemp = createAsyncThunk(
    'getTemplates/getTemp',
    async () => {
        return await axios.get(ApiUrl).then((res) => res.data).catch((err) => console.log(err))
    }
)

const templatesSlice = createSlice({
    name: "getTemplates",
    initialState: {
        templates: [],
        totalTemplates:0,
        numberOfPages: [],
        status: null
    },
    extraReducers: {
        [getTemp.pending] : (state, action) => {
            state.templates = []
            state.status = 'loading'
        },
        [getTemp.fulfilled] : (state, { payload }) => {
            state.templates = payload
            if (payload.lenth != 0 ) {
                state.totalTemplates = payload.length
            }
            state.status = "success!"
        },
        [getTemp.rejected] : (state, action) => {
            state.status = "Failed!"
            state.templates = []
        }
    }
})

// export const { getItem } = templatesSlice.actions;

export default templatesSlice.reducer;